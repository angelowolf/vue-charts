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
      default: true
    },
    depth3D: {
      type: Boolean,
      required: false,
      default: false
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
          autoColor: this.autoColor,
          type: 'column',
          fillAlphas: 0.8
        }
        graf.valueField = g.valueField
        graf.title = g.title
        return graf
      })
      let angle = this.depth3D ? 30 : 0
      let depth3D = this.depth3D ? 20 : 0
      this.configActual = {
        responsive: {enabled: true},
        startDuration: 1,
        type: 'serial',
        theme: 'custom',
        dataProvider: this.datos,
        categoryField: this.categoryField,
        graphs: graficosConfig,
        angle: angle,
        depth3D: depth3D,
        categoryAxis: {
          gridPosition: 'start',
          labelRotation: 45,
          tickPosition: 'start'
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
