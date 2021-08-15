// from data.js
let tableData = data;

let form = d3.select("#datetime");
let button = d3.select("#filter-btn");
let tbody = d3.select("tbody");

// YOUR CODE HERE!
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    let inputValue = form.property("value");

    function dateselect(encounter) {
        return encounter.datetime == inputValue;
    }

    let sightinglist = tableData.filter(dateselect);

    sightingslist.forEach((encounter) => {
        let row = tbody.append("tr");
        Object.entries(encounter).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });

};