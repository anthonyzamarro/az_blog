import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
    <br />
    <h2>Index</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
      <li key={post.node.id} >
        <Link 
          to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </li>
      ))}
    </ul>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: {fields: [frontmatter___date], order: DESC }
      filter:{
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }

`

export default IndexPage
