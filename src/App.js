import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './config/Routes';

import './App.css';

render(
  ( <Router history={browserHistory} routes={routes}/> ),
    document.getElementById('app')
);
