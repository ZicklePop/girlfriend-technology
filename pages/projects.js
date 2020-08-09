import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BigContent from '../components/big-content'
import BoxedText from '../components/boxed-text'

const cx = {
  main: 'mw8 center',
  content: 'fw9 i f1 ph3 pv6 mw6 tc center lh-title hyphens-auto'
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
    <BigContent className={cx.content}>
      <BoxedText {...theme}>
        {'in development'}
      </BoxedText>
    </BigContent>
    <Footer />
  </Layout>
)

export default Projects
