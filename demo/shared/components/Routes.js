import React from 'react';
import App from '../containers/App';
import Demo from './Demo.js';

import { Route, Redirect } from 'react-router';

export default (
    <Route component={App}>
        <Route path="/redux-autoform-material-ui/demo.html" component={Demo}/>
        <Redirect from="*" to="/redux-autoform-material-ui/demo.html" />
    </Route>
);
