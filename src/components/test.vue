<template>
  <div class="container">
    <div class="row">
      <simple-column-chart idGrafico="ejemplo" :datos="datos" :graficos="graficos" categoryField="country" @clickGraphItem="clickGraphItem"></simple-column-chart>
    </div>
  </div>
</template>
<script>
import SimpleColumnChart from './SimpleColumnChart'
export default {
  components: {
    SimpleColumnChart
  },
  methods: {
    clickGraphItem (e) {
      console.log(e)
    }
  },
  data () {
    return {
      datos: [
        {
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
        }
      ],
      graficos: [
        {
          valueField: 'visits',
          title: 'Visitas'
        }
      ]
    }
  }
}
</script>
