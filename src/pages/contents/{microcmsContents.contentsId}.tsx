import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ContentsPage = ({ data }: { data: any }) => (
  <Layout>
    <SEO title={data.microcmsContents.title} />

    <h2>{data.microcmsContents.title}</h2>
    <a href={data.microcmsContents.url}>{data.microcmsContents.url}</a>
    <br />
    <br />
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsContents.body}`,
      }}
    />
  </Layout>
)

export default ContentsPage

export const query = graphql`
  query ($id: String!) {
    microcmsContents(id: { eq: $id }) {
      contentsId
      title
      body
      url
    }
  }
`
