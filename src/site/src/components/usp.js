import React from "react"
import styled from "@emotion/styled"

import Checkmark from "./checkmark"

const USP = () => {
    const Container = styled.ul`
        background-color: #fafafa;
        color: #ababab;
        font-weight: bold;
        margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;

        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        
        height: 75px;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    `;

    const Item = styled.li`
        display: inline;
        margin: 0 auto;
    `;

    return (
        <>
            <Container>
                <Item><Checkmark /> Ruim 25 jaar ervaring</Item>
                <Item><Checkmark /> Onderhoud</Item>
                <Item><Checkmark /> Herstellingen</Item>
                <Item><Checkmark /> Verkoop</Item>
            </Container>
        </>
    )
}

export default USP;