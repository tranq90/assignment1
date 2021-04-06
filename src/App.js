import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    usernames: [
      { name: "farmertran" },
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      usernames: [
        {name: event.target.value}
      ]
    })
  }

  render() {
    const style = {
      border: '2px solid red'
    }

    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0].name}/>
        <UserInput
          changed={this.nameChangeHandler}
          style={style}
        />
      </div>
    );
  }
}

export default App;
