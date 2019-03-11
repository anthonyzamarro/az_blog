import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{    
      maxWidth: 'calc(100% / 2)',
      margin: 'auto'
    }}>
    <h1>Blog List</h1>
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
  }`

export default IndexPage
