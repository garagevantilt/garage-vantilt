import React from "react"
import styled from "@emotion/styled"
import Flicking from "@egjs/react-flicking"
import { Fade, AutoPlay } from "@egjs/flicking-plugins"

import Checkmark from "./checkmark"
import device from "../helpers/breakpoints"

const USP = () => {
    const Container = styled(Flicking)`
        background-color: #fafafa;
        color: #ababab;
        margin: 0 auto;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        height: 75px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #e0e0e0;
    `;

    const Item = styled.div`
        display: block;
        margin: 0 auto;
        width: 320px;
        padding-top: 1.70rem;
        text-align: center;

        @media ${device.tablet} {
            padding-top: 1.25rem;
        }
    `;

    return (
        <>
            <Container className="flicking" gap={1280} circular={true} autoResize={true} horizontal={true}
                plugins={[new Fade(), new AutoPlay(2000, "NEXT")]}>
                <Item className="panel"><Checkmark /> Ruim 25 jaar ervaring</Item>
                <Item className="panel"><Checkmark /> Onderhoud</Item>
                <Item className="panel"><Checkmark /> Herstellingen</Item>
                <Item className="panel"><Checkmark /> Verkoop</Item>
            </Container>
        </>
    )
}

export default USP;
