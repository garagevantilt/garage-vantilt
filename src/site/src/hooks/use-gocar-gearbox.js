import { useState, useEffect } from "react";

export default function useGoCarGearbox() {
    const [gearbox, setGearbox] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.gocar.be/v1/public/points-of-sale/1233/attributes`)
            .then(response => response.json())
            .then(data => {
                setGearbox(transformGearBox(data));
            });
          }
        
          fetchData();
    }, []);     

    function transformGearBox(data) {
        return data.gearbox.map(gearbox => {
            return {
                id: gearbox.id,
                name: gearbox.name.nl
            }
        });
    }

    return gearbox;
}