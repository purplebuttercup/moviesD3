import _ from 'lodash';
import { colors } from './colors.js';
import Data from '../data/data.json';

function wrap(text) {
    text.each(function() {
        var text = d3.select(this);
        var words = text.text().split(" ").reverse();
        console.log(words)
        var lineHeight = 20;
        var width = parseFloat(text.attr('width'));
        var y = parseFloat(text.attr('y'));
        var x = text.attr('x');
        var anchor = text.attr('text-anchor');

        var tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('text-anchor', anchor);
        var lineNumber = 0;
        var line = [];
        var word = words.pop();
        console.log(word)
        while (word) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                lineNumber += 1;
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text.append('tspan').attr('x', x).attr('y', y + lineNumber * lineHeight).attr('anchor', anchor).text(word);
            }
            word = words.pop();
        }
    });
}

var svg = d3.select("svg"),
    radius = Math.min(150, 150) / 2

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

  svg.style("width", 90*movies.length + 'px')
     .style("height", 210*7 + 'px');

  var counterX = 300;
  movies.forEach((movie, index) => {
    var counterY = 200 + (index%6) * 230 ;
    if (index !=0 && index % 6 == 0)
      counterX =  counterX + 500
    var  g = svg.append("g")
                .attr("transform", "translate(" + counterX + "," + counterY + ")");

    g.append("text")
     .attr("class", "wrapme")
     .attr("x", "-200")
     .attr("y","0")
     .attr("width","150")
     .attr("text-anchor","middle" )
     .text(movie.name);

        // g.append("text")
        //  .attr("transform", "translate(" + '-' + 280 + "," + 0 +  ")")
        //  .attr("width", "500")
        //  .attr("height", "500")
        //  .text(movie.name);

    var arc = g.selectAll(".arc")
      .data(pie(movie.values))
      .enter()
      .append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return colors[d.data.genre]; });


    });

            //wrap text if too long
            d3.selectAll('.wrapme').call(wrap);
});
