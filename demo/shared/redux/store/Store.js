// configure store is ALWAYS in development mode because the DevTools should work on the demo
import {createStore, applyMiddleware, compose} from 'redux';
import {persistState} from 'redux-devtools';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers/RootReducer';
import DevTools from '../../components/DevTools';
import observe from './StoreObserver';
import { updateForm } from '../actions/FormOptionsActions';
import presets from '../../../client/presets/presets';
import _ from 'underscore';

const router = routerMiddleware(hashHistory);

const enhancer = compose(
    applyMiddleware(thunk, router),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
);

const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer, initialState, enhancer);

    observe(store,
        state => state.routing.locationBeforeTransitions.query.preset,
        (store, previousValue, currentValue) => {
            let presetName = currentValue || 'default';
            let preset = _.find(presets, p => p.name == presetName);
            store.dispatch(updateForm(preset.schema));
        }
    );

    if (module.hot) {
        module.hot.accept('../reducers/RootReducer', () =>
            store.replaceReducer(require('../reducers/RootReducer'))
        );
    }

    return store;
};

export default configureStore;
