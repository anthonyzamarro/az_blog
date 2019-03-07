import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import About from '../pages/about'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul 
        style={{
          color: '#fff',
          float: 'right'
        }}
      >
        <Link
          style={navLinkStyles}
          to="/"> Home
        </Link>
        <Link
          style={navLinkStyles}
          to="/about"> About
        </Link>
      </ul>
    </div>
  </header>
)

const navLinkStyles = {
  color: '#fff',
  padding: '0 10px'
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
