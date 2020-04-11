import React from "react"
import styled from "@emotion/styled"
import Flicking from "@egjs/react-flicking"
import { Fade, AutoPlay } from "@egjs/flicking-plugins"

import Checkmark from "./checkmark"

const USP = () => {
    const Container = styled(Flicking)`
        background-color: #fafafa;
        color: #ababab;
        margin: 0 auto;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        height: 75px;
        box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const Item = styled.div`
        display: block;
        margin: 0 auto;
        width: 320px;
        padding-top: 1.25rem;
        text-align: center;
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