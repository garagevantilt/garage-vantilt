import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import StockItem from "./stock-item"
import Button from "../helpers/button"
import device from "../helpers/breakpoints"

const Stock = () => {
  const data = useStaticQuery(graphql`
    query {
      allStock(sort: { fields: price }) {
        nodes {
          makeModel
          price
          km
          firstRegistration
          motor
          transmission
          fuel
          state
          owners
          consumption
          co2
          link
          picture
          tag
        }
      }
      images: allFile(
        filter: {
          absolutePath: { regex: "/stock/" }
          extension: { regex: "/jpg|jpeg|png/" }
        }
      ) {
        nodes {
          name
          extension
          sharp: childImageSharp {
            fluid(maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <span className="anchor" id="stock">
        Stock
      </span>
      <h2>Stock</h2>
      <p>
        Tweedehandswagens worden afgeleverd met keuring, car pass, 1 jaar
        garantie en onderhoudsbeurt. Wij hebben steeds een beperkte voorraad aan
        wagens beschikbaar voor ieders budget.
      </p>
      <div
        css={css`
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 2rem;

          @media ${device.desktop} {
            justify-content: space-between;
          }
        `}
      >
        {data.allStock.nodes.map((stock) => {
            const image = data.images.nodes.filter(image => image.name === stock.picture.slice(0, -4))[0];
            return <StockItem item={stock} image={image} />
        })}
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
          background-color: #16446c;
          margin: 0 auto;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-bottom: 3.5rem;
          padding-top: 3.5rem;
        `}
      >
        <div
          css={css`
            margin: 0 auto;
            max-width: 1280px;
            padding-left: 2rem;
            padding-right: 2rem;
            display: flex;
            justify-content: center;
          `}
        >
          <Button link="//www.autoscout24.be/nl/verkopers/garage-vantilt/occasions?ipc=dealerinfo-home%7Cstocklist&ipl=offer-all#atype=C&cid=16879215&ustate=U,N,A&sort=price&results=20&page=1" text="Meer auto's" />
        </div>
      </div>
    </div>
  )
}

export default Stock
