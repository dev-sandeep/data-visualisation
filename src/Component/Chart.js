import React, { useEffect } from 'react'
import * as RD3Component from 'd3'
import ChartData from '../Data/ChartData'
import UseAppContext from '../Context/UseAppContext'

export default function Chart(props) {

    const { getData } = UseAppContext();
    console.log(getData("wikimedia"));

    useEffect(() => {
        var width = 900;
        var height = 400;
        var margin = 50;
        var duration = 250;

        var lineOpacity = "0.25";
        var lineOpacityHover = "0.85";
        var otherLinesOpacityHover = "0.1";
        var lineStroke = "1.5px";
        var lineStrokeHover = "2.5px";

        var circleOpacity = '0.85';
        var circleOpacityOnLineHover = "0.25"
        var circleRadius = 3;
        var circleRadiusHover = 6;
        var data = ChartData();
        /* Format Data */
        var parseDate = RD3Component.timeParse("%Y");
        data.forEach(function (d) {
            d.values.forEach(function (d) {
                d.date = parseDate(d.date);
                d.price = +d.price;
            });
        });

        /* Scale */
        var xScale = RD3Component.scaleTime()
            .domain(RD3Component.extent(data[0].values, d => d.date))
            .range([0, width - margin]);

        var yScale = RD3Component.scaleLinear()
            .domain([0, RD3Component.max(data[0].values, d => d.price)])
            .range([height - margin, 0]);

        var color = RD3Component.scaleOrdinal(RD3Component.schemeCategory10);

        /* Add SVG */
        var svg = RD3Component.select("#main-chart").append("svg")
            .attr("width", (width + margin) + "px")
            .attr("height", (height + margin) + "px")
            .append('g')
            .attr("transform", `translate(${margin}, ${margin})`);


        /* Add line into SVG */
        var line = RD3Component.line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.price));

        let lines = svg.append('g')
            .attr('class', 'lines');

        lines.selectAll('.line-group')
            .data(data).enter()
            .append('g')
            .attr('class', 'line-group')
            .on("mouseover", function (d, i) {
                svg.append("text")
                    .attr("class", "title-text")
                    .style("fill", color(i))
                    .text(d.name)
                    .attr("text-anchor", "middle")
                    .attr("x", (width - margin) / 2)
                    .attr("y", 5);
            })
            .on("mouseout", function (d) {
                svg.select(".title-text").remove();
            })
            .append('path')
            .attr('class', 'line')
            .attr('d', d => line(d.values))
            .style('stroke', (d, i) => color(i))
            .style('opacity', lineOpacity)
            .on("mouseover", function (d) {
                RD3Component.selectAll('.line')
                    .style('opacity', otherLinesOpacityHover);
                RD3Component.selectAll('.circle')
                    .style('opacity', circleOpacityOnLineHover);
                RD3Component.select(this)
                    .style('opacity', lineOpacityHover)
                    .style("stroke-width", lineStrokeHover)
                    .style("cursor", "pointer");
            })
            .on("mouseout", function (d) {
                RD3Component.selectAll(".line")
                    .style('opacity', lineOpacity);
                RD3Component.selectAll('.circle')
                    .style('opacity', circleOpacity);
                RD3Component.select(this)
                    .style("stroke-width", lineStroke)
                    .style("cursor", "none");
            });


        /* Add circles in the line */
        lines.selectAll("circle-group")
            .data(data).enter()
            .append("g")
            .style("fill", (d, i) => color(i))
            .selectAll("circle")
            .data(d => d.values).enter()
            .append("g")
            .attr("class", "circle")
            .on("mouseover", function (d) {
                RD3Component.select(this)
                    .style("cursor", "pointer")
                    .append("text")
                    .attr("class", "text")
                    .text(`${d.price}`)
                    .attr("x", d => xScale(d.date) + 5)
                    .attr("y", d => yScale(d.price) - 10);
            })
            .on("mouseout", function (d) {
                RD3Component.select(this)
                    .style("cursor", "none")
                    .transition()
                    .duration(duration)
                    .selectAll(".text").remove();
            })
            .append("circle")
            .attr("cx", d => xScale(d.date))
            .attr("cy", d => yScale(d.price))
            .attr("r", circleRadius)
            .style('opacity', circleOpacity)
            .on("mouseover", function (d) {
                RD3Component.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadiusHover);
            })
            .on("mouseout", function (d) {
                RD3Component.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadius);
            });


        /* Add Axis into SVG */
        var xAxis = RD3Component.axisBottom(xScale).ticks(5);
        var yAxis = RD3Component.axisLeft(yScale).ticks(5);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height - margin})`)
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append('text')
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .attr("fill", "#000")
            .text("Total values");
    }, []);
    return (
        <div id="main-chart" className="">
            <div className="row">
                <div id="main-chart"></div>
            </div>
        </div>
    )
}