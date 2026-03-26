import fitz  # PyMuPDF
import os
import glob

pdf_files = glob.glob("*.pdf")

for pdf_file in pdf_files:
    try:
        doc = fitz.open(pdf_file)
        text = ""
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text += f"--- SLIDE {page_num + 1} ---\n"
            text += page.get_text() + "\n\n"
        
        txt_filename = pdf_file.replace(".pdf", ".txt")
        with open(txt_filename, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {pdf_file} to {txt_filename}")
    except Exception as e:
        print(f"Error processing {pdf_file}: {e}")
