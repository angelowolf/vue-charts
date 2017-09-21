<template>
  <div class="container">
    <div class="row">
      <button @click="cargarDatos">CLICKME</button>
      <vue-am-serial-chart :config="config" nombre="graficoTest" @clickGraphItem="clickGraphItem"></vue-am-serial-chart>
    </div>
  </div>
</template>
<script>
import VueAmSerialChart from './VueAmSerialChart'

export default {
  components: {
    VueAmSerialChart
  },
  methods: {
    clickGraphItem (e) {
      console.log(e)
    },
    cargarDatos () {
      this.config.dataProvider = this.chartData
    }
  },
  data () {
    return {
      chartData: [{
        'country': 'USA',
        'visits': 4252
      }, {
        'country': 'China',
        'visits': 1882
      }, {
        'country': 'Germany',
        'visits': 1322
      }, {
        'country': 'Japan',
        'visits': 1809
      }, {
        'country': 'UK',
        'visits': 1122
      }, {
        'country': 'France',
        'visits': 1114
      }, {
        'country': 'India',
        'visits': 984
      }, {
        'country': 'Spain',
        'visits': 711
      }, {
        'country': 'Netherlands',
        'visits': 665
      }, {
        'country': 'Russia',
        'visits': 580
      }, {
        'country': 'South Korea',
        'visits': 443
      }, {
        'country': 'Canada',
        'visits': 441
      }, {
        'country': 'Brazil',
        'visits': 395
      }, {
        'country': 'Italy',
        'visits': 386
      }, {
        'country': 'Australia',
        'visits': 384
      }, {
        'country': 'Taiwan',
        'visits': 338
      }, {
        'country': 'Poland',
        'visits': 328
      }],
      config: {
        responsive: {enabled: true},
        type: 'serial',
        dataProvider: [],
        categoryField: 'country',
        graphs: [ {
          autoColor: true,
          valueField: 'visits',
          type: 'column',
          title: 'aglo',
          fillAlphas: 0.8
        } ],
        angle: 30,
        depth3D: 20
      }
    }
  }
}
</script>
