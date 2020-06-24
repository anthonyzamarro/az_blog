import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import About from '../pages/about'
// import Contact from '../pages/contact'

import "../scss/nav.scss"

const Header = ({ siteTitle }) => (
  <header
    style={headerStyles}
  >
    <nav
      style={navStyles}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={logoStyle}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <Link
          className="nav__link nav__link-home"
          to="/"> Home
        </Link>
       
        <Link
          className="nav__link nav__link-projects"
          to="/projects"> Projects
        </Link> 
        <Link
          className="nav__link nav__link-contact"
          to="/contact"> Contact
        </Link>
      </ul>
    </nav>
  </header>
)

const headerStyles ={
  marginBottom: `1.45rem`,
  background: 'tomato',
  boxShadow: '1px 1px 1px'
}

const logoStyle = {
  color: `#333`,
  textDecoration: `none`,
}

// const navLinkStyles = {
//   color: '#333',
//   textDecoration: 'none',
//   marginRight: '10px',
//   fontSize: '24px',
// }

const navStyles = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1rem 1rem`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
