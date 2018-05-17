import React from 'react'
import Header from '../components/Header'
import PostHeader from '../components/PostHeader'
import Footer from '../components/Footer'
import PostFooter from '../components/PostFooter'
import Helmet from 'react-helmet'

import './style.css'
import favicon from '../../static/img/favicon.ico'

require('prismjs/themes/prism-tomorrow.css')

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header, footer

    if (location.pathname === '/') {
      header = <Header />
      footer = <Footer />
    } else {
      header = <PostHeader />
      footer = <PostFooter />
    }
    return (
      <div className="font-sans text-xl text-white leading-normal min-h-screen pt-8">
        <div className="container mx-auto max-w-lg pt-6">
          <Helmet
            meta={[
              { name: 'description', content: 'The personal blog of Mike Crittenden' }
            ]}
          >
            <link rel="shortcut icon" type="image/ico" href={favicon} />
            <html lang="en" />
          </Helmet>
          {header}
          {children()}
          {footer}
        </div>
      </div>
    )
  }
}

export default Template
