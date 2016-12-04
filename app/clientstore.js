import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import clientReducer from './clientreducer';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default props => {

    const reducer = combineReducers({
        client:clientReducer,
        routing: routerReducer
    });

    const initialState = {
        client: { name: ''}
    };

    const logger = createLogger();
    let middleware = [thunkMiddleware, promise, logger]
    let finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);

    return finalCreateStore(reducer, initialState);
};
