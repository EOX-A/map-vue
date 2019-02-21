import Map from 'ol/Map'
import View from 'ol/View'

export default {
  props: {
    center: {
      type: Array,
      // default: [0, 0],
    },
    zoom: {
      type: Number,
      // default: 0,
    },
    projection: {
      type: String,
    },
    rotation: {
      type: Number,
      // default: 0,
    },
  },

  data () {
    const map = new Map({
      view: new View({
        center: this.center,
        zoom: this.zoom,
        projection: this.projection,
        rotation: this.rotation,
      }),
      // layers: [new TileLayer({ source: new OSMSource() })],
      // controls: ol.control.defaults().extend([new ol]),
      // controls: [],
    })

    return { map }
  },

  mounted () {
    this.map.setTarget(this.$el);
    this.map.on('moveend', () => {
      // this.center = this.map.getView().getCenter()
      // this.zoom = this.map.getView().getZoom()
    })
  },

  beforeDestroy () {

  },

  watch: {
    center (value) {
      this.map.getView().setCenter(value)
    },
    zoom (value) {
      this.map.getView().setZoom(value)
    },
    rotation (value) {
      this.map.getView().setRotation(value)
    },
  },

  methods: {
    addLayer (layer) {
      console.log("adding layer", layer)
      return this.map.addLayer(layer)
    }
  },

  // provide () {
  //   return {
  //     addLayer: this.addLayer
  //   }
  // },

  render (h) {
    return h('div', this.$slots.default)
  },
}
