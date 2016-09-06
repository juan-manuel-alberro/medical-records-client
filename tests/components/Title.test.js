import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Title from '../../src/components/Title';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<Title title="Hello there!" />);
const title = shallowRenderer.getRenderOutput();

test('should have a h2 as container', t => {
  t.is(title.type, 'h2');
});

test('should have the proper text sent as props', t => {
  t.is(title.props.children, 'Hello there!');
});
