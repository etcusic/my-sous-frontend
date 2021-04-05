import React, { Component } from 'react';
import { fetchThings } from '../actions/index'

class Home extends Component {

    componentDidMount(){
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