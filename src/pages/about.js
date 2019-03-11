import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"

const AboutPage = () => (
	<Layout>
	<SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
		<h1>About AZ Blog</h1>
		<p>
			I'm a front end developer and in this blog I write about
			the front end, the back end, and the side end of web development.
		</p>
		<p>
			Visit my portfolio 
			<a 
			href="https://anthonyzamarro.github.io/az_portfolio/" 
			target="_blank"
			rel="noopener noreferrer"
			>here</a>
		</p>
	</Layout>
)

export default AboutPage;