import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import USP from "../components/usp"
import WieZijnWij from "../components/wie-zijn-wij"
import Service from "../components/service"
import Carousel from "../components/carousel"
import Stock from "../components/stock"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <USP />
    <WieZijnWij />
    <Service />
    <Carousel />
    <Stock />
    <Contact />
  </Layout>
)

export default IndexPage
