# Dev Doc for Tessera Web

This document outlines the software architecture and development workflow for the Tessera website — the company website for Tessera Studios.

## Sections

- Purpose
- Architecture
- Building
- CI/CD
- Workflow & Contributions

## Purpose

The purpose of the Tessera website, is to serve as an introductory source for the Tessera company. This will be a location where interested parties (clients or partners) will be able to learn about Tessera as a company, its services, features and the like.

Primary Components:
- Landing page with mission statement, highlights, and calls-to-action
- About page with company background and team information
- Services page describing offerings and capabilities
- Contact page for inquiries and quote requests
- Blog/news page for announcements and thought leadership (future feature)

Goals:
- Deliver a pleasant, performant, and accessible user experience
- Make content updates easy via a CMS
- Ensure good SEO, social previews, and analytics integration

## Architecture

Tessera will aim to provide a minimalist yet impactful experience for visitors. As such, we will leverage the following tools:

- React for the User Interface.
- Vite for React Setup
- TypeScript for Type Safety
- Contentful for the Content Management System, to simplify updating content (future)
- Netlify for Hosting & CI/CD

## Development

Repository layout:
- frontend/ — front-end source code, package.json, build scripts, Dockerfile (if present)
- (other directories may be created for backend, docs, etc.)

Local development:
1. Install dependencies
   cd frontend
   npm install

2. Start dev server
   cd frontend
   npm run dev

- Local site should run at http://localhost:5173

Use feature branches for work:
- feature/<short-description>
- fix/<short-description>

Keep commits focused and add clear commit messages.

## Building

Build the production artifacts:
  cd frontend
  npm run build

## Local environment & configuration

Do not commit secrets. Use a .env file for local environment variables and add a .env.example with placeholders in the repo.

## CI/CD

- Ensure CI validates linting, type checks, and builds.
- Use branch protection rules on the main branch and require PR reviews and passing CI checks.

## Workflow & Contributions

- Branching: feature/<short-description>, fix/<short-description>
- PRs: Open PRs against main (or the repository's default branch). Include a description, testing notes, and screenshots if applicable.
- Code review: Request at least one reviewer. Address review comments and squash/fix commits as appropriate.
cd frontend
npm install
npm run dev # This will launch the Vite dev server
