import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import clientReducer from './clientreducer';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import shortid from 'shortid';

export default props => {

    const reducer = combineReducers({
        todos: clientReducer,
        routing: routerReducer
    });

    const initialState = {
        todos: [
            { id: shortid.generate(), name: 'Write a blog post for Sitepoint', done: false },
            { id: shortid.generate(), name: 'Blog about Jest', done: false },
            { id: shortid.generate(), name: 'Walk the dog', done: false },
        ]
    };

    const logger = createLogger();
    let middleware = [thunkMiddleware, promise, logger];
    let finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);

    return finalCreateStore(reducer, initialState);
};
