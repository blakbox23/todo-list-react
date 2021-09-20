import React, { Component } from 'react'

 class TodoItem extends Component {
    render() {
        return (
            <div>
                 <li>{this.props.todo.title}</li>
            </div>
        )
    }
}

export default TodoItem
