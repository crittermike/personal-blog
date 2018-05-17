module.exports = {
  siteMetadata: {
    title: `Mike Crittenden`,
    description: `Random ramblings and observations by Mike Crittenden`,
    siteUrl: `https://mikecr.it`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mike Crittenden",
        short_name: "MikeCr.it",
        start_url: "/",
        background_color: "#4e5166",
        theme_color: "#ff5964",
        display: "minimal-ui",
        // icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
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
