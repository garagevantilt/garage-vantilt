import React from "react"
import { css } from "@emotion/core"

const Button = ({link, text}) => {
    return (
        <a href={link} css={css`
            background-color: #466071;
            color: #FFF;
            border-radius: 10px;
            border: 2px solid #FFF;
            padding: .5rem;
            text-decoration: none;
            text-transform: lowercase;
            font-size: .8rem;
            transition: all 0.5s ease-in-out;

            &:hover {
                background-color: #FFF;
                color: #466071;
            }

        `}>{text}</a>
    )
}

export default Button;
