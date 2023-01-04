import React from "react"
import { css } from "@emotion/core"
import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import InverseButton from "../helpers/inverse-button"
import device from "../helpers/breakpoints"

const StockItem = ({ hasBadge, text, item }) => {
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
    });

    const kmFormatter = new Intl.NumberFormat('nl-NL', {
        minimumFractionDigits: 0
    });

    function parseDate(str, format, locale) {
        return dateFnsParse(str, format, new Date(), { locale });

    }

    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
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
                    color: #466071;
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
                <img src={item.image} alt="" width="100%" />

            </div>
            <div css={css`
                    flex: 1;
                    margin: 0 auto;
                    padding: 1rem;
                    min-height: 300px;
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
                        {`${item.version}`}
                    </li>
                    <li>
                        {formatter.format(item.price)}
                    </li>
                    <li>{kmFormatter.format(item.km)} km</li>
                    <li>{formatDate(parseDate(item.firstRegistration, "yyyy-MM-dd", "nl-NL"), "yyyy-MM")}</li>
                    <li>{item.motor}</li>
                    {item.fuel && item.gearbox && <li>{item.fuel}, {item.gearbox.toLowerCase()}</li>}
                    <li>{item.co2}g CO2/km (comb.)</li>
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
