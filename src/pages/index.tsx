import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }: { data: any }) => (
  <Layout>
    <Seo title="Home" />

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`, justifyContent: "center" }}
    />
    <ul>
      {data.allMicrocmsBlog.edges.map(({ node }) => (
        <li key={node.blogId}>
          <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`