import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function Index() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Marko, the web developer. Welcome to my Gatsby Website! Have fun!</h2>
      <p>Need a dev? <Link to="/contact/">Contact me.</Link></p>
    </Layout>
  )
}

export default Index