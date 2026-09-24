# Coffee And Bites

A responsive, frontend-only café website built with React and Vite.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to Vercel as a static Vite site. No environment variables, server functions, or SPA rewrite rules are required.

## Content and assets

Restaurant ordering links use the shared URL in `src/data/links.js`. Menu category and image presentation is kept in `src/data/menu.js`; current menu and availability are linked to the restaurant's Zomato listing. Local images are stored in `public/images/`.
