import React from "react"
import { css } from "@emotion/core"
import StockItem from "./stock-item"

const Stock = () => {
    return (
        <>
            <h2>Stock</h2>
            <p>Tweedehandswagens worden afgeleverd met keuring, car pass, 1 jaar garantie en onderhoudsbeurt. Wij hebben steeds een beperkte voorraad aan wagens beschikbaar voor ieders budget.</p>
            <StockItem />
            <StockItem />
            <StockItem />
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
                `}>
                    <button>Meer auto's</button>
                </div>
            </div>
        </>
    )
}

export default Stock;