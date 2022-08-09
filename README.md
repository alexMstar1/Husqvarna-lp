**1. Installing Packages :**
> npm i

**2. run project**
> npm start
---


**Checks the markup for the correctness of the BEM naming:** 
> npm run bem

**Checks the style of writing code, its formatting:** 
> npm run test


---
** IMPORTANT!**
1. The **app ** folder is necessary for the development of the project, we don't add anything else anywhere, we only work in it!
2. The **docs** folder contains a compiled, ready-made version of the project, which is displayed in the browser,
deleted and created automatically each time the collector is started (**gulp watch**).


---
**What the assembly can do:**
1. Collects **html** from parts (template engine capabilities);
2. Builds, compiles, minifies **SASS**;
3. Collects, minifies **js**, knows how to work with **es6** modules (webpack);
4. Optimizes graphics **jpg/png/svg**;
5. Converts raster image formats to **webp|avif**, and automatically connects them to **html**, in the **picture** tag (off by default);
6. Collects vector(symbolic) **svg sprite**;
7. Adds a timestamp in file names, in tags: **link, scripts (css/js)**, preventing file caching;
8. Checks the correctness of the BEM markup with the command **npm run bem**;
9. Prompts formatting errors with the command **npm run test**.


---
**Attention! Make sure you have NodeJS installed (recommended version)**  
---
