import TileLayer from 'ol/layer/Tile'

import LayerMixin from '../../mixin/Layer'
import VirtualMixin from '../../mixin/Virtual'

export default {
  mixins: [LayerMixin, VirtualMixin],
  data () {
    return {
      layer: new TileLayer({
        opacity: this.opacity,
        visible: this.visible,
        extent: this.extent,
        minResolution: this.minResolution,
        maxResolution: this.maxResolution,
        zIndex: this.zIndex,
      })
    }
  },
}
