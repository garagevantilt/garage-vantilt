import React from "react"
import { css } from "@emotion/core"

import band from "../images/band_small.png"
import diagnose from "../images/diagnose_small.png"
import onderhoud from "../images/onderhoud_small.png"

import device from "../helpers/breakpoints"

const ServiceLogos = () => {
    return (
        <div css={css`
            background-color: #fff;
            margin: 0 auto;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            border-bottom: 1px solid #e0e0e0;
        `}>
            <div css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: flex-end;
                margin: 0 auto;
                max-width: 1280px;
                padding-left: 2rem;
                padding-right: 2rem;
                padding-top: 2.5rem;
                padding-bottom: 3.5rem;
            `}>
                <div css={css`
                    flex-basis: 30%;
                    flex: 1;
                    margin: 0 auto;
                    min-width: 250px;

                    &:hover {
                        transform: scale(1.05);
                    }

                    @media ${device.tablet} {
                        padding-top: 0rem;
                    }
                `}>
                    <img src={band} alt="Banden." css={css`
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    `} />
                    <h3 css={css`margin-top: 2rem; text-transform: uppercase;`}>Banden</h3>
                </div>
                <div css={css`
                    flex-basis: 30%;
                    flex: 1;
                    margin: 0 auto;
                    min-width: 250px;
                    padding-top: 2.5rem;

                    &:hover {
                        transform: scale(1.05);
                    }

                    @media ${device.tablet} {
                        padding-top: 0rem;
                    }
                `}>
                    <img src={diagnose} alt="Diagnose." css={css`
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    `} />
                    <h3 css={css`margin-top: 0.5rem; text-transform: uppercase;`}>Diagnose</h3>
                </div>
                <div css={css`
                    flex-basis: 30%;
                    flex: 1;
                    margin: 0 auto;
                    min-width: 250px;
                    padding-top: 2.5rem;

                    &:hover {
                        transform: scale(1.05);
                    }

                    @media ${device.tablet} {
                        padding-top: 0rem;
                    }
                `}>
                    <img src={onderhoud} alt="Onderhouden." css={css`
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    `} />
                    <h3 css={css`margin-top: 1.5rem; text-transform: uppercase;`}>Onderhoud</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceLogos;
