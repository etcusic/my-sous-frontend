import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateStore extends Component {

    constructor(){
        super()
        this.state = {

        }
    }
    
    componentDidMount(){
        console.log(this.props)

    }

    render() {
        return (
        <div>
            <h2>Create Store</h2>

        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        suppliesArray: state.supplies.array,
        suppliesDictionary: state.supplies.dictionary,
        stores: state.stores
    }
}
  
export default connect(mapStateToProps)(CreateStore)