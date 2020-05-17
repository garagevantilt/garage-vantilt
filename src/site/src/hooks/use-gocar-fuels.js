import { useState, useEffect } from "react";

export default function useGoCarFuels() {
    const [fuels, setFuels] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.gocar.be/v1/public/points-of-sale/1233/attributes`)
            .then(response => response.json())
            .then(data => {
                setFuels(transformFuels(data));
            });
          }
        
          fetchData();
    }, []);   

    function transformFuels(data) {
        return data.fuels.map(fuel => {
            return {
                id: fuel.id,
                name: fuel.name.nl
            }
        });
    }    

    return fuels;
}