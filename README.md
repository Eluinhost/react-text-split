React Text Split
================

Provides a set of React components to split a text string up for easy CSS styling

## Install

### Global

Include `/dist/ReactTextSplit.js` or `/dist/ReactTextSplit.min.js` in your html

The global variable `ReactTextSplit` is available for use.

### NPM

`npm install react-text-split`

```javascript
  var ReactTextSplit = require('react-text-split');
```

## Usage

Each component has 2 props:

`text` - the text to split/render  
`classBase` - the base for each of the written classes, default 'text-split'

Each component renders in the following format (LetterTextSplit):

```html
  <span aria-label="some text" className="text-split-base"}>
    <span aria-hidden className="text-split-part part-0">s</span>
    <span aria-hidden className="text-split-part part-1">o</span>
    <span aria-hidden className="text-split-part part-2">m</span>
    <span aria-hidden className="text-split-part part-3">e</span>
    <span aria-hidden className="text-split-part part-4 whitespace text-split-whitespace">&nbsp;</span>
    <span aria-hidden className="text-split-part part-5">t</span>
    <span aria-hidden className="text-split-part part-6">e</span>
    <span aria-hidden className="text-split-part part-7">x</span>
    <span aria-hidden className="text-split-part part-8">t</span>
  </span>
```

This allows per-part styling via css:

```css
    // don't show anything for whitespace characters
    .example-part.whitespace {
      background: none !important;
    }

    // gold background block behind white text
    .text-split-part {
      padding: 10px;
      font-size: 60px;
      display: inline-block;
      background: #ffb500;
      color: #fff;
    }

    // every odd one skew 10 degrees
    .example-part:nth-child(odd) {
      moz-transform: skewY(-10deg);
      -webkit-transform: skewY(-10deg);
      -o-transform: skewY(-10deg);
      -ms-transform: skewY(-10deg);
      transform: skewY(-10deg);
    }

    // every even one skew opposite direction
    // and set orange background with white text
    .example-part:nth-child(even) {
      background: #f15b14;
      color: #fff;
      moz-transform: skewY(10deg);
      -webkit-transform: skewY(10deg);
      -o-transform: skewY(10deg);
      -ms-transform: skewY(10deg);
      transform: skewY(10deg);
    }
```

This will make a 'folded paper' type effect with the text, and will show gaps where the whitespace is.

### Classes

The outer element has an `aria-label` set to the given text and the class `${classBase}-base`

Each split of the text is an element with aria-hidden set and the classes `${classBase}-part` and `part-${index}`.
If the element contains only whitespace it also contains the classes `${classBase}-whitespace` and `whitespace`.

All space characters are replaced with `&nbsp;` to allow full styling of empty tags.

## Types

### WordTextSplit

Splits around whitespace characters.

e.g. `' some words separated  by  differing whitespace' => '&nbsp;', 'some', '&nbsp;', 'words', '&nbsp;', 'separated', '&nbsp;&nbsp;', 'by', '&nbsp;&nbsp;', 'differing', '&nbsp;', 'whitespace'`

### LetterTextSplit

Splits each letter into it's own span

e.g. `'some text' => 's', 'o', 'm', 'e', '&nbsp;', 't', 'e', 'x', 't'`

### TextSplit

Puts the entire string in a single element, used as a superclass for WordTextSplit and LetterTextSplit and custom
components

### RotateTextSplit

This is a wrapper around any other kind of TextSplit element that rotates the text shown from an array on a timer (2000ms).

It takes the following props:

`values` - an array of text values, only 1 string will be shown at a time
`type` - a React component to pass the text and classBase to
`classBase` - passed to the TextSplit element

Example:

```javascript
<ReactTextSplit.RotateTextSplit text={['some random', 'text strings', 'to rotate']} type={ReactTextSplit.WordTextSplit} />
```

Will render `['some', ' ', 'random']` then `['text', ' ', 'strings']` and finally `['to', ' ', 'rotate']` before starting again

## Customization

You can create your own splits by extending the TextSplit component and overriding the splitText function:

```javascript
  var Custom = ReactTextSplit.TextSplit;
  Custom.prototype = ReactTextSplit.TextSplit.prototype;
  
  Custom.prototype.splitText = function() {
    return this.props.text.split(/(t)/);
  };
```

This splits around and keeps the 't' character like this: `'React Text Split Example' => 'Reac', 't', ' ', 'T', 'ex', 't', ' Spli', 't', ' Example'`

## Example

An example can be found in the `examples` folder showing each component + a sample overridden component
