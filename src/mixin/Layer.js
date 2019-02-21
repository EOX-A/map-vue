export default {
  // inject: ['addLayer'],

  props: {
    opacity: Number,
    visible: {
      type: Boolean,
      default: true,
    },
    extent: Array,
    minResolution: Number,
    maxResolution: Number,
    zIndex: Number,
  },

  watch: {
    opacity (value) {
      this.layer.setOpacity(value)
    },
    visible (value) {
      this.layer.setVisible(value)
    },
    extent (value) {
      this.layer.setExtent(value)
    },
    minResolution (value) {
      this.layer.setMinResolution(value)
    },
    maxResolution (value) {
      this.layer.setMaxResolution(value)
    },
    zIndex (value) {
      this.layer.setZIndex(value)
    },
  },

  methods: {
    setSource (source) {
      console.log('setting source', source)
      return this.layer.setSource(source)
    }
  },

  // provide () {
  //   return {
  //     setSource: this.setSource
  //   }
  // },

  mounted () {
    this.$parent.addLayer(this.layer)
  },
}
