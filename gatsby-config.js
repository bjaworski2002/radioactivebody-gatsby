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
    favicon: "/favicon.svg"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-use-query-params",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.STRAPI_API_URL}`,
        queryLimit: 1000, // Defaults to 100
        params: {},
        collectionTypes: [
          { name: `treners`, endpoint: "api/treners?populate=image" },
          { name: `trenings`, endpoint: "api/trenings?populate=zawartosc,image" },
          ],
        singleTypes: [
          { name: `dane`, endpoint: "api/dane" },
          { name: `files`, endpoint: "api/upload/files" },
        ],
      },
    },
  ],
}
