import React from "react"
import { css } from "@emotion/core"
import car from "../images/car.svg"

const StockItem = () => {
    return (
        <div css={css`
            margin: 0 auto;
            margin-bottom: 2rem;
            flex: 0 1 calc(33% - 1rem);
            display: flex;
            flex-direction: column;
            border: 1px solid #e0e0e0;
            min-width: 320px;
        `}>
            <div css={css`
                margin: 0 auto;
                flex: 1;
                background-color: #fff;
                border-bottom: 1px solid #e0e0e0;
                width: 100%;
                padding: 1rem;
            `}>
                <img src={car} alt="" width="100%"/>
            </div>
            <div css={css`
                    flex: 1;
                    margin: 0 auto;
                    padding: 1.5rem;

                    ul {
                        list-style: none;
                    }

                    ul li {
                        position: relative;
                        left: -4.5rem;
                    }

                    ul li:before {
                        content: '✓ ';
                    }
            `}>
                <strong css={css`
                    position: relative;
                    left: -2.5rem;
                `}>Audi A1 Sportback</strong>
                <ul>
                    <li>3000 EUR</li>
                </ul>
            </div>
            <div css={css`
                flex: 1;
                margin: 0 auto;
                padding: 1.5rem;
                background-color: #fff;
                border-top: 1px solid #e0e0e0;
                width: 100%;
            `}>
                <button>Meer weten</button>
            </div>
        </div>
    )
}

export default StockItem;
