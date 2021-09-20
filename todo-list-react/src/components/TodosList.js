import React, { Component } from 'react'
import TodoItem from "./TodoItem";

 class TodosList extends Component {
    render() {
        return (
            <ul>
            {this.props.todos.map(todo => (
            //   <li key={todo.id}>{todo.title}</li>
            <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )
    }
}

export default TodosList