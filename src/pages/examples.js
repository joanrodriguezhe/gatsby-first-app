import React from 'react';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/Layout';
import { graphql } from 'gatsby'

const examples = ({ data }) => {
    const { site: { info: { author } } } = data
    return (
        <Layout>
            <h1>Hello from examples page</h1>
            <Header />
            <HeaderStatic />
            <h5>Author: {author}</h5>
        </Layout>
    )
}

export const data = graphql`
query MyQuery {
    site {
      info:siteMetadata {
        person {
          age
          name
        }
        title
        description
        data
        author
      }
    }
  }
  
`

export default examples
