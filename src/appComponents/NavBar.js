import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {

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

export default NavBar