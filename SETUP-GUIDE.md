# Safety Gate - Deployment & Setup Guide

This guide covers the static landing page for **Safety Gate**.

## What this site should communicate

The site should position Safety Gate as:

- approval-aware MCP security middleware
- a policy and review layer for shell/file tool execution
- local-first and OpenClaw-friendly
- the middle ground between blind trust and full sandboxing

## Current stack

- static HTML landing page (`index.html`)
- Google Analytics configured
- Formspree lead capture configured
- Calendly link present
- SEO / Open Graph metadata included

## Deployment options

### Netlify (recommended)
1. Go to <https://netlify.com>
2. Create or log into an account
3. Add a new site
4. Drag and drop the repo contents or connect the GitHub repo
5. Set your custom domain when ready

### GitHub Pages
1. Push the repo to GitHub
2. Enable Pages from the repo settings
3. Select the branch to publish
4. Point your custom domain if needed

## Before going live

Replace these placeholders/artifacts with your real values:

- domain references in:
  - `index.html`
  - `robots.txt`
  - `sitemap.xml`
- Open Graph image path
- Calendly URL if needed
- any lead capture destination if it changes

## Content checklist

Before launch, make sure the page clearly answers:

1. What is Safety Gate?
2. What problem does it solve?
3. How is it different from orchestrators and sandboxes?
4. Who is it for?
5. What should a visitor do next?

## Good next improvements

- stronger CTA copy
- product screenshots or diagrams
- proof points / credibility section refresh
- tighter domain/SEO cleanup once final URL is known
