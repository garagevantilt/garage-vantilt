import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const DayBox = styled.div`
    border: 1px solid #e0e0e0;
    min-width: 150px;
    min-height: 150px;
    overflow: hidden;
    text-align: center;
    margin: 1rem;
    padding: 0.3rem;
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
            Voor vragen of info over onze diensten of onze wagens kan u ons
            steeds contacteren.
          </p>
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
              `}
            >
              <div
                css={css`
                  flex-basis: 20%;
                `}
              >
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div>
                <p
                  css={css`
                    text-align: left;
                  `}
                >
                  Garage Vantilt
                  <br />
                  Plattestraat 46
                  <br />
                  3830 Wellen
                </p>
              </div>
            </div>
            <div
              css={css`
                flex-basis: 100%;
                display: flex;
              `}
            >
              <div
                css={css`
                  flex-basis: 20%;
                `}
              >
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <div>
                <p
                  css={css`
                    text-align: left;
                  `}
                >
                  0495/53 05 18
                </p>
              </div>
            </div>
            <div
              css={css`
                flex-basis: 100%;
                display: flex;
              `}
            >
              <div
                css={css`
                  flex-basis: 20%;
                `}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p
                  css={css`
                    text-align: left;
                  `}
                >
                  garagevantilt@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            background-color: #16446c;
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
              `}
            >
              <DayBox>
                <h4 css={css`color: #FFF;`}>Maandag</h4>
                08u00 - 12u00
                <br />
                13u00 - 19u00
              </DayBox>
              <DayBox>
                <h4 css={css`color: #FFF;`}>Dinsdag</h4>
                08u00 - 12u00
                <br />
                13u00 - 19u00
              </DayBox>
              <DayBox>
                <h4 css={css`color: #FFF;`}>Woensdag</h4>
                08u00 - 12u00
                <br />
                13u00 - 19u00
              </DayBox>
              <DayBox>
                <h4 css={css`color: #FFF;`}>Donderdag</h4>
                08u00 - 12u00
                <br />
                13u00 - 19u00
              </DayBox>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: space-around;
              `}
            >
              <DayBox>
                <h4 css={css`color: #FFF;`}>Vrijdag</h4>
                Op afspraak
              </DayBox>
              <DayBox>
                <h4 css={css`color: #FFF;`}>Zaterdag</h4>
                Op afspraak
              </DayBox>
              <DayBox>
                <h4 css={css`color: #FFF;`}>Zondag</h4>
                Gesloten
              </DayBox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
