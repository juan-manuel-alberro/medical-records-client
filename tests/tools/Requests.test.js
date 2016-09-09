import test from 'ava';
import mocker from 'superagent-mocker';
import request from 'superagent';

import Requests from '../../src/tools/Requests';
import API from '../../src/config/API';

let mock = mocker(request);

mock.timeout = 100;
mock.get('/patients', function(req) {
  return {
    content: 'Patient list!',
    headers: req.headers
  };
});

mock.get('/error', function(req) {
  return {
    content: new Error(),
    status: 500
  };
});

test('should post a succesfull response', t => {
  return Requests.postRequest('/patients');
});

test('should get a succesfull response', t => {
  return Requests
    .getRequest('/patients')
    .then( (res, err) => {
      t.is(res.content, 'Patient list!');
    });
});

test('should get an unsuccesfull response', t => {
  t.throws(Requests
    .getRequest('/error')
    .then( (res, err) => {
      t.is(err.status, 500);
    })
  );
});
