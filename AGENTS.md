# AGENTS.md

## Project Overview
Frontend-only Vite + React app ("IntelliRent") for a vehicle rental customer portal. Talks to a Java backend at `VITE_JAVA_BACKEND_BASE_URL` (default `http://localhost:8080`) — the backend is not in this repo.

## Setup
- Node 20, npm. Vite 6.x dev server on port 3000.
- `docker compose -f docker-compose.base44.yml up -d` starts the dev server with live reload.
- `npm install` runs automatically on container startup; first boot takes ~15s.
- No secrets required — the app boots without the backend (API calls will fail but the UI renders).

## Key Files
- `vite.config.js` — sets `host: true`, `port: 3000`, `allowedHosts: true` for the preview environment.
- `src/services/api.js` — axios client; all backend calls go through here.
- `src/context/AuthContext.jsx` — token + customer stored in localStorage.

## Build
- `npm run build` (vite build) succeeds; CI workflow at `.github/workflows/build.yml` validates it.
