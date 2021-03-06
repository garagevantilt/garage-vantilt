import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Navigatie = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                sharp: childImageSharp {
                    fixed(height: 35) {
                        src
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
        position: relative;

        &:hover {
            text-decoration: none;
        }

        &::after {
            border-radius: 1em;
            border-top: 2px solid #16446C;
            content: "";
            position: absolute;
            right: 100%;
            left: 0;
            bottom: 0.01rem;
            transition: right 0.4s cubic-bezier(0, .5, 0, 1);
        }

        &:hover::after {
            right: 0;
        }
    `;

    const LinkWrapper = styled.ul`
        position: relative;
        right: -1rem;
        top: -0.5rem;
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

    const LogoWrapper = styled.div`
        position: relative;
        left: -1.0rem;
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
            padding: 1rem 2rem;
            z-index: 2001;
            box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
        `}>
            <LogoWrapper>
                <Link href="/">
                    <img src={data.logo.sharp.fixed.src} alt="Garage Vantilt." />
                </Link>
            </LogoWrapper>
            <LinkWrapper>
                <li><Link href="#service">Service</Link></li>
                <li><Link href="#stock">Stock</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </LinkWrapper>
        </div>
    )
}

export default Navigatie;
