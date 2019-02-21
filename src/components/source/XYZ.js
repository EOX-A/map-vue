import XYZSource from 'ol/source/XYZ'

import SourceMixin from '../../mixin/Source'
import VirtualMixin from '../../mixin/Virtual'

export default {
  mixins: [SourceMixin, VirtualMixin],

  props: {
    url: String,
  },

  created () {
    console.log('mounted!!')
  },

  data () {
    return {
      source: new XYZSource({
        url: this.url
      })
    }
  },
}
