// One-off script to create (or reset the password of) the admin user.
//
// Usage:
//   node server/seedAdmin.js admin@venushospital.com "SomeStrongPassword123"
//
// Run this once after the database schema has been created, and again any
// time you need to reset the admin password.

import "dotenv/config";
import bcrypt from "bcryptjs";
import pool from "./db.js";

async function main() {
  const [email, password] = process.argv.slice(2);

  if (!email || !password) {
    console.error("Usage: node server/seedAdmin.js <email> <password>");
    process.exit(1);
  }

  if (password.length < 8) {
    console.error("Password must be at least 8 characters long.");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await pool.query(
    `INSERT INTO users (email, password_hash) VALUES (?, ?)
     ON DUPLICATE KEY UPDATE password_hash = ?`,
    [email, passwordHash, passwordHash]
  );

  console.log(`Admin user ready: ${email}`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Failed to seed admin user:", err);
  process.exit(1);
});
