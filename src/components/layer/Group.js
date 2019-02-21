import GroupLayer from 'ol/layer/Group'

import LayerMixin from '../../mixin/Layer'
import VirtualMixin from '../../mixin/Virtual'

export default {
  mixins: [LayerMixin, VirtualMixin],

  data () {
    return {
      layer: new GroupLayer(this)
    }
  },

  methods: {
    addLayer (layer) {
      return this.layer.getLayers().push(layer)
    }
  },

  // provide () {
  //   return {
  //     addLayer: this.addLayer
  //   }
  // },
}
