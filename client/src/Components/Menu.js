import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <header className="app-header">
    <h3>
      Avery's Weather App
    </h3>

    <div className="menu">
      <Link to='/current' className="link">current</Link>
      <Link to='/5day' className="link">5day</Link>
    </div>
  </header>
)

export default Menu