import React from "react"
import { css } from "@emotion/core"

const InverseButton = ({link, text}) => {
    return (
        <a href={link} css={css`
            background-color: #FFF;
            color: #466071;
            border-radius: 10px;
            border: 2px solid #466071;
            padding: .5rem;
            text-decoration: none;
            text-transform: lowercase;
            font-size: .8rem;
            transition: all 0.5s ease-in-out;

            &:hover {
                background-color: #466071;
                color: #FFF;
            }

        `}>{text}</a>
    )
}

export default InverseButton;
