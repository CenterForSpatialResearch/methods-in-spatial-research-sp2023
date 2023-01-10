import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const TutorialsPage = ({ data }) => {
    return (
        <Layout pageTitle="Tutorials">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/tutorials/${node.slug}`}>
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
    filter: {frontmatter: {cat: {eq: "tutorial"}}}
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


export default TutorialsPage