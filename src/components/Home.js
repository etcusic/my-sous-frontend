import React, { Component } from 'react';
import { fetchThings } from '../actions/index'

class Home extends Component {

    componentDidMount(){
        console.log("hello")
        console.log(process.env)
        fetchThings()
    }

    render() {
        return (
        <div>
            
        </div>
        );
    }

}
  
export default Home