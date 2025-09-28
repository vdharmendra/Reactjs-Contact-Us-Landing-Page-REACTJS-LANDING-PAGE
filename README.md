# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- GITHUB DEPLOY STEPS -->
REACTJS:- 
create new repo:- add the repo. name :- to vite.config.js :- base :'/repo_name/'

package.json:-
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

CMD:-
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vdharmendra/Reactjs-Contact-Us-Landing-Page-REACTJS-LANDING-PAGE.git
git push -u origin main

npm run build 
npm run deploy