-- Venus Hospital admin panel database schema
-- Run this once against the MySQL database created in Hostinger hPanel.
-- Example (via phpMyAdmin or `mysql` CLI):
--   mysql -u <db_user> -p <db_name> < schema.sql

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS news_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  image VARCHAR(500),
  category VARCHAR(100),
  author VARCHAR(150) DEFAULT 'Venus Hospital',
  post_date VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  link VARCHAR(255),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS site_settings (
  id INT PRIMARY KEY DEFAULT 1,
  hospital_name VARCHAR(255) DEFAULT 'Venus Hospital (Pvt) Ltd',
  founding_year VARCHAR(10) DEFAULT '2014',
  phone_primary VARCHAR(50) DEFAULT '+94 36 2222 096',
  phone_secondary VARCHAR(50) DEFAULT '+94 36 2222 064',
  email VARCHAR(255) DEFAULT 'Venusprivatehospital@gmail.com',
  address VARCHAR(500) DEFAULT '55A Colombo Road, Avissawella, Sri Lanka',
  operating_hours VARCHAR(255) DEFAULT 'Hospital: 6am-10pm | OPD: 8am-8pm',
  tagline VARCHAR(255) DEFAULT 'Trusted Care, Compassionate Healing.',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT single_row CHECK (id = 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO site_settings (id)
VALUES (1)
ON DUPLICATE KEY UPDATE id = id;

-- Seed the initial services grid entries (safe to edit/delete afterwards from the admin panel)
INSERT INTO services (title, description, image, link, sort_order)
SELECT * FROM (SELECT
    'Doctor Channeling & OPD' AS title,
    '24/7 outpatient care with qualified doctors and specialists.' AS description,
    '' AS image,
    '/services/opd' AS link,
    1 AS sort_order
  UNION ALL SELECT 'Operation Theatre', 'Fully equipped surgical facilities for a range of procedures.', '', '/services/surgery', 2
  UNION ALL SELECT 'Eye Care', 'Comprehensive eye examinations and treatments.', '', '/services/eye-care', 3
  UNION ALL SELECT 'Laboratory Services', 'Accurate diagnostic testing with fast turnaround.', '', '/services/laboratory', 4
) AS seed
WHERE NOT EXISTS (SELECT 1 FROM services);
