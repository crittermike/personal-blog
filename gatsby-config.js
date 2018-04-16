module.exports = {
    siteMetadata: {
        title: 'Mike Crittenden\'s blog',
        description: `Random ramblings and observations by Mike Crittenden`,
        siteUrl: `https://mikecr.it`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `cardo`,
                    `josefin sans`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-6322775-21",
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
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
                    }
                  `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                });
                            });
                        },
                        query: `
                            {
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
                        output: "/drupal-planet.xml",
                    },
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                });
                            });
                        },
                        query: `
                            {
                              allMarkdownRemark(
                                limit: 1000,
                                sort: { order: DESC, fields: [frontmatter___date] },
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
                        output: "/rss.xml",
                    },
                ],
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-prismjs',
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
    ],
}
