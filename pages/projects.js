import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

const cx = {
  main: 'sans-serif mw8 center',
  content: 'fw9 i f-subheadline ph3 pt6 mw6 center'
}

const Projects = () => (
  <Layout
    title='girlfriend technology ~ projects'
    className={cx.main}
  >
    <Nav />
    <div className={cx.content}>
      {'tktk 👩‍💻 wip'}
    </div>
    <style jsx global>
      {`
        body {
          color: #005252;
          background-color: #00eded;
        }
        a {
          color: #005252;
        }
      `}
    </style>
  </Layout>
)

export default Projects
