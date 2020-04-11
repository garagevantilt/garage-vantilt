import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import car from "../images/car.svg"

const StockItem = () => {
    const data = useStaticQuery(graphql`
        query {
            car: file(relativePath: { eq: "car.png" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 320) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <div css={css`
                display: flex;
                flex-direction: column;
                border: 1px solid #e0e0e0;
            `}>
                <div css={css`
                    margin: 0 auto;
                    flex: 1;
                    background-color: #fff;
                    border-bottom: 1px solid #e0e0e0;
                    width: 100%;
                    padding: 1rem;
                `}>
                    <img src={car} alt="" />
                </div>
                <div css={css`
                        flex: 1;
                        margin: 0 auto;
                        padding: 1.5rem;

                        ul {
                            list-style: none;
                        }

                        ul li {
                            position: relative;
                            left: -2.5rem;
                        }

                        ul li:before {
                            content: '✓ ';
                        }
                `}>
                    <strong>Standaard op de A1 Sportback</strong>
                    <ul>
                        <li>15 inch lichtmetalen velgen</li>
                        <li>Smartphone interface</li>
                        <li>MMI radio plus</li>
                        <li>USB aansluiting</li>
                        <li>Elektrisch bedienbare ramen</li>
                    </ul>
                </div>
                <div css={css`
                    flex: 1;
                    margin: 0 auto;
                    padding: 1.5rem;
                    background-color: #fff;
                    border-top: 1px solid #e0e0e0;
                    width: 100%;
                `}>
                    <button>Meer weten</button>
                </div>
            </div>
        </>
    )
}

export default StockItem;