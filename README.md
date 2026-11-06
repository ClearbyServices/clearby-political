# Clearby Political – single-page site (Next.js, static export)

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Edit content
All text, contact details and the form endpoint: `app/data.js`
Colours: CSS variables at the top of `app/globals.css`.

## Deploy on Hostinger (Shared / Git Auto-Deployment)
This project is configured as a **Static Export** (`output: 'export'` in `next.config.mjs`) to work seamlessly with Hostinger's standard Git and shared hosting environment.

### Deployment Workflow:
1. Make your code or text changes locally.
2. Build the static export:
   ```powershell
   npm run build