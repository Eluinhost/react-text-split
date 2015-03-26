'use strict';

import TextSplit from './TextSplit';

const WHITESPACE_SPLIT_REGEX = /(\s+)/;

class WordTextSplit extends TextSplit {
  splitText() {
    return this.props.text.split(WHITESPACE_SPLIT_REGEX).filter((n) => n !== '');
  }
}

module.exports = WordTextSplit;
