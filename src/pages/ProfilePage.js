import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { initializeApp } from '../actions/initializeApp';

class ProfilePage extends Component {

    componentDidMount(){
        // will need to adjust this when I incorporate user sign in
        // should put this in a different container with routes and navabar separate from App to account for user sign in
        initializeApp(1)
      }

    render() {
        return (
        <div>
            <h1>PROFILE PAGE</h1>
            {/* <h1>{ this.props.userName }</h1> */}
        </div>
        );
    }

}

// const mapStateToProps = state => {
//     return {
//         userName: state.user.name
//     }
// }
  
// export default connect(mapStateToProps)(ProfilePage)
export default ProfilePage