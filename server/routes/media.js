import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { requireAuth } from "../middleware/auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const UPLOADS_DIR = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = crypto.randomBytes(16).toString("hex");
    cb(null, `${name}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error("Only image files are allowed"));
    }
    cb(null, true);
  },
});

const router = express.Router();

function publicUrlFor(req, filename) {
  return `${req.protocol}://${req.get("host")}/uploads/${filename}`;
}

// Admin: list uploaded files
router.get("/", requireAuth, (req, res) => {
  try {
    const files = fs
      .readdirSync(UPLOADS_DIR)
      .filter((name) => !name.startsWith("."))
      .map((name) => {
        const stat = fs.statSync(path.join(UPLOADS_DIR, name));
        return { name, url: publicUrlFor(req, name), size: stat.size, uploadedAt: stat.mtime };
      })
      .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
    res.json(files);
  } catch (err) {
    console.error("Error listing media:", err);
    res.status(500).json({ error: "Failed to list files" });
  }
});

// Admin: upload
router.post("/", requireAuth, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(201).json({ name: req.file.filename, url: publicUrlFor(req, req.file.filename) });
});

// Admin: delete
router.delete("/:filename", requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename); // guard against path traversal
  const filePath = path.join(UPLOADS_DIR, filename);

  if (!filePath.startsWith(UPLOADS_DIR)) {
    return res.status(400).json({ error: "Invalid filename" });
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.unlinkSync(filePath);
  res.json({ success: true });
});

export default router;
