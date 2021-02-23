import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <section>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </section>
  )
}