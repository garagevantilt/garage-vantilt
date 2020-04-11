import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Navigatie = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                sharp: childImageSharp {
                    fluid(maxWidth: 117) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const Link = styled.a`
        text-transform: uppercase;
        text-decoration: none;
        color: #16446C;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    `;

    const LinkWrapper = styled.ul`
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
        width: 100%;
        max-width: 310px;
        padding: 0;
        padding-left: 0.7rem;
        list-style: none;
    `;

    return (
        <div css={css`
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            margin: 0 auto;
            width: 100%;
            background-color: #fafafa;
            display: flex;
            justify-content: space-between;
            text-align: right;
            padding: 1.5rem 2rem;
            z-index: 2001;
            box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
        `}>
            <Img fluid={data.logo.sharp.fluid} alt="Logo." width="117px" />
            <LinkWrapper>
                <li><Link href="#service">Service</Link></li>
                <li><Link href="#stock">Stock</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </LinkWrapper>
        </div>
    )
}

export default Navigatie;
