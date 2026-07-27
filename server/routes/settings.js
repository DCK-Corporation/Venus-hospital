import express from "express";
import pool from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Public: read settings (used by Header/Footer/TopBar/Contact)
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM site_settings WHERE id = 1 LIMIT 1");
    res.json(rows[0] || {});
  } catch (err) {
    console.error("Error fetching settings:", err);
    res.status(500).json({ error: "Failed to load settings" });
  }
});

// Admin: update (single row, id is always 1)
router.put("/", requireAuth, async (req, res) => {
  const {
    hospital_name,
    founding_year,
    phone_primary,
    phone_secondary,
    email,
    address,
    operating_hours,
    tagline,
  } = req.body || {};

  try {
    await pool.query(
      `UPDATE site_settings SET
        hospital_name = ?, founding_year = ?, phone_primary = ?, phone_secondary = ?,
        email = ?, address = ?, operating_hours = ?, tagline = ?
       WHERE id = 1`,
      [hospital_name, founding_year, phone_primary, phone_secondary, email, address, operating_hours, tagline]
    );
    const [rows] = await pool.query("SELECT * FROM site_settings WHERE id = 1 LIMIT 1");
    res.json(rows[0]);
  } catch (err) {
    console.error("Error updating settings:", err);
    res.status(500).json({ error: "Failed to save settings" });
  }
});

export default router;
