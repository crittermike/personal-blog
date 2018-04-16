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
