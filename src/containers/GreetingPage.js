import React, { Component } from 'react';
import Welcome from '../GreetingPage/Welcome'
import SignIn from '../GreetingPage/SignIn'
import SignUp from '../GreetingPage/SignUp'

class GreetingPage extends Component {

    constructor(){
        super()
        this.state = {
          view: <Welcome />
        }
    }

    showWelcome = () => {
        this.setState({ view: <Welcome /> })
    }

    showSignIn = () => {
        this.setState({ view: <SignIn /> })
    }

    showSignUp = () => {
        this.setState({ view: <SignUp /> })
    }

    render() {
        return (
        <div>
            <h1>GREETING CONTAINER</h1>
            <h2>
                <button onClick={ this.showWelcome }>Welcome</button>
                ||
                <button onClick={ this.showSignIn }>Sign In</button>
                ||
                <button onClick={ this.showSignUp }>Sign Up</button>
            </h2>
            { this.state.view }
        </div>
        )
    }

}
  
export default GreetingPage