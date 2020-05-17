import { useState, useEffect } from "react";

export default function useGoCar(fuels, gearboxes) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.gocar.be/v1/public/vehicles?point_of_sale_id=1233`)
                .then(response => response.json())
                .then(data => {
                    setCars(transformCars(data));
                });
        }

        fetchData();

        function transformCars(cars) {

            function findFuel(fuel_type_id) {
                const fuel = fuels.find(f => f.id === fuel_type_id);

                return fuel !== undefined ? fuel.name : undefined;
            }

            function findGearbox(gearbox_id) {
                const gearbox = gearboxes.find(f => f.id === gearbox_id);

                return gearbox !== undefined ? gearbox.name : undefined;
            }

            return cars.data.map(car => {
                return {
                    makeModel: `${car["brand_name"]} ${car["model_name"].nl}`,
                    version: car["version"],
                    price: parseFloat(car["price"]),
                    firstRegistration: car["first_registration"],
                    motor: `${car["engine_power_kw"]} kW ${car["horse_power"]} PK`,
                    fuel: findFuel(car["fuel_type_id"]),
                    gearbox: findGearbox(car["gearbox_id"]),
                    km: car["kilometers"],
                    owners: car["number_of_previous_owners"],
                    co2: car["CO2_emissions"],
                    image: car["images"][0].url,
                    link: `https://gocar.be/nl/autos/${car["brand_slug"]}/${car["model_slug"].nl}/${car["version_slug"]}/id/${car["id"]}`
                }
            })
        }
    }, [fuels, gearboxes]);

    return cars;
}