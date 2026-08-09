import express from "express";
import pool from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Public: list all services, in admin-defined order
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM services ORDER BY sort_order ASC, id ASC");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ error: "Failed to load services" });
  }
});

// Admin: create
router.post("/", requireAuth, async (req, res) => {
  const { title, description, image, link, sort_order } = req.body || {};

  if (!title || !link) {
    return res.status(400).json({ error: "title and link are required" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO services (title, description, image, link, sort_order) VALUES (?, ?, ?, ?, ?)",
      [title, description || "", image || "", link, sort_order || 0]
    );
    const [rows] = await pool.query("SELECT * FROM services WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error("Error creating service:", err);
    res.status(500).json({ error: "Failed to create service" });
  }
});

// Admin: update
router.put("/:id", requireAuth, async (req, res) => {
  const { title, description, image, link, sort_order } = req.body || {};

  try {
    const [result] = await pool.query(
      "UPDATE services SET title = ?, description = ?, image = ?, link = ?, sort_order = ? WHERE id = ?",
      [title, description, image, link, sort_order || 0, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    const [rows] = await pool.query("SELECT * FROM services WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error("Error updating service:", err);
    res.status(500).json({ error: "Failed to update service" });
  }
});

// Admin: delete
router.delete("/:id", requireAuth, async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM services WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting service:", err);
    res.status(500).json({ error: "Failed to delete service" });
  }
});

export default router;
