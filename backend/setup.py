"""
GenomeScan AI — Setup Script
Downloads hg38 reference genome and installs dependencies.
"""
import os
import sys
import subprocess

BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BACKEND_DIR, "data")
GENOME_PATH = os.path.join(DATA_DIR, "hg38.fa")

def main():
    print("=" * 60)
    print("  GenomeScan AI — Backend Setup")
    print("=" * 60)

    # Install dependencies
    print("\n[1/2] Installing Python dependencies...")
    req_path = os.path.join(BACKEND_DIR, "requirements.txt")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", req_path])
    print("✅ Dependencies installed.")

    # Check genome
    print("\n[2/2] Checking reference genome...")
    os.makedirs(DATA_DIR, exist_ok=True)

    if os.path.exists(GENOME_PATH):
        print(f"✅ hg38.fa found at: {GENOME_PATH}")
    else:
        print(f"⚠  hg38.fa NOT FOUND at: {GENOME_PATH}")
        print()
        print("The reference genome (3.1 GB) is needed for sequence extraction.")
        print("The server will still work without it using synthetic sequences.")
        print()
        print("To download (optional):")
        print(f"  1. Download: https://hgdownload.soe.ucsc.edu/goldenPath/hg38/bigZips/hg38.fa.gz")
        print(f"  2. Extract and place at: {GENOME_PATH}")
        print()

    print("=" * 60)
    print("  Setup complete! Start the server with:")
    print(f"  python {os.path.join(BACKEND_DIR, 'server.py')}")
    print("=" * 60)

if __name__ == "__main__":
    main()
