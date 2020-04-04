import React from "react"
import { css } from "@emotion/core"
import { Gallery } from "gatsby-theme-gallery"

const Carousel = () => {
    return (
        <div css={css`
            margin: 0 auto;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            padding-bottom: 3.5rem;
            padding-top: 3.5rem;
        `}>
            <div css={css`
                margin: 0 auto;
                max-width: 1280px;
                padding-left: 2rem;
                padding-right: 2rem;
            `}>
                <h2>Gallerij</h2>
                <Gallery />
            </div>
        </div>
    );
}

export default Carousel;