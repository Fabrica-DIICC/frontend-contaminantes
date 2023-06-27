<template>
    <div id="app">
        <ChartCarousel />
    </div>
    <BarChart />
</template>
  
<script>
import BarChart from '../components/BarChart.vue'

export default {
    name: 'App',
    components: {
        BarChart,
    },
};
</script>
  
<style>
#app {
    text-align: center;
    padding: 20px;
}
</style>
  