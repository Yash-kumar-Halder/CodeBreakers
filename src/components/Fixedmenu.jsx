import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Fixedmenu() {
  return (
    <div className="fixedmenuwraper">
      <NavLink to="/" className={({ isActive }) => `${isActive ? "active" : "unActive"}`}>
      <div className="fixedMenuTextCont">
          <div className="fixedMenuText fixedMenuText1">
            <h3>Home</h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/technology" className={({ isActive }) => `${isActive ? "active" : "unActive"}`}>
        <div className="fixedMenuTextCont">
          <div className="fixedMenuText fixedMenuText2">
            <h3>Technology</h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/quiz" className={({ isActive }) => `${isActive ? "active" : "unActive"}`}>
        <div className="fixedMenuTextCont">
          <div className="fixedMenuText fixedMenuText3">
            <h3>Quiz</h3>
          </div>
        </div>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `${isActive ? "active" : "unActive"}`}>
        <div className="fixedMenuTextCont">
          <div className="fixedMenuText fixedMenuText4">
            <h3>About</h3>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Fixedmenu