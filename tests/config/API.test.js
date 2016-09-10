import test from 'ava';

import API from '../../src/config/API';

test('should response with the full patients url', t => {
  t.is(new API().getEndpoint('patients'), 'http://localhost:3000/api/patients');
});
