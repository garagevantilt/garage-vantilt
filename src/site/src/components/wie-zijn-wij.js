import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const WieZijnWij = () => {
    const data = useStaticQuery(graphql`
        query {
            vantilt: file(relativePath: { eq: "vantilt.jpg" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <h2>Wie zijn wij</h2>
            <p>
                Bij Garage Vantilt hebben we al meer dan 25 jaar ervaring in het onderhouden, herstellen en verkopen van voertuigen. Wij zijn een kleine familiegarage uitgebaat door vader en zoon.
            </p>
            <div>
                <Img fluid={data.vantilt.sharp.fluid} />
            </div>
        </>
    )
}

export default WieZijnWij;