import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { initializeApp } from '../actions/initializeApp.js';

export class NavBar extends Component {

  componentDidMount(){
    // need to move this somewhere else
    // also need to abstract to accept specific user that logs in
    this.props.initializeApp(1)
  }

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
        <div>
          <h1>{ this.props.userName }</h1>
        </div>
        
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
      userName: state.user.name
  }
}

export default connect(mapStateToProps, { initializeApp })(NavBar) 