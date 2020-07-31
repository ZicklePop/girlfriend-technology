import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

const cx = {
  main: 'sans-serif mw8 center',
  content: 'fw9 i f-subheadline ph3 pt6 mw6 center'
}

const Labs = () => (
  <Layout
    title='girlfriend technology ~ labs'
    className={cx.main}
  >
    <Nav />
    <div className={cx.content}>
      {'coming soon 👩‍🔬'}
    </div>
    <style jsx global>
      {`
        body {
          color: #23004e;
          background-color: #bf8bff;
        }
        a {
          color: #23004e;
        }
      `}
    </style>
  </Layout>
)

export default Labs
