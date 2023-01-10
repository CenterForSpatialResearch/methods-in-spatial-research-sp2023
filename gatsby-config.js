module.exports = {
  pathPrefix: "/methods-in-spatial-research-sp2023",
  siteMetadata: {
    title: `A4407-sp2022`,
    siteUrl: `https://sp2022.org`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `tutorials`,
        path: `${__dirname}/tutorials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assignments`,
        path: `${__dirname}/assignments`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `resources`,
        path: `${__dirname}/resources`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-image-attributes",
            options: {
              // dataAttributes: false
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",

          },
        ],
      },
    },


  ],
};

