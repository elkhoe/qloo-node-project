# Node.js Server for NBA Data

## Overview

This Node.js server is designed fetch data from an external API called Free NBA and organize each team into its respective division.

## Endpoints

- **GET /fetch-data**
  - Fetches a list of NBA teams.
  - Example: `GET /teams?page=0`

- **GET /process-data**
  - Processes the fetched teams data and organizes it by division.
  - Returns a JSON object where each key is a division.
  - Example: `GET /process-data`
