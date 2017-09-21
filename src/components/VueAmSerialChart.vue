<template>
  <div :id="nombre" class="col-md-12" :style="{height: height}"></div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default () {
        return '400px'
      }
    },
    nombre: {
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
          categoryField: 'year',
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
          console.log(color)
          chart.dataProvider[x][colorKey] = color
        }
      }
    }, ['serial'])
  },
  beforeMount () {
    this.crearGrafico(this.config)
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
    crearGrafico (config) {
      if (config.dataProvider.length === 0) {
        this.grafico = AmCharts.makeChart(this.nombre, this.configNoDatos)
        this.grafico.valueAxes[0].minimum = 0
        this.grafico.valueAxes[0].maximum = 100
        let dataPoint = {dummyValue: 0}
        dataPoint[this.grafico.categoryField] = ''
        this.grafico.dataProvider = [dataPoint]
        this.grafico.addLabel(0, '50%', 'El grafico no contiene datos', 'center')
        this.grafico.chartDiv.style.opacity = 0.5
        this.grafico.validateNow()
      } else {
        this.grafico = AmCharts.makeChart(this.nombre, config)
      }
      this.crearEventos()
    },
    crearEventos () {
      this.grafico.addListener('animationFinished', this.animationFinished)
      this.grafico.addListener('buildStarted', this.buildStarted)
      this.grafico.addListener('changed', this.changed)
      this.grafico.addListener('clickGraph', this.clickGraph)
      this.grafico.addListener('clickGraphItem', this.clickGraphItem)
      this.grafico.addListener('dataUpdated', this.dataUpdated)
      this.grafico.addListener('drawn', this.drawn)
      this.grafico.addListener('init', this.init)
      this.grafico.addListener('rendered', this.rendered)
      this.grafico.addListener('rightClickGraphItem', this.rightClickGraphItem)
      this.grafico.addListener('rollOutGraph', this.rollOutGraph)
      this.grafico.addListener('rollOutGraphItem', this.rollOutGraphItem)
      this.grafico.addListener('rollOverGraph', this.rollOverGraph)
      this.grafico.addListener('rollOverGraphItem', this.rollOverGraphItem)
      this.grafico.addListener('zoomed', this.zoomed)
    },
    animationFinished (event) {
      this.$emit('animationFinished', event)
    },
    buildStarted (event) {
      this.$emit('buildStarted', event)
    },
    changed (event) {
      this.$emit('changed', event)
    },
    clickGraph (event) {
      this.$emit('clickGraph', event)
    },
    clickGraphItem (event) {
      this.$emit('clickGraphItem', event)
    },
    dataUpdated (event) {
      this.$emit('dataUpdated', event)
    },
    drawn (event) {
      this.$emit('drawn', event)
    },
    init (event) {
      this.$emit('init', event)
    },
    rendered (event) {
      this.$emit('rendered', event)
    },
    rightClickGraphItem (event) {
      this.$emit('rightClickGraphItem', event)
    },
    rollOutGraph (event) {
      this.$emit('rollOutGraph', event)
    },
    rollOutGraphItem (event) {
      this.$emit('rollOutGraphItem', event)
    },
    rollOverGraph (event) {
      this.$emit('rollOverGraph', event)
    },
    rollOverGraphItem (event) {
      this.$emit('rollOverGraphItem', event)
    },
    zoomed (event) {
      this.$emit('zoomed', event)
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
        this.crearGrafico(newConfig)
      },
      deep: true
    }
  }
}
</script>
