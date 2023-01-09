import React from "react"
import { css } from "@emotion/core"
import StockItem from "./stock-item"
import Button from "../helpers/button"
import device from "../helpers/breakpoints"
import useGoCar from "../hooks/use-gocar"
import useGoCarFuels from "../hooks/use-gocar-fuels"
import useGoCarGearbox from "../hooks/use-gocar-gearbox"

const Stock = () => {
  const fuels = useGoCarFuels();
  const gearbox = useGoCarGearbox();
  let cars = useGoCar(fuels, gearbox);

  function compare( a, b ) {
    if ( a.price < b.price ){
      return -1;
    }
    if ( a.price > b.price ){
      return 1;
    }
    return 0;
  }

  cars = cars.sort(compare);

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
        Onze tweedehandswagens worden steeds gekeurd afgeleverd met één jaar garantie, carpass, onderhoudsbeurt en een checklist van meer dan 110 punten. Wij hebben steeds een beperkte stock voor ieders budget ter beschikking. Niet gevonden wat u zoekt? Kom even langs of bel ons dan gaan wij voor u op zoek naar de geschikte wagen.
      </p>
      <div
        css={css`
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 2rem;

          @media ${device.desktop} {
            justify-content: left;
          }
        `}
      >
        {cars.map((car, index) => {
          return <StockItem item={car} key={index} />
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
          background-color: #466071;
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
          <Button link="//gocar.be/nl/dealer/3830-wellen/garage-vantilt-bvba_1-25443-1154871" text="Meer auto's" />
        </div>
      </div>
    </div>
  )
}

export default Stock
