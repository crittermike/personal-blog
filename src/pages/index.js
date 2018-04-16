import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PostTeaser from '../components/PostTeaser'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div>
          <Helmet title="Mike Crittenden's Blog" />
          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <PostTeaser post={post}/>
            ))}
        </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
