<template>
  <div class="bar-chart-page">
    <router-link to="/part1">part1</router-link>
    <router-link to="/part2">part2</router-link>
    <router-link to="/part3">part3</router-link>
  </div>
</template>

<script>
export default {
  name: "barChart"
}
</script>

<style lang="scss">
.bar-chart-page{
  a{
    display: block;
  }
}
</style>
