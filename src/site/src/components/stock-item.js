import React from "react"
import { css } from "@emotion/core"

const StockItem = () => {
    return (
        <>
            <div css={css`
                display: flex;
                flex-direction: column;
                border: 1px solid #e0e0e0;
            `}>
                <div css={css`
                    display: flex;
                    background-color: #fff;
                    border-bottom: 1px solid #e0e0e0;
                    width: 100%;
                `}>
                    <div css={css`
                        flex-basis: 20%;
                        padding-bottom: 1.5rem;
                        padding-top: 1.5rem;
                        padding-left: 1.5rem;
                    `}>
                        <span>[FOTO]</span>
                    </div>
                    <div css={css`
                        padding-bottom: 1.5rem;
                        padding-top: 1.5rem;
                    `}>
                        <ul>
                            <li>[MERK][MODEL]</li>
                            <li>[MOTORISATIE]</li>
                            <li>[PRIJS]</li>
                        </ul>
                    </div>
                </div>
                <div css={css`
                    display: flex;
                    margin: 0 auto;
                    width: 100%;
                    align-items: flex-start;
                `}>
                    <div css={css`
                        flex-basis: 30%;
                        border-right: 1px solid #e0e0e0;
                        margin: 0 auto;
                        padding-right: 2rem;
                        padding-bottom: 1.5rem;
                        padding-top: 1.5rem;
                    `}>
                        <span>[Specificaties]</span>
                        <div>
                            <div css={css`
                                display: flex;
                                align-items: baseline;
                            `}>
                                <div css={css`flex-basis: 50%;`}>MOTOR</div>
                                <div css={css`flex-basis: 50%;`}>[2.0 TFSI]</div>
                            </div>
                            <div css={css`
                                display: flex;
                                align-items: baseline;
                            `}>
                                <div css={css`flex-basis: 50%;`}>TRANSMISSIE</div>
                                <div css={css`flex-basis: 50%;`}>[Handgeschakeld]</div>
                            </div>
                            <div css={css`
                                display: flex;
                                align-items: baseline;
                            `}>
                                <div css={css`flex-basis: 50%;`}>BRANDSTOF</div>
                                <div css={css`flex-basis: 50%;`}>[Benzine]</div>
                            </div>
                            <div css={css`
                                display: flex;
                                align-items: baseline;
                            `}>
                                <div css={css`flex-basis: 50%;`}>UITSTOOT</div>
                                <div css={css`flex-basis: 50%;`}>[107 gram/km]</div>
                            </div>
                            <div css={css`
                                display: flex;
                                align-items: baseline;
                            `}>
                                <div css={css`flex-basis: 50%;`}>AANTAL PK</div>
                                <div css={css`flex-basis: 50%;`}>[165PK]</div>
                            </div>
                        </div>
                    </div>
                    <div css={css`
                        margin: 0 auto;
                        padding-bottom: 1.5rem;
                        padding-top: 1.5rem;
                    `}>
                        <span>[Uitrusting]</span>
                        <ul>
                            <li><strong>[Standaard op de A1 Sportback]</strong></li>
                            <li>[15 inch lichtmetalen velgen]</li>
                            <li>[Smartphone interface]</li>
                            <li>[MMI radio plus]</li>
                            <li>[USB aansluiting]</li>
                            <li>[Elektrisch bedienbare ramen]</li>
                        </ul>
                    </div>
                </div>
                <div css={css`
                    display: flex;
                    justify-content: flex-end;
                    background-color: #fff;
                    margin: 0 auto;
                    width: 100%;
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                    padding-right: 1.5rem;
                    border-top: 1px solid #e0e0e0;
                `}>
                    <button>Meer weten</button>
                </div>
            </div>
        </>
    )
}

export default StockItem;