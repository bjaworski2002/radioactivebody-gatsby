import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import fav from "../assets/favicon.svg"

const SEO = ({ title, description, author, favicon }) => {
  return (
    <StaticQuery query={detailsQuery} render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const metaAuthor = author || data.site.siteMetadata.author
      return (
        <Helmet title={metaTitle} meta={[
          { property: `og:description`, content: `${metaDescription}` },
          { property: `og:title`, content: `${metaTitle}` },
          { property: `og:type`, content: `website` },
          { name: `twitter:card`, content: `summary` },
          { name: `twitter:creator`, content: metaAuthor },
          { name: `twitter:title`, content: `${metaTitle}` }
        ]} htmlAttributes={{ lang: "pl" }}
        >
          <meta charSet="utf-8" />
          <link rel="icon" type="image/svg" href={fav} sizes="32x32" />
        </Helmet>
      )
    }} />
      )
    }
export default SEO
const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        favicon
      }
    }
  }
`