# Cookbook

A static cookbook site with shared recipe storage support.

## Run locally

Open `index.html` in a browser.

## Shared Database Setup

This project can use Supabase so all visitors see the same recipes.

1. Create a Supabase project.
2. In the Supabase SQL editor, run [supabase-schema.sql](/Users/sophina/cookbook/supabase-schema.sql).
3. Copy [config.example.js](/Users/sophina/cookbook/config.example.js) to `config.js`.
4. Fill `config.js` with your Supabase project URL and anon key.
5. Publish the site including `config.js`.

If `config.js` is left blank, the site falls back to browser-only `localStorage`.
