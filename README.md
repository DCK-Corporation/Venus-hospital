# Venus Hospital Website

Official website for Venus Hospital (Pvt) Ltd, including a self-hosted admin panel for managing news posts, services, media, and site-wide contact/settings content.

## Stack

- **Frontend**: React 18 + Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js + Express (`/server`)
- **Database**: MySQL
- **Auth**: JWT stored in an httpOnly cookie (single admin account)
- **Media storage**: local disk (`server/uploads`), served as static files

Everything runs as a single Node.js process: Express serves both the `/api/*` routes and the built React app, which is what Hostinger's Node.js hosting expects.

## Local development

Requirements: Node.js 18+, a MySQL database (local or remote).

1. Install dependencies:
   ```sh
   npm install
   ```
2. Copy `.env` and fill in your local MySQL credentials and a `JWT_SECRET` (any long random string, e.g. `openssl rand -hex 32`).
3. Create the database schema:
   ```sh
   mysql -u <db_user> -p <db_name> < server/schema.sql
   ```
4. Create the admin account:
   ```sh
   npm run seed:admin -- admin@venushospital.com "SomeStrongPassword123"
   ```
5. Run the frontend and API together:
   ```sh
   npm run dev:full
   ```
   The site runs at `http://localhost:8080` (Vite dev server, proxying `/api` and `/uploads` to the Express API on port 3000).

Admin panel: `http://localhost:8080/admin/login`

## Deploying to Hostinger (Business plan)

This assumes a Hostinger **Business** hosting plan, which includes both MySQL databases and Node.js application hosting at no extra cost.

### 1. Create the MySQL database

In hPanel: **Databases → MySQL Databases**

- Create a new database and a database user, and note the database name, username, password, and host (usually `localhost`).
- Open **phpMyAdmin** for that database, go to the SQL tab, and run the contents of `server/schema.sql`.

### 2. Set up the Node.js application

In hPanel: **Advanced → Node.js**

- Create a new Node.js application.
- Application root: the folder where you upload this project's files (e.g. via Git or File Manager/FTP).
- Application startup file: `server/index.js`
- Node.js version: 18 or later.

### 3. Environment variables

In the Node.js app's environment variable settings, set:

| Variable | Value |
|---|---|
| `DB_HOST` | usually `localhost` |
| `DB_PORT` | `3306` |
| `DB_USER` | the MySQL user created in step 1 |
| `DB_PASSWORD` | the MySQL password |
| `DB_NAME` | the database name |
| `JWT_SECRET` | a long random string, keep this private |
| `NODE_ENV` | `production` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` | mailbox created under **Emails** in hPanel, used to deliver Contact form messages |
| `CONTACT_TO_EMAIL` | where Contact form messages should be delivered |

Do not commit real values for any of these to git — `.env` is already gitignored.

### 4. Install, build, and start

Via the Node.js app's built-in terminal/SSH:

```sh
npm install
npm run build
npm run seed:admin -- admin@venushospital.com "SomeStrongPassword123"
```

Then start (or restart) the app from the hPanel Node.js screen. `npm run build` compiles the React app into `/dist`, which the Express server serves directly — there's no separate static hosting step.

### 5. Ongoing content updates

Once deployed, log in at `https://yourdomain.com/admin/login` to manage:

- **News** — create/edit/delete posts shown on the homepage and `/news`
- **Services** — create/edit/delete the services grid shown on the homepage
- **Media** — upload images and copy their URLs into news/services entries
- **Settings** — hospital name, phone numbers, email, address, and operating hours shown across the header, footer, and contact page

No further deployments are needed for content changes — only for code changes.

## What technologies are used for this project?

- Vite
- React
- shadcn-ui
- Tailwind CSS
- Express
- MySQL
