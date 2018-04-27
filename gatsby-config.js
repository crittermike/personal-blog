module.exports = {
  siteMetadata: {
    title: `Mike Crittenden`,
    description: `Random ramblings and observations by Mike Crittenden`,
    siteUrl: `https://mikecr.it`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`josefin sans`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-6322775-21',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
                            {
                              site {
                                siteMetadata {
                                  title
                                  description
                                  siteUrl
                                  site_url: siteUrl
                                }
                              }
                              allMarkdownRemark(
                                limit: 1000,
                                sort: { order: DESC, fields: [frontmatter___date] },
                                filter: {frontmatter: { tags: { eq: "drupal" } }}
                              ) {
                                edges {
                                  node {
                                    excerpt
                                    html
                                    fields { slug }
                                    frontmatter {
                                      title
                                      date
                                    }
                                  }
                                }
                              }
                            }
                          `,
            output: '/drupal-planet.xml',
          },
          {
            query: `
                            {
                              site {
                                siteMetadata {
                                  title
                                  description
                                  siteUrl
                                  site_url: siteUrl
                                }
                              }
                              allMarkdownRemark(
                                limit: 1000,
                                sort: { order: DESC, fields: [frontmatter___date] },
                                filter: {frontmatter: { templateKey: { eq: "blog-post" } }}
                              ) {
                                edges {
                                  node {
                                    excerpt
                                    html
                                    fields { slug }
                                    frontmatter {
                                      title
                                      date
                                    }
                                  }
                                }
                              }
                            }
                          `,
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
}
