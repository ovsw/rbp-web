# Rambling Pines Website (`rbp-app-web`)

Production website for Rambling Pines Day Camp, built with Gatsby and Sanity CMS.

This README is written for:
- Human developers joining the project
- AI coding agents that need quick, accurate project context

## Tech Stack

- Framework: `Gatsby 5` + `React 18`
- CMS/Data source: `Sanity` via `gatsby-source-sanity`
- Styling/UI: `Theme UI` (`gatsby-plugin-theme-ui`)
- Images: `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`
- Maps: `react-leaflet` + `leaflet`
- Rich content: `@sanity/block-content-to-react` + custom serializers
- Analytics: `gatsby-plugin-google-tagmanager`
- SEO/runtime head tags: Gatsby `Head` API (not `react-helmet`)

## Runtime Requirements

- Node.js `>= 18`
- npm (repo currently uses `package-lock.json`)

## Quick Start

```bash
npm install
npm run dev
```

Local app:
- Site: `http://localhost:8000`
- GraphiQL: `http://localhost:8000/___graphql`

Build:

```bash
npm run build
```

Clear Gatsby cache:

```bash
npm run clean-cache
```

## Environment Variables

`gatsby-config.js` loads `.env.<NODE_ENV>` via `dotenv`.

Primary variables:
- `GATSBY_SANITY_PROJECT_ID`
- `GATSBY_SANITY_DATASET`
- `SANITY_READ_TOKEN` (optional; enables draft overlay in development when present)
- `GATSBY_ENV` (used by robots config resolution)

Notes:
- `client-config.js` has fallback defaults for Sanity project/dataset.
- `.env.production` exists in this repo; `.env.development` is gitignored.

## Project Structure

```text
.
├── gatsby-config.js            # Gatsby plugins + metadata + nav config
├── gatsby-node.js              # Dynamic page creation from Sanity pages
├── gatsby-browser.js           # Root wrappers (app context)
├── gatsby-ssr.js               # Root wrappers for SSR
├── client-config.js            # Sanity config source
├── static/
│   ├── _redirects
│   └── video/
└── src/
    ├── pages/                  # Route entry pages
    ├── templates/              # Gatsby page templates
    ├── components/             # UI components and serializers
    ├── containers/             # Layout containers
    ├── layout/                 # Shared layout shell
    ├── gatsby-plugin-theme-ui/ # Theme UI theme definition
    ├── context/                # Global app context provider
    ├── lib/                    # Utilities/helpers
    └── styles/                 # Global CSS and custom properties/media
```

## Architecture and Data Flow

### Content model and page generation

- Sanity content is sourced at build/runtime through GraphQL.
- `gatsby-node.js` creates generic content pages from `allSanityPage` slugs.
- Template rendering happens in `src/templates/generic-page.js`.

### Layout and app shell

- `gatsby-plugin-layout` points to `src/containers/layout`.
- Root-level context provider is mounted from both `gatsby-browser.js` and `gatsby-ssr.js`.

### Styling and theming

- Theme tokens and component styles live in `src/gatsby-plugin-theme-ui/index.js`.
- Theme UI is the primary styling system (`sx` prop + theme scales).

### Rich text rendering

- Portable Text is rendered with custom serializers in `src/components/serializers/`.
- Serializers handle embeds (YouTube, iframe, HubSpot form, file links, tables, images).

### SEO/head management

- The project uses Gatsby `Head` exports plus `src/components/seo.js`.
- `react-helmet` and `gatsby-plugin-react-helmet` were removed.

## Important Project-Specific Notes

- `siteMetadata.siteNav` in `gatsby-config.js` is a large, hand-maintained navigation tree and is business-critical.
- Interactive map page (`src/pages/interactive-map.js` + `src/components/map-page.js`) depends on Leaflet and browser-only behavior.
- Some project text/config values still reflect historical names/comments; check before changing user-facing copy.
- There is no real test suite yet (`npm test` is a placeholder).

## Known Warnings (Current Scope)

These are non-blocking for current project goals:
- Deprecated `StaticQuery` usage in a few components (works in Gatsby 5).
- Function component `defaultProps` warning in `src/components/seo.js` (works today).

Per current project direction, these are intentionally not being prioritized unless they become operationally relevant.

## Recommended Workflow

1. Start `npm run dev`
2. Validate affected routes in browser
3. Run `npm run build` before shipping
4. Keep changes focused and simple; avoid broad refactors unless required by a bug or feature

## Upgrade Context (Current Status)

- Gatsby 5 migration work is in progress.
- Helmet plugin/dependency removal has been completed and replaced with Gatsby Head API.
- Plugin/dependency cleanup is "good enough for now" for current goals, but not a full exhaustive compatibility audit.
