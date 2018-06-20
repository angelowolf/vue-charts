<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    <button class="btn btn-default" @click="buscando = !buscando">CLICK</button>
    <stacked-column-chart idGrafico="ejemplo" :datos="datos" :graficos="graficos" categoryField="year" :buscando="buscando"></stacked-column-chart>
  </div>
</template>

<script>
import StackedColumnChart from './components/StackedColumnChart'

export default {
  name: 'app',
  components: {
    StackedColumnChart
  },
  data () {
    return {
      buscando: false,
      datos: [
        {
          year: '2003',
          europe: 2500,
          namerica: 100,
          asia: 1000,
          lamerica: 354,
          meast: 200,
          africa: 300
        },
        {
          year: '2004',
          europe: 2500,
          namerica: 100,
          asia: 1000,
          lamerica: 354,
          meast: 200,
          africa: 300
        },
        {
          year: '2005',
          europe: 2500,
          namerica: 100,
          asia: 1000,
          lamerica: 354,
          meast: 200,
          africa: 300
        }
      ],
      graficos: [
        {
          title: 'Europe',
          type: 'column',
          valueField: 'europe'
        },
        {
          title: 'North America',
          type: 'column',
          valueField: 'namerica'
        },
        {
          title: 'Asia-Pacific',
          type: 'column',
          valueField: 'asia'
        },
        {
          title: 'Latin America',
          type: 'column',
          valueField: 'lamerica'
        },
        {
          title: 'Middle-East',
          type: 'column',
          valueField: 'meast'
        },
        {
          title: 'Africa',
          type: 'column',
          valueField: 'africa'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.amcharts-chart-div > a {
  display: none !important;
}
</style>
