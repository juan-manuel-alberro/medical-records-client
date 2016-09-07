import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PatientList from '../../../src/components/Patients/List';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<PatientList />);
const list = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(list.type, 'div');
});
