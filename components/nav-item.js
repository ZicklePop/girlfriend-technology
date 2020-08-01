import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const cx = {
  a: 'link f6 f5-ns dib mr3 underline'
}

const NavItem = ({ as, children, className, href, title, rel }) => (
  <Link
    href={href}
    as={as}
  >
    <a
      className={`${cx.a} ${className}`}
      title={title}
      rel={rel}
    >
      {children}
    </a>
  </Link>
)

NavItem.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  title: PropTypes.string,
  rel: PropTypes.string
}

NavItem.defaultProps = {
  className: ''
}

export default NavItem
