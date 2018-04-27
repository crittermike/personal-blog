import React from 'react'
import Link from 'gatsby-link'

const TagList = props => (
  <div>
    <h1>Tags</h1>
    <ul>
      {props.group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
