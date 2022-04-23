# web-button-styles [![Build Status](https://travis-ci.com/mattdanielbrown/web-button-styles.svg?branch=main)](https://travis-ci.com/github/mattdanielbrown/web-button-styles)

> ### *CSS and SCSS base styles for buttons, distributed as an NPM package.*

### On NPM: https://www.npmjs.com/package/web-button-styles

## Install

#### Via NPM:
```bash
npm install --save web-button-styles
```

#### Or via Yarn:
```bash
yarn add web-button-styles
```

## Usage

There are two main ways of using this package: in **CSS** or **SCSS**.
After the source is included, HTML markup usage is the same for either method.

### 1. Source Inclusion

#### A). SCSS
If you're writing SCSS that will be compiled later using the Sass preprocessor, just import the **SCSS** file wherever you like:

```scss
@import "PATH/TO/node_modules/web-button-styles/web-button-styles";
```

#### B). CSS
Otherwise, if you're working with plain CSS, you can import either the *minified* stylesheet (`compiled-web-styles.min.css`):

```html
<!-- Probably in the <head> element: -->
<link rel="stylesheet" href="/PATH/TO/node_modules/web-button-styles/web-button-styles.min.css">
```

or the *unminified* stylesheet (`compiled-web-button-styles.css`)

```html
<!-- Probably in the <head> element: -->
<link rel="stylesheet" href="/PATH/TO/node_modules/web-button-styles/web-button-styles.css">
```

### 2. HTML Markup

After including the source in your SCSS or CSS, buttons are used like so:

```html
<button>Default</button>
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
```

**Or, even better:**

```html
<button type="button">Default</button>
<button type="button" class="primary">Primary</button>
<button type="button" class="secondary">Secondary</button>
```

This snippet shows all the basic types, classes, and combinations:

```html
<!-- Normal, Solid Buttons -->
<button type="button">Default</button>
<button type="button" class="primary">Primary</button>
<button type="button" class="secondary">Secondary</button>


<!-- Outline Buttons -->
<button type="button" class="outline">Default</button>
<button type="button" class="primary outline">Primary</button>
<button type="button" class="secondary outline">Secondary</button>


<!-- Round Buttons -->
<button type="button" class="round">Default</button>
<button type="button" class="primary round">Primary</button>
<button type="button" class="secondary round">Secondary</button>


<!-- Round, Outline Buttons -->
<button type="button" class="round outline">Default</button>
<button type="button" class="primary round outline">Primary</button>
<button type="button" class="secondary round outline">Secondary</button>


<!-- Button-type Inputs -->
<input type="button" value="Button">
<input type="submit" value="Submit" class="primary">
<input type="reset" value="Reset" class="secondary outline">


<!-- Button-Styled Link (Anchor) -->
<a href="#" class="button">Link As Button</a>

<!-- Full, Block-Width Button -->
<button type="button" class="block">Block Button</button>

<!-- Icon Button (with primary style) -->
<button type="button" class="icon-button primary">
  <span class="icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
  </span>
  <span class="text-content">Icon Button</span>
</button>

<!-- Icon Button (with secondary style) -->
<button type="button" class="icon-button secondary">
  <span class="icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
  </span>
  <span class="text-content">Icon Button</span>
</button>

<!-- Icon Button (with outline style) -->
<button type="button" class="icon-button outline">
  <span class="icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>
  </span>
  <span class="text-content">Icon Button</span>
</button>

<!-- Icon-Only Button -->
<button type="button" class="icon-only-button secondary">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <title>menu</title>
    <g fill="#F7F7F7">
     <circle cx="04" cy="16" r="3"></circle>
     <circle cx="16" cy="16" r="3"></circle>
     <circle cx="28" cy="16" r="3"></circle>
    </g>
  </svg>
</button>


```




## Screenshots

![Desktop Screenshot](screenshot.png)

![Mobile Screenshot](screenshot-mobile.png)

