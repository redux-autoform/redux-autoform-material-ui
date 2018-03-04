import React from 'react';
import { Router } from 'react-router'
import routes from '../shared/routes/Routes';
import configureStore from '../shared/redux/store/Store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import numbro from 'numbro';
import moment from 'moment';
import { numbroLocalizer, momentLocalizer } from 'redux-autoform';

import 'babel-polyfill';

import './styles/Styles.less';

numbroLocalizer(numbro);
momentLocalizer(moment);

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router history={history} routes={routes} />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);