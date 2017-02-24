# PostCSS Make Css Great Again [![Build Status][ci-img]][ci]

The greatest [PostCSS] plugin. Everyone tells me this, it's the best plugin. It's amazing. A tremendous plugin. I make, the best, plugins…

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/caseymhunt/postcss-make-css-great-again.svg
[ci]:      https://travis-ci.org/caseymhunt/postcss-make-css-great-again
[kunukn]:  https://github.com/kunukn
[postcss-alter-property-value]: https://github.com/kunukn/postcss-alter-property-value

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

## The actual smart person...
The real hero here is [kunukn] who created the plugin this is based on: [postcss-alter-property-value]
