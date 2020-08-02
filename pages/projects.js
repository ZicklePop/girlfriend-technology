import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

const cx = {
  main: 'mw8 center',
  content: 'fw9 i f-subheadline ph3 pv6 mw6 center lh-title hyphens-auto'
}

const theme = {
  light: '#5af9f9',
  dark: '#005252'
}

const Projects = () => (
  <Layout
    title='girlfriend technology ~ projects'
    className={cx.main}
    {...theme}
  >
    <Nav />
    <div className={cx.content}>
      {'👩‍💻 soon'}
    </div>
    <Footer />
  </Layout>
)

export default Projects
