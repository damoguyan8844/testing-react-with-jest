import Constants from './constants';

export default {
    toggleDone: (id) => ({ type: Constants.TODO.TOGGLE_DONE, id:id }),
    addTodo: (todo) => ({ type: Constants.TODO.ADD_TODO, todo:todo }),
    deleteTodo: (id) => ({ type: Constants.TODO.DELETE_TODO, id:id }),
};
