function calculateCosts() {
    const name = document.getElementById('name').value || 'Guest';
    const days = parseInt(document.getElementById('days').value, 10) || 0;
    const costPerNight = parseFloat(document.getElementById('costPerNight').value) || 0;
    const foodPerDay = parseFloat(document.getElementById('foodPerDay').value) || 0;
    const entertainmentPerDay = parseFloat(document.getElementById('entertainmentPerDay').value) || 0;
    const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100 || 0;

    let yearlyCost = days * (costPerNight + foodPerDay + entertainmentPerDay);
    let report = `<h2>${name}'s 30 Year Vacation Plan</h2><ul>`;

    report += `<li>Year 1: Total Annual Cost: $${yearlyCost.toFixed(2)}, Monthly Cost: $${(yearlyCost / 12).toFixed(2)}</li>`;

    for (let year = 2; year <= 30; year++) {
        yearlyCost *= (1 + inflationRate);
        if (year % 5 === 0 || year === 30) {
            report += `<li>Year ${year}: Total Annual Cost: $${yearlyCost.toFixed(2)}, Monthly Cost: $${(yearlyCost / 12).toFixed(2)}</li>`;
        }
    }

    report += `</ul>`;
    document.getElementById('result').innerHTML = report;
}
