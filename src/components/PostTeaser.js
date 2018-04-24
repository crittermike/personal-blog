import React from 'react'
import Link from 'gatsby-link'

const PostTeaser = (props) => (
  <div className="teaser">
    <h3><Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link></h3>
    <p><small>{props.post.frontmatter.date}</small></p>
  </div>
)

export default PostTeaser
