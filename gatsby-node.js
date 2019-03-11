/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({actions, graphql}) => {
	const { createPage } = actions;
	const postTemplate = path.resolve(`src/templates/post.js`);
	const projectTemplate = path.resolve(`src/templates/project.js`);

	return graphql(`{
		allMarkdownRemark {
			edges {
				node {
					html
					id
					frontmatter {
						path
						title
						date
					}
				}
			}
		}
	}`)
	.then(res => {
		if(res.errors) {
			return Promise.reject(res.errors);
		}
		// blogs
		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate
			})
		})
		// projects
		// res.data.allProjectsJson.edges.forEach(({node}) => {
		// 	createPage({
		// 		path: node.path,
		// 		component: projectTemplate
		// 	})
		// })
	})
}
