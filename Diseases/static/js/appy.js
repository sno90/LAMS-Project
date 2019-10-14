// from data.js
var data = 0;
d3.json("/data").then(function(data_df){data = data_df


// Variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#Year");
var inputField2 = d3.select("#County");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["Year", "Region", "District", "County", "Condition", "Cases", "Rate"]

var populate = (dataInput) => {

  dataInput.forEach(communicable_diseases_VA => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(communicable_diseases_VA[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputYear = inputField1.property("value").trim();
  console.log(inputYear);
  var inputCounty = inputField2.property("value").toLowerCase().trim();
  console.log(inputCounty);
  // Filter by field matching input value
  var filterYear = data.filter(data => data.year === inputYear);
  console.log(filterYear)
  var filterCounty = data.filter(data => data.county === inputCounty);
  console.log(filterCounty)
  var filterData = data.filter(data => data.year === inputYear && data.county === inputCounty);
  console.log(filterData)

  // Add filtered sighting to table
  tbody.html("");

  let response = {
    filterData, filterCounty, filterYear
  }
console.log(response);
  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterCounty.length !== 0 || response.filterYear.length !== 0))){
      populate(filterCounty) || populate(filterYear);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})


})