'use strict';

jest.dontMock('../LetterTextSplit.js');
jest.dontMock('../TextSplit.js');

import LetterTextSplit from '../LetterTextSplit';
import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

describe('LetterTextSplit', () => {
  it('splits at char', () => {
    var text = TestUtils.renderIntoDocument(<LetterTextSplit text={'a b\t c d '} />);
    var parts = ['a', ' ', 'b', '\t', ' ', 'c', ' ', 'd', ' '];

    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');
    expect(base.props.children.length).toEqual(parts.length);

    parts.forEach((value, index) => {
      var span = TestUtils.findRenderedDOMComponentWithClass(text, 'part-' + index);
      expect(span.getDOMNode().textContent).toEqual(value);
    });
  });

  it('adds correct classes', () => {
    var text = TestUtils.renderIntoDocument(<LetterTextSplit text={'a b\t c d '} />);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');

    expect(base.props.children.length).toEqual(9);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('text-split-part');

      if (index === 1 || index === 3 || index === 4 || index === 6 || index === 8) {
        expect(classes).toContain('whitespace');
        expect(classes).toContain('text-split-whitespace');
        expect(classes.length).toBe(4);
      } else {
        expect(classes.length).toBe(2);
      }
    });
  });

  it('works with custom base', () => {
    var text = TestUtils.renderIntoDocument(<LetterTextSplit text={'a b\t c d '} classBase="test" />);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'test-base');

    expect(base.props.children.length).toEqual(9);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('test-part');

      if (index === 1 || index === 3 || index === 4 || index === 6 || index === 8) {
        expect(classes).toContain('whitespace');
        expect(classes).toContain('test-whitespace');
        expect(classes.length).toBe(4);
      } else {
        expect(classes.length).toBe(2);
      }
    });
  });
});
