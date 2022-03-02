// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");
// start a new function to build a table
function buildTable(data) {
    tbody.html("");

    // add the forEach function
    data.forEach((dataRow) => {
        // append a row to the table
        let row = tbody.append("tr");
        // loop through dataRow and add values as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}