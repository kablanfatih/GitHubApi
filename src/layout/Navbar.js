import React from 'react'
import PropTypes from "prop-types";

function Navbar({title}) {

  return (

    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

    </nav>

  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title : "Default App"
};
export default Navbar;
