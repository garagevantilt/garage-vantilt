import React from "react"
import { Global, css } from "@emotion/core"
import device from "../helpers/breakpoints"
import Hero from "./hero"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
      
        * + * {
          margin-top: 1rem;
        }
      
        html, body {
          margin: 0;
          color: #1a261f;
          background-color: #f9f9fb;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.4;
          letter-spacing: 0.07rem;
          overflow-x: hidden;
      
          @media ${device.laptop} {
              font-size: 1.1rem;
              line-height: 1.5;
          }
      
          /* remove margin for main div where Gatsby mounts into */
      
          > div {
              margin-top: 0;
          }
      
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              color: #16446C;
              line-height: 1.1;
              text-align: center;
              margin-top: 3.5rem;
      
              + * {
                  margin-top: 1.5rem;
              }
          }
      
          strong {
              color: #16446C;
          }
        }
      `}/>
      <Hero />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1280,
          paddingLeft: `2rem`,
          paddingRight: `2rem`
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
