<script>
import AmSerialChart from './AmSerialChart'
export default {
  mixins: [AmSerialChart],
  props: {
    datos: {
      type: Array,
      required: true
    },
    graficos: {
      type: Array,
      required: true
    },
    categoryField: {
      type: String,
      required: true
    },
    autoColor: {
      type: Boolean,
      required: false,
      default: false
    },
    labelPosition: {
      type: String,
      required: false,
      default: 'bottom'
    }
  },
  methods: {
    crearGrafico () {
      this.crearConfig()
      this.construirGrafico(this.configActual)
    },
    crearConfig () {
      let graficosConfig = this.graficos.map(g => {
        let graf = {
          balloonText: '[[title]], [[category]]<br><span style="font-size:14px;""><b>[[value]]</b> ([[percents]]%)</span>',
          fillAlphas: 0.9,
          fontSize: 11,
          labelText: '[[percents]]%',
          lineAlpha: 0.5
        }
        graf.title = g.title
        graf.type = g.type
        graf.valueField = g.valueField
        return graf
      })
      this.configActual = {
        responsive: {enabled: true},
        startDuration: 1,
        type: 'serial',
        theme: 'custom',
        dataProvider: this.datos,
        categoryField: this.categoryField,
        legend: {
          autoMargins: false,
          borderAlpha: 0.2,
          equalWidths: false,
          horizontalGap: 10,
          markerSize: 10,
          useGraphSettings: true,
          valueAlign: 'left',
          valueWidth: 0,
          position: this.labelPosition
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
        graphs: graficosConfig,
        categoryAxis: {
          gridPosition: 'start',
          axisAlpha: 0,
          gridAlpha: 0
        }
      }
    }
  },
  data () {
    return {
      configActual: {}
    }
  },
  computed: {
    cambiaDatos () {
      return {datos: this.datos, graf: this.graf, buscando: this.buscando}
    }
  },
  watch: {
    cambiaDatos: {
      handler: 'crearGrafico',
      deep: true
    }
  }
}
</script>
