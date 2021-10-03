/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header siteTitle={`Portfolio`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `3rem 1.0875rem 1.45rem`,
          textAlign: `center`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},
          {` `}
          <span>Tomoki Nakayama</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
