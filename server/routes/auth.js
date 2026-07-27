import express from "express";
import bcrypt from "bcryptjs";
import pool from "../db.js";
import { signToken, requireAuth, COOKIE_NAME } from "../middleware/auth.js";

const router = express.Router();

const isProd = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: "lax",
  maxAge: 12 * 60 * 60 * 1000, // 12h, matches JWT expiry
  path: "/",
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = signToken({ id: user.id, email: user.email });
    res.cookie(COOKIE_NAME, token, cookieOptions);
    res.json({ id: user.id, email: user.email });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: undefined });
  res.json({ success: true });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
});

export default router;
