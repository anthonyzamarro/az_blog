import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
// import Helmet from 'react-helmet';

export default function Template({data}) {
	const { markdownRemark: post } = data;
	console.log(data);
	return (
		<Layout>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<p>{post.frontmatter.date}</p>
				<div dangerouslySetInnerHTML={{__html: post.html}}></div>
			</div>
		</Layout>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				author
				date
			}
		}
	}
`