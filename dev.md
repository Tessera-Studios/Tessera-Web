# Dev file for TesseraWeb

This document will outline the software architecture for the Tessera Website, a website designed to showcase Tessera as a company.

This document will be divided into the following sections

- Purpose
- Architecture

## Purpose

The purpose of the Tessera website, is to serve as an introductory source for the Tessera company. This will be a location where interested parties (clients or partners) will be able to learn about Tessera as a company, its services, features and the like.

Components will include:

- Landing page with introductory information, such as mission statement, aims, and capabilities.
- About page with information about the company, and the team.
- Services page outlining Tessera's Services in detail
- Contact page providing access for clients and / or partners to reach out to staff at the company for queries or to request quotations.
- Blog page with latest blog news relating to Tessera (optional)

Tessera Web should aim to be a pleasant, fast experience for users, allowing them to quickly get the information they require, and be driven to request our services.

## Architecture

Tessera will aim to provide a minimalist yet impactful experience for visitors. As such, we will leverage the following tools:

- ReactJS for the User Interface.
- NextJS as a framework to assist with building out the UI.
- Contentful for the Content Management System, to simplify updating content.
- Nginx runtime to serve static pages.
- Static Site Generation (SSG) for ensuring all content is available at build time.
- Google Cloud Run as the hosting provider.
