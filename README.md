# ClumsyTestSite

A full-stack web application project developed as a community tool for an online trading card game. This repository contains multiple versions of a **Clumsy Ghosts** game stats calculator, as well as a backend server to support them.

## Overview

- **Initial Version:** A simple **vanilla JavaScript/HTML/CSS** calculator app deployed on **Netlify** at `afromk.com/calc`.
- **Final Version:** A **React-based** calculator app deployed at `afromk.com/clumsyreactcalc`.
- **Backend:** A **Node.js/Express** server with a **SQLite** database, hosted on **Heroku**, located in `ClumsyTestSite/ghost-stats-server`.
  - Supports API endpoints to fetch game character stats and metadata.
  - Used by both calculator versions.

## Features

- Frontend built with **React** (Final version).
- Backend API built with **Node.js, Express, and SQLite**.
- Hosted on **Netlify (Frontend) and Heroku (Backend)**.
- API endpoints for retrieving character stats and metadata.

## Deployment

- **Frontend:** Deployed on **Netlify** (`afromk.com`) and later transitioned to **React on Netlify** (`afromk.com/clumsyreactcalc`).
- **Backend:** Node.js/Express server deployed on **Heroku** (`ClumsyTestSite/ghost-stats-server`).
- **Data Storage:** SQLite database initialized from JSON datasets.

## API Endpoints

The backend provides API endpoints for retrieving character metadata and game stats. These endpoints are used by the frontend applications.

---

