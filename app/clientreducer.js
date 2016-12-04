import {combineReducers} from 'redux';
import Constants from './constants';
import shortid from 'shortid';

export default function ClientReducer(state={}, action='') {
    switch(action.type) {
        case Constants.TODO.TOGGLE_DONE:
            const todos = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
            return Object.assign({}, state, { todos: todos });
        case Constants.TODO.ADD_TODO:
            const newTodo = Object.assign({}, action.todo, {
                id: shortid.generate(),
                done: false
            });
            return Object.assign({}, state, { todos: state.todos.concat([newTodo]) });
        case Constants.TODO.DELETE_TODO:
            const newtodos = state.todos.filter((todo) => {
                return todo.id !== action.id;
            });
            return Object.assign({}, state, { todos: newtodos });
        default:
            return state;
    }
}
