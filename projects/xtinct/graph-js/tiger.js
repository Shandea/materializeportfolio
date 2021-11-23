function tigerRender() {



//js code for tiger line Graph 
// This is fetching data from json file
fetch('JSONs/Bengal-tiger.json')
    .then(response => response.json())
    .then(data => {
        // variable from json
        let dataSet = data.data;
        // Mapping the data 
        const newData = dataSet.map(function (item) {
            let newPop = item.population.split(",").join("");
            let finPop = parseInt(newPop);
            return {
                year: Date.parse(item.year),
                population: finPop,
               
            }
        })
        // This is getting the Min and Max years
        let yearMin = d3.min(newData, d => d.year);
       
       // this is max population
        let popMax = d3.max(newData, d => d.population);
       let popMin = d3.min(newData, d => d.population);
        // This is creating width, height and margins on graph
        const w = $("#graph").width()*1;
        const h = w/2;
        const margin = {top: 0, right: 0, bottom: 40,left: 70 };
        const innerWidth = w - margin.left - margin.right;
        const innerHeight = h - margin.top - margin.bottom;
        // creating svg
       
       

        const svg = d3.select("#graph")
            .append("svg")
            .attr('id', 'animal-svg')
            .attr('width', w)
            .attr('height', h)
            svg.append('text')
            .attr('transform', 'translate(240, 40)')
            .text("Decline in Bengal Tiger's Population")
            svg.append("text")
            .attr('transform', 'translate(310, 55)')
            .text("*data not available for 2011")
            .style("font-size", "10px")
        // x scale
        const xScale = d3.scaleTime()
            .domain([new Date(yearMin), new Date(Date.parse(2016))])
            .range([2, innerWidth]);
        // x axis
        const xAxis = d3.axisBottom(xScale);
        // y scale
        const yScale = d3.scaleLinear()
            .domain([popMin-1000, popMax])
            .range([innerHeight, margin.bottom])
            .nice();
        // y axis
        const yAxis = d3.axisLeft(yScale);
        // g variable
        const g = svg.append('g')
            .attr('transform',`translate(${margin.left},${margin.top})`);
        // display y axis
        const yAxisG =
            g.append('g').call(yAxis)
                .attr('id', 'yAxis')
                .style("font-size", "15px")
        // display x axis
        const xAxisG =
            g.append('g').call(xAxis)
                .attr('transform', `translate(0, ${innerHeight})`)
                .attr('id', 'xAxis')
                .style("font-size", "15px")
        // Line from dot to dot
        const lineGenerator = d3.line()
            .x(d => xScale(d.year))
            .y(d => yScale(d.population));
            g.append('path')
            .attr('class', 'line-path')
            .attr('d', lineGenerator(newData));

        // Circle Dots for chart
        svg.selectAll('circle')
            .data(newData)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.year)+margin.left)
            .attr('cy', d => yScale(d.population))
            .attr('r', 4)
            .attr("fill","#454148")
            .attr("class", "dot")
            .attr('id', 'tooltip')
            .append("title")
            .text((d, i) => "Population: " + d.population)
    });
}

// tigerRender();