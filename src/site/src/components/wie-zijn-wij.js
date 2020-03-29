import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"


const WieZijnWij = () => {
    const data = useStaticQuery(graphql`
        query {
            vantilt: file(relativePath: { eq: "vantilt.jpg" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1440) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <h2>Garage Vantilt</h2>
            <p>
                Bij Garage Vantilt hebben we al meer dan 25 jaar ervaring in het onderhouden, herstellen en verkopen van voertuigen. Wij zijn een kleine familiegarage uitgebaat door vader en zoon.
            </p>
            <div css={css`
                // margin-left: calc(50% - 50vw);
                // margin-right: calc(50% - 50vw);
            `}>
                <Img fluid={data.vantilt.sharp.fluid} />
            </div>
        </>
    )
}

export default WieZijnWij;