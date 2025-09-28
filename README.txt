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


