import React, { Component } from 'react';
import './App.css';
import GreetingPage from './containers/GreetingPage.js'
import Application from './containers/Application.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      view: <Application />
      // view: <GreetingPage />
    }
  }

  initiateApp = () => {
    this.setState({ view: <Application /> })
  }

  render(){
    return (
      <div className="App">
       { this.state.view }
      </div>
    );
  }
  
}

export default App;
