const netlifyCmsPaths = {
  resolve: 'gatsby-plugin-netlify-cms-paths',
  options: {
    cmsConfig: '/static/admin/config.yml'
  }
};

module.exports = {
  siteMetadata: {
    title: 'Vpershe Site'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KMZ98TT',
        includeInDevelopment: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/advice`,
        name: 'advice'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'settings',
        path: `${__dirname}/content/settings/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vpershe',
        short_name: 'Vpershe',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'static/assets/icon-512px.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    netlifyCmsPaths,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // netlifyCmsPaths, // Including in your Remark plugins will transform any paths in your markdown body
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: 'transparent' // required to display blurred image first
            }
          }
        ]
      }
    }
  ]
};
