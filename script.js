document.addEventListener("DOMContentLoaded", function() {
    function calculateTimePassed(startDate) {
        const now = new Date();
        const start = new Date(startDate);

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return { years, months, days };
    }

    function displayTimePassed() {
        const startDate = '1991-08-24';
        const timePassed = calculateTimePassed(startDate);
        const result = `${timePassed.years} роки.`;
        document.getElementById("timePassed").textContent = result;
    }

    displayTimePassed();
});

document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {"page":1,"pages":2,"per_page":50,"total":64,"sourceid":"2","lastupdated":"2024-05-30"},
        [{"indicator":{"id":"SP.POP.TOTL","value":"Population, total"},"country":{"id":"UA","value":"Ukraine"},"countryiso3code":"UKR","date":"2023","value":null,"unit":"","obs_status":"","decimal":0},
        {"indicator":{"id":"SP.POP.TOTL","value":"Population, total"},"country":{"id":"UA","value":"Ukraine"},"countryiso3code":"UKR","date":"2022","value":38000000,"unit":"","obs_status":"","decimal":0},
        {"indicator":{"id":"SP.POP.TOTL","value":"Population, total"},"country":{"id":"UA","value":"Ukraine"},"countryiso3code":"UKR","date":"2021","value":43822901,"unit":"","obs_status":"","decimal":0},
        {"indicator":{"id":"SP.POP.TOTL","value":"Population, total"},"country":{"id":"UA","value":"Ukraine"},"countryiso3code":"UKR","date":"2020","value":44132049,"unit":"","obs_status":"","decimal":0},
        {"indicator":{"id":"SP.POP.TOTL","value":"Population, total"},"country":{"id":"UA","value":"Ukraine"},"countryiso3code":"UKR","date":"2019","value":44386203,"unit":"","obs_status":"","decimal":0}]
    ];

    function getLatestPopulation(data) {
        const populationData = data[1];
        for (let entry of populationData) {
            if (entry.value !== null) {
                return entry.value;
            }
        }
        return null;
    }

    function displayPopulation() {
        const population = getLatestPopulation(data);
        if (population !== null) {
            document.getElementById("population").textContent = `${population.toLocaleString()} осіб.`;
        } else {
            document.getElementById("population").textContent = 'Не вдалося завантажити дані про населення';
        }
    }

    displayPopulation();
});
