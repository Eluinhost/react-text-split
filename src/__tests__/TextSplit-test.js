'use strict';

jest.dontMock('../TextSplit.js');

import TextSplit from '../TextSplit';
import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

describe('TextSplit', () => {
  it('doesn\'t split words', () => {
    var text = TestUtils.renderIntoDocument(<TextSplit text={' some words separated  by\t differing whitespace'} />);
    var parts = [' some words separated  by\t differing whitespace'];

    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');
    expect(base.props.children.length).toEqual(1);

    parts.forEach((value, index) => {
      var span = TestUtils.findRenderedDOMComponentWithClass(text, 'part-' + index);
      expect(span.getDOMNode().textContent).toEqual(value);
    });
  });

  it('adds correct classes', () => {
    var text = TestUtils.renderIntoDocument(<TextSplit text={'words with\twhitespace'} />);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'text-split-base');

    expect(base.props.children.length).toEqual(1);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('text-split-part');
      expect(classes.length).toBe(2);
    });
  });

  it('works with custom base', () => {
    var text = TestUtils.renderIntoDocument(<TextSplit text={'words with\twhitespace'} classBase="test"/>);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'test-base');

    expect(base.props.children.length).toEqual(1);

    base.props.children.forEach((span, index) => {
      var classes = (span.props.className || '').split(' ');
      expect(classes).toContain('part-' + index);
      expect(classes).toContain('test-part');
      expect(classes.length).toBe(2);
    });
  });

  it('adds aria props', () => {
    var text = TestUtils.renderIntoDocument(<TextSplit text={'words with\twhitespace'} classBase="test"/>);
    var base = TestUtils.findRenderedDOMComponentWithClass(text, 'test-base');

    expect(base.props['aria-label']).toEqual('words with\twhitespace');

    base.props.children.forEach((span) => {
      expect(span.props['aria-hidden']).toBeTruthy();
    });
  })
});
