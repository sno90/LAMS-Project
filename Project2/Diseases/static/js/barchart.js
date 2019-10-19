// Target and hold reference of the chart element on the html page
var chartArea = document.getElementById('myChart').getContext('2d');
// var doughNutChart;

// Build Chart Function (can use this to build the chart when a user picks a year)
function doughnutChart(year) {

  // with the year that we get from the dropdown, perform data fetch @ /data/<year> route
  // year = 2009
  d3.json('/data/' + year).then(function (diseaseData) { // '/data/2009'
    // diseaseData is our list of dictionaries (i.e. [{...}, {...}, {...}, ...])
    console.log('diseaseData:', diseaseData);
    // const years = []
    let conditions = [];
    let num_cases = [];
    let region = []; 

    // process the data to get the values to plug into the graph (for loop)
    diseaseData.forEach(function (data) {
      // data.Year = ; // need to udpate 
      conditions.push(data.Condition) // need to udpate
      num_cases.push(parseInt(data.Cases));
      region.
    })

    // build the doughnut chart using our two arrays(lists) of data
    var doughnutChart = new Chart(chartArea, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: num_cases //.slice(0, 10)
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: conditions //.slice(0, 10)
      },
      options: {
        legend: {
          display: false
        }, 
        title: {
          display: true,
          text: 'Communicable Diseases by Year and County'
      }
      }
    });
  })
}

// Add an event listener to the dropdown item so that we can run the doughnut chart on click
// find the elemnt
// var dropDown = d3.select('#yearDropDown');

// // add event listener to this
// dropDown.on('click', function() {
//   // grab the value

//   // pass in the value to function
// })


// Build initial chart when the page loads
doughnutChart(2018);