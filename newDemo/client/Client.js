import React from 'react';
import {Router} from 'react-router'
import routes from '../shared/components/Routes';
import configureStore from '../shared/redux/Store';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../demo/styles/Styles.less';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const MainApp = (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router history={history} routes={routes}/>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<MainApp/>, document.getElementById('#app_container'));