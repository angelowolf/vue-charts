<template>
<div :style="{height: height}" :class="buscando && 'centrado'">
  <div v-if="buscando" >
    <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
  </div>  
  <div v-show="!buscando" :id="idGrafico" class="col-md-12" :style="{height: height}"></div>
</div>  
</template>
<script>
export default {
  props: {
    buscando: {
      type: Boolean,
      required: true,
      default: true
    },
    height: {
      type: String,
      default () {
        return '400px'
      }
    },
    idGrafico: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      default () {
        return {
          type: 'serial',
          dataProvider: [],
          valueAxes: [{}],
          graphs: [{}],
          categoryField: '',
          categoryAxis: {gridPosition: 'start'}
        }
      }
    }
  },
  created () {
    let e = this
    AmCharts.addInitHandler(function (chart) {
      // check if there are graphs with autoColor: true set
      for (var i = 0; i < chart.graphs.length; i++) {
        var graph = chart.graphs[i]
        if (graph.autoColor !== true) {
          continue
        }
        var colorKey = 'autoColor-' + i
        graph.lineColorField = colorKey
        graph.fillColorsField = colorKey
        for (var x = 0; x < chart.dataProvider.length; x++) {
          var color = e.getRandomColor()
          chart.dataProvider[x][colorKey] = color
        }
      }
    }, ['serial'])
    AmCharts.themes.custom = {
      themeName: 'custom',
      AmChart: {
        color: '#000000', backgroundColor: '#FFFFFF'
      },
      AmCoordinateChart: {
        colors: ['#ae85c9', '#aab9f7', '#b6d2ff', '#c9e6f2', '#c9f0e1', '#e8d685', '#e0ad63', '#d48652', '#d27362', '#495fba', '#7a629b', '#8881cc']
      },
      AmStockChart: {
        colors: ['#ae85c9', '#aab9f7', '#b6d2ff', '#c9e6f2', '#c9f0e1', '#e8d685', '#e0ad63', '#d48652', '#d27362', '#495fba', '#7a629b', '#8881cc']
      },
      AmSlicedChart: {
        colors: ['#ae85c9', '#aab9f7', '#b6d2ff', '#c9e6f2', '#c9f0e1', '#e8d685', '#e0ad63', '#d48652', '#d27362', '#495fba', '#7a629b', '#8881cc'], outlineAlpha: 1, outlineThickness: 2, labelTickColor: '#000000', labelTickAlpha: 0.3
      },
      AmRectangularChart: {
        zoomOutButtonColor: '#000000', zoomOutButtonRollOverAlpha: 0.15, zoomOutButtonImage: 'lens'
      },
      AxisBase: {
        axisColor: '#000000', axisAlpha: 0.3, gridAlpha: 0.1, gridColor: '#000000'
      },
      ChartScrollbar: {
        backgroundColor: '#000000', backgroundAlpha: 0.12, graphFillAlpha: 0.5, graphLineAlpha: 0, selectedBackgroundColor: '#FFFFFF', selectedBackgroundAlpha: 0.4, gridAlpha: 0.15
      },
      ChartCursor: {
        cursorColor: '#000000', color: '#FFFFFF', cursorAlpha: 0.5
      },
      AmLegend: {
        color: '#000000'
      },
      AmGraph: {
        lineAlpha: 0.9
      },
      GaugeArrow: {
        color: '#000000', alpha: 0.8, nailAlpha: 0, innerRadius: '40%', nailRadius: 15, startWidth: 15, borderAlpha: 0.8, nailBorderAlpha: 0
      },
      GaugeAxis: {
        tickColor: '#000000', tickAlpha: 1, tickLength: 15, minorTickLength: 8, axisThickness: 3, axisColor: '#000000', axisAlpha: 1, bandAlpha: 0.8
      },
      TrendLine: {
        lineColor: '#c03246', lineAlpha: 0.8
      },
      AreasSettings: {
        alpha: 0.8, color: '#67b7dc', colorSolid: '#003767', unlistedAreasAlpha: 0.4, unlistedAreasColor: '#000000', outlineColor: '#FFFFFF', outlineAlpha: 0.5, outlineThickness: 0.5, rollOverColor: '#3c5bdc', rollOverOutlineColor: '#FFFFFF', selectedOutlineColor: '#FFFFFF', selectedColor: '#f15135', unlistedAreasOutlineColor: '#FFFFFF', unlistedAreasOutlineAlpha: 0.5
      },
      LinesSettings: {
        color: '#000000', alpha: 0.8
      },
      ImagesSettings: {
        alpha: 0.8, labelColor: '#000000', color: '#000000', labelRollOverColor: '#3c5bdc'
      },
      ZoomControl: {
        buttonFillAlpha: 0.7, buttonIconColor: '#a7a7a7'
      },
      SmallMap: {
        mapColor: '#000000', rectangleColor: '#f15135', backgroundColor: '#FFFFFF', backgroundAlpha: 0.7, borderThickness: 1, borderAlpha: 0.8
      },
      PeriodSelector: {
        color: '#000000'
      },
      PeriodButton: {
        color: '#000000', background: 'transparent', opacity: 0.7, border: '1px solid rgba(0, 0, 0, .3)', MozBorderRadius: '5px', borderRadius: '5px', margin: '1px', outline: 'none', boxSizing: 'border-box'
      },
      PeriodButtonSelected: {
        color: '#000000', backgroundColor: '#b9cdf5', border: '1px solid rgba(0, 0, 0, .3)', MozBorderRadius: '5px', borderRadius: '5px', margin: '1px', outline: 'none', opacity: 1, boxSizing: 'border-box'
      },
      PeriodInputField: {
        color: '#000000', background: 'transparent', border: '1px solid rgba(0, 0, 0, .3)', outline: 'none'
      },
      DataSetSelector: {
        color: '#000000', selectedBackgroundColor: '#b9cdf5', rollOverBackgroundColor: '#a8b0e4'
      },
      DataSetCompareList: {
        color: '#000000', lineHeight: '100%', boxSizing: 'initial', webkitBoxSizing: 'initial', border: '1px solid rgba(0, 0, 0, .3)'
      },
      DataSetSelect: {
        border: '1px solid rgba(0, 0, 0, .3)', outline: 'none'
      }
    }
  },
  beforeMount () {
    this.crearGrafico()
  },
  methods: {
    getRandomColor () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    crearGrafico () {
      this.construirGrafico(this.config)
    },
    construirGrafico (config) {
      if (this.buscando) {
        return
      }
      if (!config.dataProvider || config.dataProvider.length === 0) {
        console.log('vacio', this.buscando)
        this.grafico = AmCharts.makeChart(this.idGrafico, this.configNoDatos)
        this.grafico.valueAxes[0].minimum = 0
        this.grafico.valueAxes[0].maximum = 100
        let dataPoint = {dummyValue: 0}
        dataPoint[this.grafico.categoryField] = ''
        this.grafico.dataProvider = [dataPoint]
        this.grafico.addLabel(0, '50%', 'El grafico no contiene datos', 'center')
        this.grafico.chartDiv.style.opacity = 0.5
        this.grafico.validateNow()
      } else {
        this.grafico = AmCharts.makeChart(this.idGrafico, config)
      }
      this.crearEventos()
    },
    crearEventos () {
      this.grafico.addListener('animationFinished', event => { this.$emit('animationFinished', event) })
      this.grafico.addListener('clickGraphItem', event => { this.$emit('clickGraphItem', event) })
      this.grafico.addListener('buildStarted', event => { this.$emit('buildStarted', event) })
      this.grafico.addListener('changed', event => { this.$emit('changed', event) })
      this.grafico.addListener('clickGraph', event => { this.$emit('clickGraph', event) })
      this.grafico.addListener('dataUpdated', event => { this.$emit('dataUpdated', event) })
      this.grafico.addListener('drawn', event => { this.$emit('drawn', event) })
      this.grafico.addListener('init', event => { this.$emit('init', event) })
      this.grafico.addListener('rendered', event => { this.$emit('rendered', event) })
      this.grafico.addListener('rightClickGraphItem', event => { this.$emit('rightClickGraphItem', event) })
      this.grafico.addListener('rollOutGraph', event => { this.$emit('rollOutGraph', event) })
      this.grafico.addListener('rollOutGraphItem', event => { this.$emit('rollOutGraphItem', event) })
      this.grafico.addListener('rollOverGraph', event => { this.$emit('rollOverGraph', event) })
      this.grafico.addListener('rollOverGraphItem', event => { this.$emit('rollOverGraphItem', event) })
      this.grafico.addListener('zoomed', event => { this.$emit('zoomed', event) })
    }
  },
  data () {
    return {
      grafico: null,
      configNoDatos: {
        type: 'serial',
        dataProvider: [],
        valueAxes: [{}],
        graphs: [{}],
        categoryField: 'year',
        categoryAxis: {gridPosition: 'start'}
      }
    }
  },
  watch: {
    config: {
      handler: function (newConfig) {
        this.construirGrafico(newConfig)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
  .centrado {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>