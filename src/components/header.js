import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import About from '../pages/about'
import Contact from '../pages/contact'

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
          style={navLinkStyles}
          to="/"> Home
        </Link>
        <Link
          style={navLinkStyles}
          to="/about"> About
        </Link> 
        <Link
          style={navLinkStyles}
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

const navLinkStyles = {
  color: '#333',
  textDecoration: 'none',
  marginRight: '10px',
  fontSize: '24px',
}

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
