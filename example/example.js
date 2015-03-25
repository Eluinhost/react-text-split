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
