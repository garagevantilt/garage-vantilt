import React from "react"
import { Global, css } from "@emotion/core"
import device from "../helpers/breakpoints"
import Hero from "./hero"
import fegarbel from "../images/fegarbel.png"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html, body {
          margin: 0;
          color: #1a261f;
          background-color: #fff;
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
              color: #466071;
              line-height: 1.1;
              text-align: center;
              margin-top: 3.5rem;
              text-transform: uppercase;

              + * {
                  margin-top: 1.5rem;
              }
          }

          .anchor {
            display: block;
            position: relative;
            top: -50px;
            visibility: hidden;
          }

          strong {
              color: #466071;
          }

          p {
            text-align: center;
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
        <footer style={{
          textAlign: `center`,
          color: `#ababab`
        }}>
          <p style={{ padding: `1rem`}}>Lid van Fegarbel</p>
          <img src={fegarbel} alt="Lid van Fegarbel" height="50%" style={{ paddingBottom: `1rem`}}/>
        </footer>
      </div>
    </>
  )
}

export default Layout
