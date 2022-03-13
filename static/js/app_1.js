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
// create a new function for date data
function handleClick () {
    let date = d3.select("#datetime").property("value");
    //set a default filter & save it to new variable
    let filteredData = tableData;

    // check for date & filter the data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // if no date entered, filteredData will be original tableData
    buildTable(filteredData);
}
 
//Attach event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);