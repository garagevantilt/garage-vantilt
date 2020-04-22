import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import device from "../helpers/breakpoints"


const WieZijnWij = () => {
    const data = useStaticQuery(graphql`
        query {
            vantilt: file(relativePath: { eq: "pa.jpg" }) {
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
                Wij zijn een klein familiebedrijf met al meer dan 25 jaar ervaring met het onderhoud, herstellen en verkopen van voertuigen. Wij werken elke dag met veel passie om de wagens van onze klanten in topconditie te houden. Daarnaast hebben wij steeds een beperkte stock aan occasies voor onze klanten klaar staan en dit in iedere prijsklasse. Vindt u in onze stock niet wat u zoekt? Dan mag u als klant ons steeds contacteren en gaan wij voor u op zoek naar de wagen die het best bij u past.
            </p>
            <div css={css`
                padding-top: 1.5rem;
                padding-bottom: 2.5rem;

                @media ${device.tablet} {
                    padding-top: 3.5rem;
                    padding-bottom: 3.5rem;
                }
            `}>
                <Img fluid={data.vantilt.sharp.fluid} />
            </div>
        </>
    )
}

export default WieZijnWij;
