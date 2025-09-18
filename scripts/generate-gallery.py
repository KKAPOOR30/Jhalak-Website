import os

# Path to the gallery folder
GALLERY_ROOT = os.path.join(os.getcwd(), "../public/galleryPhotos")

# Allowed file extensions
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".webm"}
ALLOWED_EXTENSIONS = IMAGE_EXTENSIONS.union(VIDEO_EXTENSIONS)

gallery_data = {}

# Iterate through subfolders
for folder_name in os.listdir(GALLERY_ROOT):
    folder_path = os.path.join(GALLERY_ROOT, folder_name)
    if os.path.isdir(folder_path):
        # Get files with allowed extensions
        files = [
            f"/galleryPhotos/{folder_name}/{file}"
            for file in sorted(os.listdir(folder_path))
            if os.path.splitext(file)[1].lower() in ALLOWED_EXTENSIONS
        ]
        gallery_data[folder_name] = files

# Build TypeScript string
ts_lines = ["export const galleryData: Record<string, string[]> = {"]
for folder, files in gallery_data.items():
    ts_lines.append(f'  "{folder}": [')
    for file in files:
        ts_lines.append(f'    "{file}",')
    ts_lines.append("  ],")
ts_lines.append("};\n")

# Output path
output_path = os.path.join(os.getcwd(), "../components/galleryData.ts")
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Write to TS file
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))

print(f"✅ Generated {output_path}")
