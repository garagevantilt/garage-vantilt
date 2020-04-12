import React from "react"
import { css } from "@emotion/core"
import car from "../images/car.svg"
import InverseButton from "../helpers/inverse-button"
import device from "../helpers/breakpoints"

const StockItem = ({hasBadge, text}) => {
    let badgeText = "";
    let visibility = false;

    if (!!hasBadge) {
        badgeText = text.toUpperCase();
        visibility = "visible";
    }
    else {
        visibility = "hidden";
    }

    return (
        <div css={css`
            margin: 0 auto;
            margin-bottom: 2rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            flex: 0 1 calc(33% - 1rem);
            display: flex;
            flex-direction: column;
            border: 1px solid #e0e0e0;
            min-width: 320px;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.05);
            }
        `}>
            <div css={css`
                margin: 0 auto;
                flex: 1;
                background-color: #fff;
                border-bottom: 1px solid #e0e0e0;
                width: 100%;
                padding: 1rem;
                position: relative;

                &::before {
                    content: '${badgeText}';
                    color: #16446C;
                    font-weight: bold;
                    left: -22px;
                    position: absolute;
                    top: 25px;
                    height: 24px;
                    min-width: 120px;
                    width: auto;
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                    transform: rotate(-40deg);
                    background-color: #ababab;
                    opacity: 0.7;
                    text-align: center;
                    visibility: ${visibility};

                    @media ${device.laptop} {
                        padding-bottom: 0.3rem;
                    }
                }
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
                display: flex;
                justify-content: center;
            `}>
                <InverseButton link="//www.autoscout24.be/" text="Meer weten" />
            </div>
        </div>
    )
}

export default StockItem;
