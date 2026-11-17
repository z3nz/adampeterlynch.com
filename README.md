# adampeterlynch.com

Personal site — currently a resume. Plain static HTML/CSS/JS in `public/`, no build step.

## Local preview

```sh
npm run dev        # wrangler pages dev on http://localhost:8788
```

Or just open `public/index.html` in a browser.

## Deploy

Hosted on **Cloudflare Pages**, project `adampeterlynch-site` (direct upload, not connected to git).
The custom domain `adampeterlynch.com` is attached to that project in the Cloudflare dashboard.
It lives in the `Adamlynchmob@gmail.com's Account` Cloudflare account; `npm run deploy` pins that
account ID so wrangler doesn't prompt when the login can see more than one account. Production branch: `main`.

```sh
npx wrangler@4.83.0 login   # once per machine
npm run deploy              # uploads ./public to production
```

Preview URL: https://adampeterlynch-site.pages.dev
