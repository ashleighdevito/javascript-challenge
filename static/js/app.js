// from data.js
let tableData = data;

let form = d3.select("#filters");
let button = d3.select("#filter-btn");
let tbody = d3.select("tbody");

tableData.forEach((encounter) => {
    let row = tbody.append("tr");
    Object.entries(encounter).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});


button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

    d3.event.preventDefault();

    tbody.html("");

    let inputField = d3.select("#datetime");
    let inputValue = inputField.property("value");

    console.log(inputValue);

    let sightinglist = tableData.filter(encounter => encounter.datetime === inputValue);

    sightinglist.forEach((encounter) => {
        let row = tbody.append("tr");
        Object.entries(encounter).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });

};