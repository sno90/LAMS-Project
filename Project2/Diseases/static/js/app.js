// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 10,
    bottom: 200,
    right: 150,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);


  // Append group element
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("Resources/Top10_Conditions_by_Year.csv").then(function (conditionData) {

    // Create year parser
    var yearParser = d3.timeParse("%Y");

    // Parse data
    conditionData.forEach(function (data) {
      data.Year = yearParser(data.Year);
      data.Count = +data.Count;
    });
    console.log(conditionData)

    // Creating variables FOR EACH CONDITION
    var Hepatitis_C = conditionData.filter((condition) => {
      return condition.Condition === "Hepatitis C, chronic"
    });

    var Salmonellosis = conditionData.filter((condition) => {
      return condition.Condition === "Salmonellosis"
    });

    var Campylobacteriosis = conditionData.filter((condition) => {
      return condition.Condition === "Campylobacteriosis"
    });

    var Hepatitis_B = conditionData.filter((condition) => {
      return condition.Condition === "Hepatitis B, chronic"
    });

    var Varicella = conditionData.filter((condition) => {
      return condition.Condition === "Varicella (Chickenpox)"
    });

    var Lead = conditionData.filter((condition) => {
      return condition.Condition === "Lead, elevated levels"
    });

    var Giardiasis = conditionData.filter((condition) => {
      return condition.Condition === "Giardiasis"
    });

    var Lyme = conditionData.filter((condition) => {
      return condition.Condition === "Lyme disease"
    });

    var Pertussis = conditionData.filter((condition) => {
      return condition.Condition === "Pertussis"
    });

    var Streptococcus = conditionData.filter((condition) => {
      return condition.Condition === "Streptococcus, Group A, invasive"
    });

    var Rickettsiosis = conditionData.filter((condition) => {
      return condition.Condition === "Spotted Fever Rickettsiosis (including RMSF)"
    });

    var Cryptosporidiosis = conditionData.filter((condition) => {
      return condition.Condition === "Cryptosporidiosis"
    });

    var Haemophilus_influenzae = conditionData.filter((condition) => {
      return condition.Condition === "Haemophilus influenzae, invasive"
    });

    var eColi = conditionData.filter((condition) => {
      return condition.Condition === "Escherichia coli infection, Shiga Toxin-Producing"
    });

    var Legionellosis = conditionData.filter((condition) => {
      return condition.Condition === "Legionellosis"
    });


    // create scales
    var xTimeScale = d3.scaleTime()
      .domain(d3.extent(conditionData, d => d.Year))
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(conditionData, d => d.Count)])
      .range([svgHeight, 0]);

    // create axes
    var xAxis = d3.axisBottom(xTimeScale);
    var yAxis = d3.axisLeft(yLinearScale).ticks(6);

    // append axes
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    chartGroup.append("g")
      .call(yAxis);

    // line generator
    var line = d3.line()
      .x(d => xTimeScale(d.Year))
      .y(d => yLinearScale(d.Count));

    // Append line FOR EACH CONDITION
    chartGroup.append("path")
      .data([Hepatitis_C])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "brown");

    chartGroup.append("path")
      .data([Salmonellosis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue");

    chartGroup.append("path")
      .data([Campylobacteriosis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "orange");

    chartGroup.append("path")
      .data([Hepatitis_B])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "greenyellow");

    chartGroup.append("path")
      .data([Varicella])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "purple");

    chartGroup.append("path")
      .data([Lead])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "lightpink");

    chartGroup.append("path")
      .data([Giardiasis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "navy");

    chartGroup.append("path")
      .data([Lyme])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "darksalmon");

    chartGroup.append("path")
      .data([Pertussis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "lightblue");

    chartGroup.append("path")
      .data([Streptococcus])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "red");

    chartGroup.append("path")
      .data([Rickettsiosis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "green");

    chartGroup.append("path")
      .data([Cryptosporidiosis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "pink");

    chartGroup.append("path")
      .data([Haemophilus_influenzae])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "darkgreen");

    chartGroup.append("path")
      .data([eColi])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "black");

    chartGroup.append("path")
      .data([Legionellosis])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "gold");

    // year formatter to display years nicely
    var yearFormatter = d3.timeFormat("%Y");

    // Step 1: Append tooltip div
    var toolTip = d3.select("body")
      .append("div")
      .classed("tooltip", true);

    // append circles
    chartGroup.selectAll("circle")
      .data(conditionData)
      .enter()
      .append("circle")
      .attr("cx", d => xTimeScale(d.Year))
      .attr("cy", d => yLinearScale(d.Count))
      .attr("r", "3")
      .attr("fill", "white")
      .attr("stroke-width", "1")
      .attr("stroke", "black")

      .on("mouseover", function (d) {
        console.log("Hello World")
        toolTip.style("display", "block")
          .html(`<strong>In year ${yearFormatter(d.Year)}<strong>, ${d.Count} cases of ${d.Condition} occured`)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
      })

      // Step 3: Create "mouseout" event listener to hide tooltip
      .on("mouseout", function () {
        toolTip.style("display", "none");
      });
      
      // adding a legend 
      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 25})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "brown")
        .text("Hepatitis C");
      
      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 40})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "blue")
        .text("Salmonellosis");

      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 55})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "orange")
        .text("Campylobacteriosis");
      
      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 70})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "greenyellow")
        .text("Hepatitis B");

      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 85})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "purple")
        .text("Varicella (Chicken Pox)");

      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 100})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "lightpink")
        .text("Lead");

      chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 115})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "navy")
        .text("Giardiasis");

      chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 25})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "darksalmon")
        .text("Lyme Disease");
      
      chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 40})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "lightblue")
        .text("Pertussis");

      chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 55})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "red")
        .text("Streptococcus");

      chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 70})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "green")
        .text("Rickettsiosis");

      chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 85})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "pink")
        .text("Cryptosporidiosis");

        chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 100})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "darkgreen")
        .text("Haemophilus_influenzae");

        chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 115})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "black")
        .text("e.Coli");

        chartGroup.append("text")
        .attr("transform", `translate(${width}, ${height + margin.top + 130})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "gold")
        .text("Legionellosis");

  }).catch(function (error) {
    console.log(error);
  });
}

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);