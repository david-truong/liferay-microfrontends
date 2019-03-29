import React, { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor", props);
    this.state = {
      desc: "",
      items: props.initialState ? props.initialState.initialArray : []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ desc: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.user) {
      if (localStorage.getItem(this.props.user.userFirstName)) {
        localStorage.setItem(
          this.props.user.userFirstName,
          JSON.stringify(
            JSON.parse(
              localStorage.getItem(this.props.user.userFirstName)
            ).concat([this.state.desc])
          )
        );
      } else {
        localStorage.setItem(
          this.props.user.userFirstName,
          JSON.stringify([this.state.desc])
        );
      }
    }

    var newArray = this.state.items.slice();
    newArray.push(this.state.desc);
    this.setState({ items: newArray });
  }

  renderTodos() {
    if (this.props.user && !this.props.user.userId) {
      return (
        <h3>
          Please login to create your todos
        </h3>
      );
    } else if (!this.props.user) {
     return ( <RenderTodoApp
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        items={this.state.items}
     />);
    } else {
      return (
        <React.Fragment>
          User object
          <br />
          <code>
            {this.props.user
              ? JSON.stringify(this.props.user)
              : "No user loaded"}
          </code>
          <RenderTodoApp
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            items={this.state.items}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to ReactJS + Liferay Portlet</h1>
        {this.renderTodos()}
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.setState({
      items:
        this.props.user && localStorage.getItem(this.props.user.userFirstName)
          ? JSON.parse(localStorage.getItem(this.props.user.userFirstName))
          : []
    });
  }
}

const RenderTodoApp = ({ onChange, onSubmit, items }) => (
  <React.Fragment>
    <h1>ToDoAPP</h1>
    <form className="app">
      <input type="text" onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </form>
    <List items={items} />
  </React.Fragment>
);

export default App;
