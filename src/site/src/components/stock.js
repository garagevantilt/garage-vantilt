import React from "react"
import { css } from "@emotion/core"
import StockItem from "./stock-item"
import Button from "../helpers/button"
import device from "../helpers/breakpoints"

const Stock = () => {
    return (
        <div css={css`
            margin: 0 auto;
        `}>
            <span className="anchor" id="stock">Stock</span>
            <h2>Stock</h2>
            <p>Tweedehandswagens worden afgeleverd met keuring, car pass, 1 jaar garantie en onderhoudsbeurt. Wij hebben steeds een beperkte voorraad aan wagens beschikbaar voor ieders budget.</p>
            <div css={css`
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding-top: 2rem;

                @media ${device.desktop} {
                    justify-content: space-between;
                }
            `}>
                <StockItem hasBadge={true} text="nieuw" />
                <StockItem />
                <StockItem hasBadge={true} text="topoccasie" />
                <StockItem />
                <StockItem hasBadge={true} text="verkocht" />
            </div>
            <div css={css`
                margin-top: 1.5rem;
            `}>&nbsp;</div>
            <div css={css`
                background-color: #16446C;
                margin: 0 auto;
                margin-left: calc(50% - 50vw);
                margin-right: calc(50% - 50vw);
                padding-bottom: 3.5rem;
                padding-top: 3.5rem;
            `}>
                <div css={css`
                    margin: 0 auto;
                    max-width: 1280px;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    justify-content: center;
                `}>
                    <Button link="//www.autoscout24.be/" text="Meer auto's" />
                </div>
            </div>
        </div>
    )
}

export default Stock;
