import React from 'react'
import Link from 'gatsby-link'
import Footer from './Footer'

const PostFooter = () => (
  <div>
    <br />
    <h3 className="mt-8">
      <Link to={'/'}>← Home</Link>
    </h3>
    <Footer />
  </div>
)

export default PostFooter
