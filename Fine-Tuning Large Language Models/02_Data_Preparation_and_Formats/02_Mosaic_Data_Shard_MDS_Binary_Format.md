# Mosaic Data Shard (MDS) Binary Format

> **Lesson References:** `2.4`, `2.5`  
> **Slide References:** Slide 30  
> **Core Technologies:** MosaicML `streaming`, `.mds` container, `index.json`, `MDSWriter`  

---

## 1. Why JSONL Falls Short at Scale

While JSONL is human-readable and straightforward for dataset authoring, it introduces severe bottlenecks when scaled across distributed GPU clusters:
1. **CPU Tokenization Bottlenecks:** If raw text is tokenized dynamically on each GPU worker during training, expensive GPUs frequently stall waiting for CPU threads to parse JSON strings and compute BPE token IDs.
2. **File Size and Storage I/O:** Uncompressed text consumes excessive bandwidth and storage capacity.
3. **Random Access and Shuffling Limitations:** Shuffling a multi-gigabyte text file across 32 or 64 distributed workers requires either loading the entire dataset into memory or executing complex distributed index queries.

To eliminate these constraints, the Mosaic AI engine compiles training datasets into the **Mosaic Data Shard (`.mds`)** binary container format.

---

## 2. Anatomy of the MDS Format

An MDS dataset is composed of a metadata manifest (`index.json`) and a set of self-contained binary shard files (`shard.00000.mds`, `shard.00001.mds`, etc.):

```
curated_dataset_mds/
├── index.json                  # Dataset manifest, column schema, shard boundaries
├── shard.00000.mds             # Binary chunk containing samples 0 to 49,999
├── shard.00001.mds             # Binary chunk containing samples 50,000 to 99,999
└── shard.00002.mds             # Binary chunk containing samples 100,000 to ...
```

### The `index.json` Manifest
The manifest acts as the central directory for the distributed streaming loader. It enables worker processes to know exactly which shard contains any given sample without downloading or reading preceding shards:

```json
{
  "version": 2,
  "shards": [
    {
      "column_encodings": ["int32", "int32"],
      "column_names": ["input_ids", "labels"],
      "column_sizes": [null, null],
      "compression": "zstd",
      "format": "mds",
      "raw_data": {
        "byte_count": 67108864,
        "hashes": {
          "sha1": "7c4b6932e6027a4d2e74..."
        },
        "samples": 32768
      },
      "samples": 32768,
      "zip_data": null
    }
  ]
}
```

### Binary Shard Internal Layout
Each `.mds` file contains:
- **Header:** Contains magic bytes (`MDS`), format version, compression algorithm (e.g., `zstd`), and sample count.
- **Sample Offset Table:** An index of byte offsets for each sample within the shard, enabling sub-millisecond random access.
- **Serialized Sample Data:** Pre-tokenized arrays of integers representing input IDs, attention masks, and label tensors, compressed using high-speed compression algorithms.

---

## 3. Streaming Mechanics During Training

When training begins on an 8-GPU node:
1. **Manifest Retrieval:** Each worker downloads `index.json` (~few KB) in milliseconds.
2. **Deterministic Partitioning:** The global dataset sample sequence is mathematically shuffled using a deterministic seed. Shards are dynamically assigned across workers.
3. **Prefetching into RAM/Disk Cache:** The `streaming.StreamingDataset` worker starts streaming Shard 0. A background thread immediately begins prefetching Shard 1.
4. **Immediate Computation:** GPU tensor cores receive pre-tokenized batches immediately, achieving 100% compute saturation without CPU tokenization latency.
5. **FIFO Eviction:** Once all workers on a node finish reading Shard 0, the local cache evicts it from the temporary SSD, ensuring that local disk usage remains strictly bounded regardless of total dataset size.

---

## 4. Programmatic Conversion: Writing MDS with Python

When building custom advanced pipelines or converting large volumes of raw text, practitioners can use the `streaming.MDSWriter` API:

```python
import json
from transformers import AutoTokenizer
from streaming import MDSWriter

# 1. Initialize the tokenizer
model_id = "meta-llama/Meta-Llama-3-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)

# 2. Define target MDS schema
columns = {
    "tokens": "bytes"  # Store pre-tokenized numpy arrays or binary strings
}

output_dir = "/Volumes/enterprise_catalog/genai/mds_preprocessed"

# 3. Initialize MDSWriter with zstd compression and 64MB shard size target
with MDSWriter(
    out=output_dir,
    columns=columns,
    compression="zstd",
    size_limit="64mb"
) as writer:
    
    # Read raw JSONL records
    with open("raw_dataset.jsonl", "r", encoding="utf-8") as f:
        for line in f:
            record = json.loads(line)
            prompt = record["prompt"]
            response = record["response"]
            
            # Format according to model chat template
            full_text = f"<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n{response}<|eot_id|>"
            
            # Pre-tokenize
            encoded = tokenizer.encode(full_text, return_tensors=None)
            
            # Write sample directly to binary shard
            writer.write({
                "tokens": bytes(encoded)
            })

print("Successfully compiled dataset into Mosaic Data Shards (.mds)!")
```
