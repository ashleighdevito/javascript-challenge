// from data.js
let tableData = data;

let tbody = d3.select("tbody");

// YOUR CODE HERE!
let inputField = d3.select("#datetime");

function dateselect(ufosighting) {
    return ufosighting.datetime == inputField;
}

let sightinglist = tableData.filter(dateselect);

sightingslist.forEach((encounter) => {
    let row = tbody.append("tr");
    Object.entries(encounter).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});