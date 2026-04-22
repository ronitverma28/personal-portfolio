# Master Portfolio

`Master Portfolio` is a React-based personal portfolio application with dynamic GitHub data integration and production build/deploy support.

## Tech Stack

- React 16
- React Router DOM
- Styled Components
- Base Web (`baseui`) + Styletron
- Apollo Boost + GitHub GraphQL API
- React PDF
- React Reveal
- Chart.js / react-chartjs-2
- Node.js + npm

## Features

- Multi-section personal portfolio pages (home, education, projects, contact, resume)
- Theme-driven UI styling
- GitHub open-source data cards (projects, issues, pull requests, organizations)
- Responsive UI with production build support
- Static-site deployment via GitHub Pages

## Folder Structure

```text
.
├── public/                     # Static assets, index template, route fallback
├── src/
│   ├── assets/                 # Fonts, images, icon packs, documents
│   ├── components/             # Reusable UI components
│   ├── containers/             # Section containers
│   ├── pages/                  # Route-level pages
│   ├── shared/                 # Static/data JSON files
│   ├── App.js                  # App root
│   ├── portfolio.js            # Portfolio content/config
│   └── theme.js                # Theme definitions
├── git_data_fetcher.mjs        # GitHub GraphQL data sync script
├── package.json
└── .env.example
```

## Setup (Local)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env
   ```
3. Set environment values in `.env`.

## Run Commands

- Start development server:
  ```bash
  npm start
  ```
- Run tests:
  ```bash
  npm test
  ```
- Create production build:
  ```bash
  npm run build
  ```
- Deploy to GitHub Pages:
  ```bash
  npm run deploy
  ```

## API Endpoints

This project consumes the GitHub GraphQL API:

- `POST https://api.github.com/graphql`

Used by `git_data_fetcher.mjs` to pull and write:
- `src/shared/opensource/pull_requests.json`
- `src/shared/opensource/issues.json`
- `src/shared/opensource/organizations.json`
- `src/shared/opensource/projects.json`

## Deployment Steps

1. Ensure `.env` is configured.
2. Run:
   ```bash
   npm run build
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
4. Confirm `homepage` in `package.json` matches your deployment base path.

## Environment Variables

Required:

- `GITHUB_TOKEN`: GitHub personal access token with GraphQL access
- `GITHUB_USERNAME`: GitHub username to query

Optional:

- Standard CRA environment variables as needed for deployment/runtime behavior.

## Production Readiness Notes

- Secrets are externalized to environment variables.
- Source comments and debug logs have been removed from app code.
- Production build verification: `npm run build` succeeds.
