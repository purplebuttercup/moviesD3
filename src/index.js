import _ from 'lodash';
import { colors } from './colors.js';


function component(name) {
  const element = document.createElement('div');
  element.innerHTML = _.join(['', name], ' ');

  return element;
}

function svgComponent(name){
  const svg = document.createElement('svg');
  svg.setAttribute('id', name);
  svg.setAttribute('width', 260);
  svg.setAttribute('height', 200);

  return svg;
}

var svg = d3.select("svg"),
    radius = Math.min(200, 200) / 2

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.percentage; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

d3.json("../data/data.json", function(error, movies) {
  if (error) throw error;

  movies.forEach((movie, index) => {
    var counter = 200 + index * 230;

    var  g = svg.append("g")
                .attr("transform", "translate(" + 300 + "," + counter + ")");

    g.append("text")
     .attr("transform", "translate(" + '-' + 280 + "," + index +  ")")
     .text(movie.name);

    var arc = g.selectAll(".arc")
      .data(pie(movie.values))
      .enter()
      .append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return colors[d.data.genre]; });

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.genre; });

    })
});
