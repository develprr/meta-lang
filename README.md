# A Language App on Metamatic™

A demo app for showcasing Metamatic™ framework and testing it in different real use cases.

### Introduction

A demo app written in ES6 on React to demonstrate how to use the Metamatic state container framework. 

## Attención! Pansin! внимание!

This demo is still under construction and **does not work yet**. 

## Installation

```js
git clone https://github.com/develprr/meta-lang.git
cd metalang
npm install
```

## Configuring IDE

The **import** statements in JS files in the project refer to other internal JS files using absolute paths assuming that **src**-folder 
is the root folder. Your IDE may not automatically grasp that so you have to mark src folder as **Sources Root**. If you ise IntelliJ IDEA, 
right-click *src* folder and select from the context menu *Mark Directory As -> Sources Root".

## Starting the frontend

Make sure you have Node installed!

In project folder type:

```js
npm start
```

## Optional: Start CSS-Watcher

The CSS-styles in the project are defined in SASS files that end with **.scss** extension. To edit styles you have to edit those files.
The project usess a SASS compiler to transpile SASS files into final CSS files. To compile SASS files into CSS, type:

```js
npm run build-css
```

If you want to edit style on the fly when when you develop the app it will ease your work if you don't need to explicitly type,
refresh or restart anything every time you have edited SASS files, start CSS-Watcher to automatically do it for you:

```js
npm run watch-css
```
    
## License

Apache 2.0
