import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout>
    <SEO title="Page" />
    <h1>Hi</h1>
    <p>Welcome to page template</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
