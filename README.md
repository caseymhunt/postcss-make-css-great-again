# PostCSS Make CSS Great Again [![Build Status][ci-img]][ci]

The greatest [PostCSS] plugin. Everyone tells me this, it's the best plugin. It's amazing. A tremendous plugin. I make, the best, plugins…

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/caseymhunt/postcss-make-css-great-again.svg
[ci]:      https://travis-ci.org/caseymhunt/postcss-make-css-great-again
[kunukn]:  https://github.com/kunukn
[papv]:    https://github.com/kunukn/postcss-alter-property-value

```css
.foo {
    width: yuuge;
}
```
```css
.foo {
    width: 100% !important;
}
```

## Usage

```js
postcss([ require('postcss-make-css-great-again') ])
```
See [PostCSS] docs for examples for your environment.

## See it in action
```js
npm install
npm start
```
Check inspector to see the greatest CSS.

## Giant's Shoulders...
The real hero here is [kunukn] who created [PAPV] (postcss-alter-property-value), the plugin I modified to create MCGA.

All accolodes belong to him. I'm just super good at google/stealing.
