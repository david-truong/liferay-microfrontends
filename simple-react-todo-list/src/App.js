import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor", props);
    this.state = {
      desc: '',
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
      if (localStorage.getItem(this.props.user.serializable.firstName)) {

        localStorage.setItem(
          this.props.user.serializable.firstName,
          JSON.stringify(JSON.parse(localStorage.getItem(this.props.user.serializable.firstName)).concat([this.state.desc])))
  
      } else {        
        localStorage.setItem(
          this.props.user.serializable.firstName,
          JSON.stringify([this.state.desc]))
      }
    }   

    var newArray = this.state.items.slice();
    newArray.push(this.state.desc);
    this.setState({items:newArray});
  }

  render() {
    return (
      <div>
        <h1>Welcome to ReactJS + Liferay Portlet</h1>
       
        <p>The entire User Object:
          <br/>
          <code>
          {this.props.user ? JSON.stringify(this.props.user) : "No user loaded"}
          </code>
          </p>
        <p>
          The user first name: {this.props.user ? this.props.user.serializable.firstName : "No user loaded"}
        </p>
        <h1>ToDoAPP</h1>
        <form className="app">
          <input type="text" onChange={this.onChange}/>
          <button onClick={this.onSubmit}>Submit</button>          
        </form>
      
      <List items={this.state.items}></List>
      </div>


    );
  }

  componentDidMount() {
    this.setState({items: this.props.user 
      && localStorage.getItem(this.props.user.serializable.firstName) 
      ? JSON.parse(localStorage.getItem(this.props.user.serializable.firstName)) 
      : []});
  }
}

export default App;
