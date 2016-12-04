import { applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import shortid from 'shortid';
import reducers from './reducers';

export default props => {

    const initialState = {
        client: {
            todos: [
                { id: shortid.generate(), name: 'Write a blog post for Sitepoint', done: false },
                { id: shortid.generate(), name: 'Blog about Jest', done: false },
                { id: shortid.generate(), name: 'Walk the dog', done: false },
            ]
        }
    };

    const logger = createLogger();
    let middleware = [thunkMiddleware, promise, logger];
    let finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);

    return finalCreateStore(reducers, initialState);
};
