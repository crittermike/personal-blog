import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <h1 className="text-3xl my-6">{title}</h1>
      <p className="mb-32">
        <small>{date}</small>
      </p>
      <PostContent content={content} className="content" />
      <hr />
      {tags && tags.length ? (
        <div>
          <p>
            Tags:&nbsp;
            {tags.map(tag => (
              <span>
                <Link to={`/tags/${tag.toLowerCase()}/`}>{tag}</Link>&nbsp;
              </span>
            ))}
          </p>
        </div>
      ) : null}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet title={`${post.frontmatter.title} | Mike Crittenden's Blog`} />
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
