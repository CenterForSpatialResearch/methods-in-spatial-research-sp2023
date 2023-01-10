import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const AssignmentsPage = ({ data }) => {
    return (
        <Layout pageTitle="Assignments">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/assignments/${node.slug}`}>
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
        filter: {frontmatter: {cat: {eq: "assignment"}}}
        sort: {fields: frontmatter___sequence, order: ASC}
      ) {
        nodes {
          frontmatter {
            author
            cat
            sequence
            title
          }
          id
          slug
        }
      }
    }    
  `


export default AssignmentsPage