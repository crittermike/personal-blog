import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import TagList from '../../components/TagList'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <section className="section">
    <Helmet title={`Tags | ${title}`} />
    <TagList group={group} />
  </section>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
