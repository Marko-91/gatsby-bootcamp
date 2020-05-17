import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from '../components/head'

function Blog() {
  const data = useStaticQuery(graphql
    `
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `
  )

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Welcome to the Blog! More posts to come.</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog