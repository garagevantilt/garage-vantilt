import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero_2021.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Wrapper = styled.div`
    width: 100%;
  `

  const ImageBackground = styled(BackgroundImage)`
    background-position: center;
    background-size: cover;
    height: 100vh;

    + * {
      margin-top: 0;
    }
  `

  return (
    <Wrapper>
      <ImageBackground
        Tag="section"
        fluid={data.hero.sharp.fluid}
        fadeIn="soft" />
    </Wrapper>
  )
}

export default Hero;
