import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faCalendarAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import map from "../images/contact_map.png"
import device from "../helpers/breakpoints"

const Contact = () => {

  const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo_cp.png" }) {
                sharp: childImageSharp {
                    fixed(height: 65) {
                        src
                    }
                }
            }
        }
    `)

  const isActive = (type) => {
    const now = Date.now();
    const currentDay = new Date(now).getDay();

    const isWorkday = currentDay === 1 || currentDay === 2 || currentDay === 3 || currentDay === 4;
    const isAppointment = currentDay === 5 || currentDay === 6;
    const isClosed = currentDay === 0;

    if (type === "isWorkday") {
      return isWorkday;
    }

    if (type === "isAppointment") {
      return isAppointment;
    }

    if (type === "isClosed") {
      return isClosed;
    }
  }

  const DayBox = styled.div`
    flex-basis: 30%;
    border: 1px solid #e0e0e0;
    min-width: 150px;
    min-height: 150px;
    overflow: hidden;
    text-align: center;
    margin: 1rem;
    margin-bottom: 3.5rem;
    padding: 1.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.85);

    h4 {
      margin-top: 0;
    }

    &.active {
      border: 5px solid #e0e0e0;
      font-weight: bold;
      transform: scale(1.1);
    }

    &.active span {
      font-weight: normal;
    }
  `

  const StyledLink = styled.a`
    text-transform: lowercase;
    text-decoration: none;
    color: #466071;
    font-weight: bold;
    position: relative;

    &:hover {
      text-decoration: none;
      color: #FE8813;
    }

    &::after {
      border-radius: 1em;
      border-top: 2px solid #FE8813;
      content: "";
      position: absolute;
      right: 100%;
      left: 0;
      bottom: 0.01rem;
      transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
    }

    &:hover::after {
      right: 0;
    }
  `

  return (
    <>
      <span className="anchor" id="contact">
        Contact
      </span>
      <h2>Contact</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          text-align: left;
        `}
      >
        <div>
          <p>
            <StyledLink href="https://vantilt.wacs.online/afspraak#" css={css`
              text-transform: none
              `}>
              Maak via deze link online een afspraak voor een onderhoudsbeurt of herstelling
            </StyledLink>
          </p>
        </div>
        <div>
          <p css={css`
              margin-top: 1.5rem;
            `}>
            Voor vragen of info over onze services of tweedehandswagens kan u ons altijd contacteren
          </p>
          <p css={css`
              margin-top: 1.5rem;
            `}>
            U kan ons ook volgen op&nbsp;
            <StyledLink href="https://www.facebook.com/garagevantilt" css={css`
                text-transform: none
              `}>facebook
              </StyledLink>
              <StyledLink href="https://www.facebook.com/garagevantilt" css={css`
                text-transform: none
              `}>&nbsp;<FontAwesomeIcon icon={faFacebook} />
              </StyledLink> en&nbsp;
              <StyledLink href="https://instagram.com/garagevantilt?igshid=YmMyMTA2M2Y=" css={css`
                text-transform: none
              `}>Instagram
              </StyledLink>
              <StyledLink href="https://instagram.com/garagevantilt?igshid=YmMyMTA2M2Y=" css={css`
                text-transform: none
              `}>&nbsp;<FontAwesomeIcon icon={faInstagram} />
              </StyledLink>
          </p>
          <div
            css={css`
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            <div css={css`
                flex-basis: 40%;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <div
                  css={css`
                    flex-basis: 100%;
                    display: flex;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                  `}
                >
                  <div
                    css={css`
                      flex-basis: 100%;
                      text-align: center;
                      margin-right: 1rem;

                      @media ${device.tablet} {
                        flex-basis: 5%;
                      }
                    `}
                  >
                  </div>
                  <div
                    css={css`
                      flex-basis: 100%;
                      text-align: center;

                      @media ${device.tablet} {
                        flex-basis: auto;
                      }
                    `}
                  >
                    <p
                      css={css`
                        @media ${device.tablet} {
                          text-align: left;
                        }
                      `}
                    >
                      <img src={data.logo.sharp.fixed.src} alt="Garage Vantilt." />
                      <br />
                      Garage Vantilt
                      <br />
                      Kolmenstraat 1318
                      <br />
                      3570 Alken
                    </p>
                  </div>
                </div>
                <div
                  css={css`
                    flex-basis: 100%;
                    display: flex;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                  `}
                >
                  <div
                    css={css`
                        flex-basis: 100%;
                        text-align: center;
                        margin-right: 1rem;

                        @media ${device.tablet} {
                            flex-basis: 5%;
                        }
                    `}
                  >
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </div>
                  <div
                    css={css`
                      flex-basis: 100%;
                      text-align: center;

                      @media ${device.tablet} {
                        flex-basis: auto;
                      }
                    `}
                  >
                    <p
                      css={css`
                        text-align: center;

                        @media ${device.tablet} {
                          text-align: left;
                        }
                      `}
                    >
                      0499/14 93 97
                    </p>
                  </div>
                </div>
                <div
                  css={css`
                    flex-basis: 100%;
                    display: flex;
                    margin-bottom: 1rem;
                    flex-wrap: wrap;
                  `}
                >
                  <div
                    css={css`
                        flex-basis: 100%;
                        text-align: center;
                        margin-right: 1rem;

                        @media ${device.tablet} {
                            flex-basis: 5%;
                        }
                    `}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div
                    css={css`
                      flex-basis: 100%;
                      text-align: center;

                      @media ${device.tablet} {
                        flex-basis: auto;
                      }
                    `}
                  >
                    <p
                      css={css`
                        text-align: center;

                        @media ${device.tablet} {
                          text-align: left;
                        }
                      `}
                    >
                      <StyledLink href="mailto:info@garagevantilt.be">
                        info@garagevantilt.be
                      </StyledLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div css={css`
                flex-basis: 60%;
                border: 1px solid #e0e0e0;
                margin-top: 2.5rem;
              `}
            >
              <a href="https://www.google.be/maps/place/Kolmenstraat+1318,+3570+Alken,+België/@50.8891963,5.300293,17z/data=!3m1!4b1!4m5!3m4!1s0x47c118a1b15caf59:0x51029c645c8a5b27!8m2!3d50.8891963!4d5.3024817">
                <img src={map} alt="Locatie op de kaart." width="100%" />
              </a>
            </div>
          </div>
        </div>
        <div
          css={css`
            margin-top: 1.5rem;
          `}
        >
          &nbsp;
        </div>
        <div
          css={css`
            background-color: #466071;
            color: #fff;
            margin: 0 auto;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
          `}
        >
          <div
            css={css`
              margin: 0 auto;
              max-width: 1280px;
              padding-left: 2rem;
              padding-right: 2rem;
            `}
          >
            <h3
              css={css`
                color: #fff;
              `}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> Openingstijden
            </h3>
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
              `}
            >
              <DayBox className={isActive("isWorkday") ? "active" : ""}>
                <h4
                  css={css`
                    color: #fff;
                  `}
                >
                  Maandag tot vrijdag
                </h4>
                <span>08u00 - 12u00</span>
                <span>13u00 - 18u00</span>
              </DayBox>
              <DayBox className={isActive("isAppointment") ? "active" : ""}>
                <h4
                  css={css`
                    color: #fff;
                  `}
                >
                  zaterdag
                </h4>
                <span>Op afspraak</span>
              </DayBox>
              <DayBox className={isActive("isClosed") ? "active" : ""}>
                <h4
                  css={css`
                    color: #fff;
                  `}
                >
                  Zondag
                </h4>
                <span>Gesloten</span>
              </DayBox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
