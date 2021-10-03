import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

export default function Header({ siteTitle }: { siteTitle: any }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
