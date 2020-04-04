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
                padding-top: 0.1rem;
                padding-bottom: 0.1rem;
            `}>
                <h2>Service</h2>
                <p>
                    Door onze ervaring en uitgebreid netwerk kunnen we onze klanten steeds een oplossing op maat bieden. Wij bieden onze klanten steeds de hoogste service tegen de beste prijs. U kan bij ons ondermeer terecht voor onderhoud, herstellingen, banden, batterijen, diagnose, kleine onderdelen of voor vrijblijvend advies.
                </p>
            </div>
        </div>
    )
}

export default Service;