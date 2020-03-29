import React from "react"
import { Gallery } from "gatsby-theme-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import USP from "../components/usp"
import WieZijnWij from "../components/wie-zijn-wij"
import Service from "../components/service"
import Stock from "../components/stock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <USP />
    <WieZijnWij />
    <Service />
    <Gallery />
    <Stock />
  </Layout>
)

export default IndexPage
