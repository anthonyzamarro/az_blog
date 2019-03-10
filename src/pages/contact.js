import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"

const ContactPage = () => (
	<Layout>
	<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Contact</h1>
		<p>
			You can reach me at anthony.zamarro@gmail.com
		</p>
	</Layout>
)

export default ContactPage;