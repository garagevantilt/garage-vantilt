import React from "react"
import { css } from "@emotion/core"

const InverseButton = ({link, text}) => {
    return (
        <a href={link} css={css`
            background-color: #FFF;
            color: #16446C;
            border-radius: 10px;
            border: 2px solid #16446C;
            padding: .5rem;
            text-decoration: none;
            text-transform: lowercase;
            font-size: .8rem;
            transition: all 0.5s ease-in-out;

            &:hover {
                background-color: #16446C;
                color: #FFF;
            }

        `}>{text}</a>
    )
}

export default InverseButton;
