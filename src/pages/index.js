import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Share from '../components/Share'
import NewsLetter from '../components/NewsLetter'

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}