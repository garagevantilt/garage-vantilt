import React from "react"
import { css } from "@emotion/core"

const InverseButton = ({link, text}) => {
    return (
        <a href={link} css={css`
            background-color: #FFF;
            color: #FE8813;
            border-radius: 10px;
            border: 2px solid #FE8813;
            padding: .5rem;
            text-decoration: none;
            text-transform: lowercase;
            font-size: .8rem;
            transition: all 0.5s ease-in-out;

            &:hover {
                background-color: #FE8813;
                color: #FFF;
            }

        `}>{text}</a>
    )
}

export default InverseButton;
