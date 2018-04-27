import React from 'react'
import Link from 'gatsby-link'

const TagList = props => (
  <div>
    <h1 className="text-3xl my-6">All tags</h1>
    <ul>
      {props.group.map(tag => (
        <li className="my-2" key={tag.fieldValue}>
          <Link to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
