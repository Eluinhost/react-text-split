'use strict';

import React from 'react';

const WHITESPACE_ONLY_REGEX = /^\s*$/;

class TextSplit extends React.Component {
  shouldComponentUpdate(newProps) {
    return this.props.text !== newProps.text || this.props.classBase !== newProps.classBase;
  }

  /**
   * Override this function for different styles
   *
   * @return {String[]} array of split text value
   */
  splitText() {
    return [this.props.text];
  }

  renderPart(text, index) {
    var partNumber = `part-${index}`;
    var classString = `${partNumber} ${this.props.classBase}-part`;

    if (WHITESPACE_ONLY_REGEX.test(text)) {
      classString += ` whitespace ${this.props.classBase}-whitespace`;
    }

    return <span aria-hidden className={classString} key={index}>{text}</span>;
  }

  render() {
    return (
      <span aria-label={this.props.text} className={this.props.classBase + '-base'}>
        { this.splitText().map((text, i) => this.renderPart(text, i))}
      </span>
    );
  }
}
TextSplit.propTypes = {
  text: React.PropTypes.string,
  classBase: React.PropTypes.string
};
TextSplit.defaultProps = {
  classBase: 'text-split',
  text: ''
};
module.exports = TextSplit;
