# Environment Setup

This document outlines the environment variables and settings for the Vite Vanilla project.

## Required Environment Variables

Currently, this project does not require any environment variables by default.

## Optional Variables

| Variable      | Description                          | Default     |
| ------------- | ---------------------------------- | ----------- |
| `VITE_API_URL`| Base URL for API endpoints          | `http://localhost:3000` |

## How to Set Environment Variables

1. Create a `.env` file in the root of the project.
2. Add variables prefixed with `VITE_` for Vite to expose them to the client:

```bash
VITE_API_URL=https://api.example.com
```

3. Restart the dev server after modifying `.env`.

## Notes

- Environment variables without the `VITE_` prefix will **not** be exposed to client-side code.
- Use `.env.local` for local overrides (ignored by Git).
