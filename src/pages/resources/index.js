import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ResourcesPage = ({ data }) => {
    return (
        <Layout pageTitle="Resources">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/resources/${node.slug}`}>
                {node.frontmatter.sequence} {node.frontmatter.title}
                </Link>
              </h2>
            </article>
          ))
        }
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {cat: {eq: "resource"}}}
    sort: {fields: frontmatter___sequence, order: ASC}) {
    nodes {
      frontmatter {
        title
        author
        sequence
      }
      id
      slug
    }
  }
}
  `


export default ResourcesPage