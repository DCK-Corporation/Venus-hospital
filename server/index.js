import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import newsRoutes from "./routes/news.js";
import servicesRoutes from "./routes/services.js";
import settingsRoutes from "./routes/settings.js";
import mediaRoutes, { UPLOADS_DIR } from "./routes/media.js";
import contactRoutes from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

// Uploaded media, served as static files
app.use("/uploads", express.static(UPLOADS_DIR));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/contact", contactRoutes);

// Serve the built frontend (npm run build outputs to /dist)
const distDir = path.join(__dirname, "..", "dist");
app.use(express.static(distDir));

// SPA fallback: anything not matched above (and not /api or /uploads) returns index.html
app.get(/^(?!\/api|\/uploads).*/, (req, res) => {
  const indexPath = path.join(distDir, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(
      "Frontend build not found. Please run 'npm run build' and ensure the 'dist' directory is present in your deployment."
    );
  }
});

// Central error handler (e.g. multer file-type/size errors)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Venus Hospital server listening on port ${PORT}`);
});
