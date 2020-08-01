import React from 'react'
import NavItem from './nav-item'

const cx = {
  header: 'fw3 mb3 h2',
  nav: 'pa3 fixed db w-100 left-0 flex justify-between',
  name: 'i no-underline underline-hover',
  left: 'flex items-center',
  right: 'flex-grow flex items-center'
}

const Nav = () => (
  <header className={cx.header}>
    <nav className={cx.nav}>
      <div className={cx.left}>
        <NavItem
          className={cx.name}
          href='/'
          title='girlfriend technology'
        >
          {'💖 girlfriend technology'}
        </NavItem>
      </div>
      <div className={cx.right}>
        <NavItem
          href='/projects'
          title='projects'
        >
          projects
        </NavItem>
        <NavItem
          href='/labs'
          title='labs'
        >
          labs
        </NavItem>
      </div>
    </nav>
    <style jsx global>
      {`
        nav {
  backdrop-filter: blur(.75rem);
        }
      `}
    </style>
  </header>
)

export default Nav
