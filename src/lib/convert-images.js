import fs from "fs";
import path from "path";
import sharp from "sharp";

// مسیر اصلی
const inputDir = path.join(process.cwd(), "public/data");

function convertJpegToWebpRecursively(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("❌ خطا در خواندن پوشه:", err);
      return;
    }

    entries.forEach((entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // پوشه → بازگشت بازگشتی
        convertJpegToWebpRecursively(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();

        if (ext === ".jpeg" || ext === ".jpg") {
          const outputFile = path.join(
            directory,
            `${path.basename(entry.name, ext)}.webp`
          );

          sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(outputFile)
            .then(() => {
              console.log(
                `✅ تبدیل شد: ${entry.name} → ${path.basename(outputFile)}`
              );
            })
            .catch((err) => {
              console.error(`❌ خطا در تبدیل ${entry.name}:`, err);
            });
        }
      }
    });
  });
}

// اجرای تابع اصلی
convertJpegToWebpRecursively(inputDir);
