// import React from 'react';
// import { graphql } from 'gatsby'
// import Layout from "../components/layout"
// // import Helmet from 'react-helmet';

// export default function Project({data}) {
// 	const { projectsJson: project } = data;
// 	console.log(data)
// 	return (
// 		<Layout>
// 			<div>
// 				<h1>Projects!!!</h1>
// 				<p>One single</p>
// 			</div>
// 		</Layout>
// 	);
// }

// export const projectQuery = graphql`
//   query ProjectByPath($path: String!) {
//   	projectsJson(path: { eq: $path }) {
//   		name
//   		path
//   		description
//   	}
//   }
// `
