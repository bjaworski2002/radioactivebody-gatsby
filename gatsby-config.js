/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Poznaj studio Terningów Personalnych w Krakowie',
    description: 'RadioActiveBody - siłownia z wykwalifikowanymi trenerami personalnymi znajdująca się w centrum Starego Podgórza w Krakowie',
    author: 'Bartosz Jaworski',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.STRAPI_API_URL}`,
        queryLimit: 1000, // Defaults to 100
        params: {},
        collectionTypes: [
          { name: `treners`, endpoint: "api/treners?populate=image" },
          { name: `trenings`, endpoint: "api/trenings?populate=zawartosc,image" },
          /*`trenings`*/],
        singleTypes: [{ name: `dane`, endpoint: "api/dane" }],
      },
    },
  ],
}
