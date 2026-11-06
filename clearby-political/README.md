# Clearby Political – single-page site (Next.js, static export)

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Edit content
All text, contact details and the form endpoint: `app/data.js`
Colours: CSS variables at the top of `app/globals.css`.

## Deploy on Hostinger (shared/Premium/Business hosting)
    npm run build      # creates the /out folder
Upload everything INSIDE `out/` to `public_html` (File Manager or FTP). Done.
(Hostinger VPS/Cloud with Node.js: you can also remove `output: 'export'` from next.config.mjs and run `next start`.)

## Enquiry form
Static hosting has no server. In `app/data.js` set `formEndpoint` to a Formspree/Getform URL to receive enquiries by email.
Left empty, the form opens the visitor's email app addressed to CONTACT.email.
