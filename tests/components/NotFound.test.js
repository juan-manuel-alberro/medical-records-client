import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NotFound from '../../src/components/NotFound';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<NotFound />);
const notFound = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(notFound.type, 'div');
});
