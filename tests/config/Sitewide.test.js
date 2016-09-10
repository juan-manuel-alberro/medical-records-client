import test from 'ava';

import Sitewide from '../../src/config/Sitewide';

test('should response with a configuration object for the loader', t => {
  t.is(typeof Sitewide.getLoaderConfig(), 'object');
});
