import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
// import { initializeAppState } from '../actions/index.js'

export class NavBar extends Component {

    // componentDidMount(){
    //     this.props.initializeAppState()
    // }

  render() {
    return (
      <nav className="yellow darken-2">
        <div className="right">
          <NavLink to="/" className="navlinks">-- Profile -</NavLink>
          <NavLink to="/menus" className="navlinks">- Menus -</NavLink>
          <NavLink to="/pantry" className="navlinks">- Pantry -</NavLink>
          <NavLink to="/recipes" className="navlinks">- Recipes -</NavLink>
          <NavLink to="/grocery_list" className="navlinks">- Grocery List -</NavLink>
          <NavLink to="/supply_info" className="navlinks">- Supply Info --</NavLink>
        </div>
        
      </nav>
    )
  }
}

const mapStateToProps = state => {
//     return {
//         userName: state.user.name
//     }
}
  
// export default connect(mapStateToProps, { initializeAppState })(NavBar) 

export default connect(mapStateToProps)(NavBar) 