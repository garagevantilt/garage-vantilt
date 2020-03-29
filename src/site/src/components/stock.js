import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Stock = () => {
    return (
        <>
            <h2>Stock</h2>
            <div>
                <div>
                    <div>
                        <span>[FOTO]</span>
                    </div>
                    <div>
                        <ul>
                            <li>[MERK][MODEL]</li>
                            <li>[MOTORISATIE]</li>
                            <li>[PRIJS]</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <span>[Specificaties]</span>
                        <div>
                            <div>
                                <div>MOTOR</div>
                                <div>[2.0 TFSI]</div>
                            </div>
                            <div>
                                <div>TRANSMISSIE</div>
                                <div>[Handgeschakeld]</div>
                            </div>
                            <div>
                                <div>BRANDSTOF</div>
                                <div>[Benzine]</div>
                            </div>
                            <div>
                                <div>UITSTOOT</div>
                                <div>[107 gram/km]</div>
                            </div>
                            <div>
                                <div>AANTAL PK</div>
                                <div>[165PK]</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>Uitrusting</span>
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
                <div>
                    <button>Bekijk deze auto op AutoScout24</button>     
                </div>
            </div>
        </>
    )
}

export default Stock;