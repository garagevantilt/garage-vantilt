import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import car from "../images/car.svg"
import InverseButton from "../helpers/inverse-button"
import device from "../helpers/breakpoints"

const StockItem = ({hasBadge, text, item, image}) => {
    let badgeText = "";
    let visibility = false;

    if (!!hasBadge) {
        badgeText = text.toUpperCase();
        visibility = "visible";
    }
    else {
        visibility = "hidden";
    }

    const formatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
    })

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
                <Img fluid={image.sharp.fluid} alt="" width="100%"/>
            </div>
            <div css={css`
                    flex: 1;
                    margin: 0 auto;
                    padding: 1rem;
                    ul {
                        list-style: none;
                    }

                    ul li {
                        position: relative;
                        left: -1.5rem;
                    }

                    ul li:before {
                        content: '✓ ';
                    }
            `}>
                <strong>{item.makeModel}</strong>
                <ul>
                    <li>
                        {formatter.format(item.price)}
                    </li>
                    <li>{item.km}</li>
                    <li>{item.firstRegistration}</li>
                    <li>{item.motor}</li>
                    <li>{item.transmission}, {item.fuel.toLowerCase()}</li>
                    <li>{item.owners}</li>
                    <li>{item.consumption}</li>
                    <li>{item.co2}</li>
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
                <InverseButton link={item.link} text="Meer weten" />
            </div>
        </div>
    )
}

export default StockItem;
