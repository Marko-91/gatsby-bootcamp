import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

function About() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>I live in Belgrade and I'm passionate about web technologies.</p>
      <span><Link to="/contact/">Contact Me.</Link></span>
    </Layout>
  )
}

export default About