import React from 'react'

const cx = {
  footer: 'left-0 right-0 absolute w-100 fw3 pv5 tc',
  copyright: 'i',
  a: 'mh2'
}

const Nav = () => (
  <footer className={cx.footer}>
    <p className={cx.copyright}>
      © girlfriend technology {new Date().getFullYear()}
    </p>
    <a
      href='/'
      title='terms'
      className={cx.a}
    >
        terms
    </a>
    <a
      href='/'
      title='privacy'
      className={cx.a}
    >
      privacy
    </a>
  </footer>
)

export default Nav
