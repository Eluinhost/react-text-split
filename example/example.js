'use strict';

React.render(
  React.createElement(ReactTextSplit.TextSplit, {text: 'React Text Split Example', classBase: 'example'}),
  document.getElementById('example')
);

React.render(
  React.createElement(ReactTextSplit.WordTextSplit, {text: 'React Text Split Example', classBase: 'example'}),
  document.getElementById('example2')
);

React.render(
  React.createElement(ReactTextSplit.LetterTextSplit, {text: 'React Text Split Example', classBase: 'example'}),
  document.getElementById('example3')
);

var Custom = ReactTextSplit.TextSplit;
Custom.prototype = ReactTextSplit.TextSplit.prototype;

Custom.prototype.splitText = function() {
  return this.props.text.split(/(t)/);
};

React.render(
  React.createElement(Custom, {text: 'React Text Split Example', classBase: 'example'}),
  document.getElementById('example4')
);

var Wrapper = React.createClass({
  getInitialState: function() {
    return {
      index: 0
    }
  },
  words: [
    'React Text Split Example',
    'with changing text values',
    'with LetterTextSplit'
  ],
  componentDidMount: function() {
    var _this = this;
    setInterval(function() {
      _this.setState({
        index: (_this.state.index + 1) % _this.words.length
      });
    }, 2000);
  },
  render: function() {
    return React.createElement(ReactTextSplit.LetterTextSplit, {text: this.words[this.state.index], classBase: 'example'});
  }
});

React.render(
  React.createElement(Wrapper),
  document.getElementById('example5')
);
