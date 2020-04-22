import React from "react"
import { css } from "@emotion/core"

const Service = () => {
    return (
        <div css={css`
            background-color: #fff;
            margin: 0 auto;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            border-top: 1px solid #e0e0e0;
        `}>
            <div css={css`
                margin: 0 auto;
                max-width: 1280px;
                padding-left: 2rem;
                padding-right: 2rem;
            `}>
                <span className="anchor" id="service">Service</span>
                <h2>Service</h2>
                <p>
                    Wij trachten voor onze klanten steeds een oplossing op maat te vinden. Hierbij bouwen we verder op onze jarenlange ervaring en ons uitgebreide netwerk. Wij proberen onze klanten steeds de hoogste service te bieden tegen de best mogelijke prijs. U kan bij ons ondermeer terecht voor onderhoud, herstellingen, banden, batterijen, diagnose, kleine onderdelen of voor vrijblijvend advies.
                </p>
            </div>
        </div>
    )
}

export default Service;
