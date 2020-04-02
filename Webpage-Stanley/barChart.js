// get the data
d3.csv("data.csv", function(error, data) {
  if (error) throw error;

  makeVis(data);
});



var makeVis = function(dataMap) {

  // set the dimensions and margins of the graph
  var full_height = 500;
  var full_width = 960;
  var margin = {top: 0, right: 40, bottom: 55, left: 40},
    width = full_width - margin.left - margin.right,
    height = full_height - margin.top - margin.bottom;
  var figw = width - margin.left - margin.right;
  var figh = height - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
  var y = d3.scaleLinear()
          .range([height, 0]);
  
  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var interval = 7;
    var xValues = dataMap.filter((d, i) => i % interval === 0).map(d => d.date);
    var x_axis = d3.axisBottom(x)
      .tickSizeOuter(0)
      .tickValues(xValues);

    var xAxis = svg.append("g")
      .attr("transform", "translate(0, " + height + ")")
      .call(x_axis);
  
    // add the y Axis
    var y_axis = d3.axisLeft(y)
      .tickSizeOuter(0);

    var yAxis = svg.append("g")
      .attr("class", "y axis")
      .call(y_axis);

    xAxis
      .append("text")
      .style("fill", "black")
      .style("font-size", "12pt")
      .style("font-weight", "700")
      .style("text-anchor", "end")
      .attr("transform", "translate(" + (20 + width/2) + ", 30)")
      .text("Date");


  //Main function to draw bar chart.
  var drawBars = function(data) {

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.Value; })]);

    //Update the axes.
    xAxis.call(x_axis);
    yAxis.call(y_axis);

    //Remove existing bars.
    svg.selectAll('rect').remove();

    // append the rectangles for the bar chart
    var bars = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr("fill", "steelblue")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.Value); })
      .attr("height", function(d) { return height - y(d.Value); })
      .on('mouseover', function(d, i) {
        //Get this bar's x/y values, then augment for the tooltip
        var xPos, yPos;       
        xPos = parseFloat(d3.select(this).attr("x")) + x.bandwidth() / 2;
        yPos = height + margin.bottom;
    
        //Create the tooltip for steps
        var tooltip = svg.append("text")
            .attr("id", "tooltip")
            .attr("x", xPos)
            .attr("y", yPos)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("font-weight", "bold")
            .attr("fill", "blue")
            .text("Value: " + d.Value);

        //Create the tooltip for date/day
        var tooltip2 = svg.append("text")
            .attr("id", "tooltip2")
            .attr("x", xPos)
            .attr("y", yPos-12)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("font-weight", "bold")
            .attr("fill", "black")
            .text(d.day + ": " + d.date);

      })
      .on('mouseout', function(d, i) {
        d3.select(this)
            .transition()
            .duration(0)
            .attr("fill", "steelblue");

        //Remove the tooltip
        d3.select("#tooltip").remove();
        d3.select("#tooltip2").remove();

      });

  };
  //End: drawBars


  //Dropdown menu
  var selector = d3.select("#drop")
      .append("select")
      .attr("id","dropdown")
      .on("change", function(d) {
        var selActivityType = document.getElementById("dropdown").value;
        var selData = dataMap;
        selData.forEach(function(d) {
          d["Value"] = +d[selActivityType];
        });
        drawBars(selData);
      });

  var elements = ["Steps", "Miles"];

  selector.selectAll("option")
      .data(elements)
      .enter().append("option")
      .attr("value", function(d){
        return d;
      })
      .text(function(d){
        return d;
      });

  var initialActivityType = 'Steps';
  var initialData = dataMap;
  initialData.forEach(function(d) {
    d["Value"] = +d[initialActivityType];
  });
  drawBars(initialData);

};