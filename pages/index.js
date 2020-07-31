import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

const cx = {
  main: 'sans-serif mw8 center',
  content: 'fw9 i f-subheadline ph3 pt6 mw6 center'
}

const Index = () => (
  <Layout className={cx.main}>
    <Nav />
    <div className={cx.content}>
      {'👭 apps for us 👩‍❤️‍💋‍👩'}
    </div>
    <style jsx global>
      {`
        body {
          color: #3a0023;
          background-color: #ff72c6;
        }
        a {
          color: #3a0023;
        }
      `}
    </style>
  </Layout>
)

export default Index
