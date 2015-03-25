'use strict';

jest.dontMock('../WordTextSplit.js');
jest.dontMock('../TextSplit.js');

import WordTextSplit from '../WordTextSplit';
import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

describe('WordTextSplit', () => {
  it('splits at whitespace', () => {
    var text = TestUtils.renderIntoDocument(<WordTextSplit text={' some words separated  by\t differing whitespace'} />);
    var parts = ['\u00A0', 'some', '\u00A0', 'words', '\u00A0', 'separated', '\u00A0\u00A0', 'by', '\t\u00A0', 'differing', '\u00A0', 'whitespace'];

    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');
    expect(base.props.children.length).toEqual(parts.length);

    parts.forEach((value, index) => {
      var span = TestUtils.findRenderedDOMComponentWithClass(text, 'part-' + index);
      expect(span.getDOMNode().textContent).toEqual(value);
    });
  });

  it('adds correct classes', () => {
    var text = TestUtils.renderIntoDocument(<WordTextSplit text={'words with\twhitespace'} />);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');

    expect(base.props.children.length).toEqual(5);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('text-split-part');

      if (index === 1 || index === 3) {
        expect(classes).toContain('whitespace');
        expect(classes).toContain('text-split-whitespace');
        expect(classes.length).toBe(4);
      } else {
        expect(classes.length).toBe(2);
      }
    });
  });

  it('works with custom base', () => {
    var text = TestUtils.renderIntoDocument(<WordTextSplit text={'words with\twhitespace'} classBase="test" />);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'test-base');

    expect(base.props.children.length).toEqual(5);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('test-part');

      if (index === 1 || index === 3) {
        expect(classes).toContain('whitespace');
        expect(classes).toContain('test-whitespace');
        expect(classes.length).toBe(4);
      } else {
        expect(classes.length).toBe(2);
      }
    });
  });
});
