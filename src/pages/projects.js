import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Personal Projects</h1>
    {data.allProjectsJson.edges.map((project, index) => {
    	console.log(project)
    	return (
    			<a 
	    			key={index} 
	    			style={projectContainerStyles}
	    			href={project.node.url}
	    			target="_blank" 
    				rel="noopener noreferrer"
    			>
    				<h2>{project.node.name}</h2>
    				{project.node.description}
    			</a>
    		)
    })}
    <p>You can see my external portfolio 
    	<a 
	    	href="https://anthonyzamarro.github.io/az_portfolio/" 
	    	target="_blank" 
	    	rel="noopener noreferrer"> 
	    	here!
    	</a>
    </p>
  </Layout>
)

const projectContainerStyles = {
	marginBottom: '2rem', 
	background: 'turquoise', 
	padding: '8px', 
	borderRadius: '5px', 
	boxShadow: '1px 3px 2px rgb(155,155,155)',
	'display': 'block',
	'color': '#000',
	textDecoration: 'none'
}

export const projectQuery = graphql`
  query projectQuery {
    allProjectsJson {
      edges {
        node {
          id
          name
          description
          url
        }
      }
    }
}`
export default Projects
