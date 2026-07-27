import express from "express";
import pool from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

const SELECT_COLUMNS = "id, title, excerpt, content, image, category, author, post_date AS date, created_at, updated_at";

// Public: list news posts (most recent first). Supports ?limit=3
router.get("/", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || null;
    const sql = `SELECT ${SELECT_COLUMNS} FROM news_posts ORDER BY created_at DESC${limit ? " LIMIT ?" : ""}`;
    const params = limit ? [limit] : [];
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching news:", err);
    res.status(500).json({ error: "Failed to load news posts" });
  }
});

// Public: single post + up to 2 related posts by category
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT ${SELECT_COLUMNS} FROM news_posts WHERE id = ? LIMIT 1`, [req.params.id]);
    const post = rows[0];
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const [related] = await pool.query(
      `SELECT ${SELECT_COLUMNS} FROM news_posts WHERE category = ? AND id != ? ORDER BY created_at DESC LIMIT 2`,
      [post.category, post.id]
    );

    res.json({ post, related });
  } catch (err) {
    console.error("Error fetching news post:", err);
    res.status(500).json({ error: "Failed to load post" });
  }
});

// Admin: create
router.post("/", requireAuth, async (req, res) => {
  const { title, excerpt, content, image, category, author, date } = req.body || {};

  if (!title || !excerpt || !content || !category) {
    return res.status(400).json({ error: "title, excerpt, content and category are required" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO news_posts (title, excerpt, content, image, category, author, post_date) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, excerpt, content, image || "", category, author || "Venus Hospital", date || ""]
    );
    const [rows] = await pool.query(`SELECT ${SELECT_COLUMNS} FROM news_posts WHERE id = ?`, [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error("Error creating news post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Admin: update
router.put("/:id", requireAuth, async (req, res) => {
  const { title, excerpt, content, image, category, author, date } = req.body || {};

  try {
    const [result] = await pool.query(
      "UPDATE news_posts SET title = ?, excerpt = ?, content = ?, image = ?, category = ?, author = ?, post_date = ? WHERE id = ?",
      [title, excerpt, content, image, category, author, date, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    const [rows] = await pool.query(`SELECT ${SELECT_COLUMNS} FROM news_posts WHERE id = ?`, [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error("Error updating news post:", err);
    res.status(500).json({ error: "Failed to update post" });
  }
});

// Admin: delete
router.delete("/:id", requireAuth, async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM news_posts WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting news post:", err);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

export default router;
