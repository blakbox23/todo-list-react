import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
        };

    onChange = e => {
        this.setState({
            title: e.target.value
        });
     };

     handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({ title: ""});
        } else {
            alert("Please write todo item")
        }
      };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add Todo..." onChange={this.onChange} value={this.state.title} />
            <button>Submit</button>
        </form>
        )
    }
}
export default InputTodo