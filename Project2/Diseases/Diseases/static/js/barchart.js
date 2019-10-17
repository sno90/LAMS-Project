// function that automatically resizes chart
function makeReponsive() {
    // if the svg area is not empty when browswer loads, remmove it and resize version of chart
    var svgArea = d3.select("body").select("svg");

    // clear svg if not empty
    if (!svgArea.empty()) {
        svgArea.remove();
    }

    // svg wrapper dimensions are determined by the current width and height of browser
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;

    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
    };

    var svg = d3
        .select("#scatter")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);
    
    // append group elemente
    var chartGroup = svg.appened("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // read csv
    // UPDATE WITH CSV FILE OR SQLITE FILE
    d3.csv("..\Diseases\Diseases\Resources\Communicable_Disease_VA.csv").then(function (diseaseData) {
        
        // parse data
    });
}

// when browser loads, makeResponsive() is called
makeResponsive();

// when the browser window is resized, makeResponsive() is called. 
d3.select(window).on("resize", makeResponsive);

