// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>

  )
}


export const query= graphql`
query {
  mdx(id: {}, frontmatter: {cat: {eq: "syllabus"}}) {
    frontmatter {
      title
    }
    body
  }
}

`

// Step 3: Export your component
export default IndexPage
