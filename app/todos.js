import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from './todo';
import AddTodo from './add-todo';
import shortid from 'shortid';
import { Link } from 'react-router';
import ClientAction from './clientaction';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDone(id) {
    this.props.actions.toggleDone(id);
  }

  addTodo(todo) {
    this.props.actions.addTodo(todo);
  }

  deleteTodo(id) {
    this.props.actions.deleteTodo(id);
  }

  renderTodos() {
    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => this.toggleDone(id)}
            deleteTodo={(id) => this.deleteTodo(id)} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/hello"> Say Hello to Everyone! </Link>
        <p>The <em>best</em> todo app out there.</p>
        <h1>Things to get done:</h1>
        <ul className="todos-list">{ this.renderTodos() }</ul>
        <AddTodo onNewTodo={(todo) => this.addTodo(todo)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.client.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ClientAction), dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
