import React from 'react';
import {Router} from 'react-router'
import routes from './Routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'
import {render} from 'react-dom';
import './less/styles.less';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
	    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router history={history} routes={routes}/>
	    </MuiThemeProvider>
    </Provider>,
    document.getElementById('#app_container')
);    