# AGENTS

## Project Overview
This repository contains a full-stack portfolio website with an Angular frontend and a Node.js/Express backend.

## Key Files
- `src/index.html` — Angular host page
- `src/styles.css` — global styling and layout
- `src/app/app.component.*` — main Angular component, template, styles, and logic
- `src/environments/` — frontend environment configuration
- `server/index.js` — backend API and static file serving
- `package.json` — project scripts and dependencies
- `angular.json` — Angular CLI configuration

## Agent Guidance
- Treat this as an Angular + Node full-stack app.
- Do not introduce new frontend frameworks beyond Angular unless explicitly requested.
- Use `src/app/` for UI and content changes, `src/styles.css` for global styling, and `server/index.js` for backend API logic.
- Preserve the terminal-inspired dark design, gradients, and visual identity.
- Ensure the Angular contact form remains reactive and posts to `/api/contact`.
- Validate that production builds are served from `dist/portfolio` by the Express server.

## Implementation Notes
- `app.component.ts` handles typing animation and the reactive contact form.
- `app.component.html` contains the portfolio sections, navigation, and contact form template.
- `server/index.js` exposes `/api/contact` and `/api/status`, logs submissions, and serves the built Angular app.
- `environment.ts` and `environment.prod.ts` configure API targets for dev and prod.

## When Modifying Content
- Update personal details, resume link, and contact information in `src/app/app.component.html`.
- Keep layout and style changes in `src/app/app.component.css` or `src/styles.css`.
- Preserve the existing responsive layout and avoid large rewrites unless redesign is requested.

## References
- `README.md` for development and deployment guidance.
- `src/app/app.component.ts` and `server/index.js` for current app behavior.
