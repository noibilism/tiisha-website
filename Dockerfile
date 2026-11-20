# syntax=docker/dockerfile:1
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
# NEXT_PUBLIC_* values are inlined at build time, so pass them as build args.
ARG NEXT_PUBLIC_APP_URL=https://app.tiisha.com
ARG NEXT_PUBLIC_SITE_URL=https://tiisha.com
ARG NEXT_PUBLIC_ANALYTICS_ID=
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_ANALYTICS_ID=$NEXT_PUBLIC_ANALYTICS_ID \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0
RUN addgroup -S app && adduser -S app -G app
# postbuild already copied .next/static and public into the standalone folder.
COPY --from=build --chown=app:app /app/.next/standalone ./
USER app
EXPOSE 3000
# The standalone server reads PORT. Railway sets it.
CMD ["node", "server.js"]
