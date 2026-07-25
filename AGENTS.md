# AGENTS

## Project Overview
This repository is a small, static personal portfolio website built with vanilla HTML, CSS, and JavaScript. There is no build system, package manager, or backend service in this repo.

## Key Files
- `index.html` — page content, layout, metadata, SEO tags, contact form structure.
- `style.css` — all visual styling, responsive layout, and animations.
- `script.js` — interaction behavior, animations, form validation, and navigation logic.
- `README.md` — project summary, feature list, deployment guidance.

## Agent Guidance
- Treat this as a static website project. Do not add frameworks, build tooling, or dependencies unless the user explicitly asks for them.
- Preserve the existing dark, terminal-inspired visual style and responsive design.
- Keep accessibility and semantic HTML as first priorities.
- Use browser preview or a static file server to validate changes to layout, animations, and form behavior.
- If updating the contact form, note that it currently uses frontend validation only; backend integration is intentionally commented out in `script.js`.

## When Modifying Content
- Update text and links in `index.html` gently; maintain structure and section organization.
- Use `style.css` for style changes and `script.js` for behavior changes.
- Avoid large rewrites unless the user requests a redesign.

## References
- `README.md` for deployment notes and feature descriptions.
