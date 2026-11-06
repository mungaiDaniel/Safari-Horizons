# Travel agency site (React + Vite)

Placeholder brand: **Safari Horizons**. Replace with the real client details before launch.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Where to edit
| What | File |
|---|---|
| Name, phone, WhatsApp, email, offices | `src/data/brand.js` |
| Tours, itineraries, prices | `src/data/tours.js` |
| Deals, destinations, services, blog, team, fleet | `src/data/content.js` |
| Which image file fills each slot | `src/data/media.js` |
| Colours and fonts | `:root` in `src/index.css` |
| Photos / videos | `public/media/photos`, `public/media/videos` |
| Photo credits | `src/data/credits-*.json` (shown on `/credits`) |

Replace a photo by dropping a new file with the **same name** into `public/media/photos`.

## Before launch checklist
- [ ] Replace placeholder brand, phones, WhatsApp number (digits only) and email in `brand.js`
- [ ] Replace logo (`logo` in `Layout.jsx` is text + a symbol) and `public/favicon.svg`
- [ ] Update `<title>`, description and `og:` tags in `index.html`
- [ ] Replace `https://www.example.com` in `public/robots.txt` and `public/sitemap.xml`
- [ ] Replace stock people (team portraits) with real photos
- [ ] Replace made-up prices, itineraries and blog posts with real content
- [ ] Compress `public/media/videos/hero.mp4` (9 MB) if mobile speed matters
- [ ] Wire the quote form to a real backend or form service (it currently opens WhatsApp or email)
- [ ] Add privacy policy / terms pages if required

## Deploy
The site is a static single-page app. Every host needs to serve `index.html` for unknown paths so routes like `/tours/kenya-honeymoon` work on refresh. Config is already included.

**Vercel** (`vercel.json` included)
1. Push the `travel-site` folder to GitHub.
2. Import the repo on vercel.com. Framework: Vite. Build `npm run build`, output `dist`.

**Netlify** (`public/_redirects` included)
1. Import the repo on netlify.com. Build `npm run build`, publish directory `dist`.
2. Or drag the `dist` folder onto app.netlify.com/drop after running `npm run build`.

**Any static host / cPanel**: upload the contents of `dist/`. On Apache add a rewrite to `index.html`:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Secrets
API keys for Unsplash/Pixabay live in `../.env` (outside this folder) and are only used by the scripts in `../tools`. They are never bundled into the site. Do not commit `.env`.
