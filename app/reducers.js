import { combineReducers } from 'redux';
import clientReducer from './clientreducer';
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers({
    client: clientReducer,
    routing: routerReducer
});


export default reducer;