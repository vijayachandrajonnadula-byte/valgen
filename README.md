# valgen

A React + Vite project with HMR and some Oxlint rules.

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Notes

Two official React plugins are available for Vite:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

The React Compiler is not enabled because of its impact on dev & build performance. To add it, see [the documentation](https://react.dev/learn/react-compiler/installation).

For a production app, consider TypeScript with type-aware lint rules — see the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
