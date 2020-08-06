# Responsive Portfolio Website 

The code in this repository is based on [Traversy Media's](https://www.traversymedia.com/) video tutorial on building a [Responsive Portfolio Website](https://www.youtube.com/playlist?list=PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU).  The aim of the tutorial is to build reusable CSS components with [Sass](https://sass-lang.com) that can be used throughout the website. Note that I use [typescript](https://www.typescriptlang.org/) here instead of javascript. However, the javascript is a minimal part of this tutorial as you will see in the video.

## Running the code

1. If you open up the code folder in [Visual Studio Code](https://code.visualstudio.com/download) you may be prompted to install the recommended extensions if you don't already have them installed. Go ahead and install these if you'ld like. They are `Bracket Pair Colorizer 2`, `Live Server` and `Prettier`. All these extensions are optional. The recommended extensions can be found in the `extensions.json` file in the `.vscode` directory should you wish to edit these. Likewise in the same directory you can find the `settings.json` file should you wish to edit the recommended settings.
2. Run ```npm run tsc``` in a terminal to perform live compilation of typescript to javascript.  See the `tsconfig.json` file if you would live to change any of the typescript settings.
3. Run ```npm run sass``` in a separate terminal to perform live compilation of SCSS to CSS.
4. Open `dist/index.html`, right click on the text editor area and select `Open With Live Server` (or run your preferred development server) to launch the application in your default web browser.

## Deploying the website

If you wish to deploy the website to [Github pages](https://pages.github.com/) then:
1. Replace the `github-username` with your actual github username in the `homepage` value in the `package.json` file.
2. Run ```npm run deploy``` from a terminal. 
3. Visit the URL in your browser to see the deployed website.
