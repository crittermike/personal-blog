import React from 'react'
import Link from 'gatsby-link'

const PostTeaser = (props) => (
    <div>
        <h3><Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link></h3>
        <p><small>{props.post.frontmatter.date} - {props.post.frontmatter.description}</small></p><br /><br />
    </div>
)

export default PostTeaser
