# Deploying

## Railway

1. Create a service from this repo. Railway picks up `railway.json` and builds the `Dockerfile`.
2. Set variables on the service: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_SITE_URL`, optionally `NEXT_PUBLIC_ANALYTICS_ID`. They are used at build time, so changing one needs a redeploy.
3. Railway sets `$PORT`. The container listens on it. The health check is `GET /`.
4. Add the custom domain, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy so canonicals and the sitemap use the right origin.

## Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_APP_URL=https://app.tiisha.com \
  --build-arg NEXT_PUBLIC_SITE_URL=https://tiisha.com \
  -t tiisha-website .
docker run --rm -e PORT=8080 -p 8080:8080 tiisha-website
```

## Without Docker

```bash
npm ci && npm run build && PORT=3000 npm start
```

After deploy, check `/robots.txt`, `/sitemap.xml` and view source on `/` for canonical and JSON-LD, and check that `/uk` returns a 301 to `/`.
