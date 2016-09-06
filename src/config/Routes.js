import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Dashboard from '../components/Dashboard';
import PatientsList from '../components/Patients/List';
import NotFound from '../components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="patients" component={PatientsList} />
    <Route path="*" component={NotFound} />
  </Route>
);
