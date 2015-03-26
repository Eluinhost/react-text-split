'use strict';

import React from 'react';
import TextSplit from './TextSplit';

class RotateTextSplit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  shouldComponentUpdate(newProps, newState) {
    // if timer ticked the index up
    if (newState.index !== this.state.index) return true;

    // if we're switching types
    if (this.props.type !== newProps.type) return true;

    // if it's the same array
    if (this.props.values === newProps.values) return false;

    // if they're not the same length
    if (this.props.values.length != newProps.length) return true;

    // check each individual for changes
    for (var i = 0; i < this.props.values.length; ++i) {
      if (this.props.values[i] !== newProps[i]) return true;
    }

    return false;
  }

  componentDidMount() {
    // TODO allow modification of the timer
    this._timer = setInterval(() => {
      this.setState({
        index: (this.state.index + 1) % this.props.values.length
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    var Type = this.props.type;
    return <Type text={this.props.values[this.state.index]} classBase={this.props.classBase} />;
  }
}
RotateTextSplit.propTypes = {
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  type: React.PropTypes.instanceOf(TextSplit).isRequired,
  classBase: React.PropTypes.string
};

module.exports = RotateTextSplit;
