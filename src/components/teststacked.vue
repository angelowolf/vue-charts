<template>
  <div class="container">
    <div class="row">
      <button @click="cargarDatos">CLICKME</button>
      <stacked-column-chart :config="config" nombre="graficoTestStacked" @clickGraphItem="clickGraphItem"></stacked-column-chart>
    </div>
  </div>
</template>
<script>
import StackedColumnChart from './StackedColumnChart'

export default {
  components: {
    StackedColumnChart
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
      chartData: [
        {
          year: '2003',
          europe: 2.5,
          namerica: 2.5,
          asia: 2.1,
          lamerica: 0.3,
          meast: 0.2,
          africa: 0.1
        },
        {
          year: '2004',
          europe: 2.6,
          namerica: 2.7,
          asia: 2.2,
          lamerica: 0.3,
          meast: 0.3,
          africa: 0.1
        },
        {
          year: '2005',
          europe: 2.8,
          namerica: 2.9,
          asia: 2.4,
          lamerica: 0.3,
          meast: 0.3,
          africa: 0.1
        }
      ],
      config: {
        responsive: {enabled: true},
        type: 'serial',
        dataProvider: [],
        legend: {
          autoMargins: false,
          borderAlpha: 0.2,
          equalWidths: false,
          horizontalGap: 10,
          markerSize: 10,
          useGraphSettings: true,
          valueAlign: 'left',
          valueWidth: 0
        },
        valueAxes: [
          {
            stackType: '100%',
            axisAlpha: 0,
            gridAlpha: 0,
            labelsEnabled: false,
            position: 'left'
          }
        ],
        graphs:
        [
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'Europe',
            type: 'column',
            valueField: 'europe'
          },
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'North America',
            type: 'column',
            valueField: 'namerica'
          },
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'Asia-Pacific',
            type: 'column',
            valueField: 'asia'
          },
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'Latin America',
            type: 'column',
            valueField: 'lamerica'
          },
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'Middle-East',
            type: 'column',
            valueField: 'meast'
          },
          {
            balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
            fillAlphas: 0.9,
            fontSize: 11,
            labelText: '[[percents]]%',
            lineAlpha: 0.5,
            title: 'Africa',
            type: 'column',
            valueField: 'africa'
          }
        ],
        categoryField: 'year',
        categoryAxis: { gridPosition: 'start', axisAlpha: 0, gridAlpha: 0 },
        angle: 30,
        depth3D: 20
      }
    }
  }
}
</script>
