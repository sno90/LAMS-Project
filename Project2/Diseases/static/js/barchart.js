// Target and hold reference of the chart element on the html page
var chartArea = document.getElementById('myChart').getContext('2d');

// Perform data fetch to Flask at the `/data` route
// use D3.json to fetch data
d3.json('/data').then(function(diseaseData) {
  // response is our list of dictionaries (i.e. [{...}, {...}, {...}, ...])
  console.log('response:', response);
  const years = []
  const conditions = []
  const = num_cases = []

  // process the data to get the values to plug into the graph (for loop)
  diseaseData.forEach(function(data) {
    data.Year = ; // need to udpate 
    data.Condition = ; // need to udpate
    data.Cases += data.Cases;  
  })
});
  

  // create chart using data
  var myChart = new Chart(chartArea, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // this should be our years list
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3], // this should be our condition+cases lists
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });

})