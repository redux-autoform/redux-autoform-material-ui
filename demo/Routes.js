import React from 'react';
import App from './containers/App';
import Demo from './pages/Demo.js';

import { Route, Redirect } from 'react-router';

export default (
    <Route component={App}>
        <Route path="/redux-autoform-bootstrap-ui/demo.html" component={Demo}/>
        <Redirect from="*" to="/redux-autoform-bootstrap-ui/demo.html" />
    </Route>
);
