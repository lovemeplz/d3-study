<template>
  <div class="bar-chart1-page">
    <div class="chart">
    </div>
  </div>
</template>

<script>
import * as d3 from  "d3"
const data = [4, 8, 15, 16, 100, 42];
export default {
  methods: {
    renderChart() {
      // 比例尺  最大即为420 类似定义域值域
      var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420]);
        
      d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>

<style>
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
