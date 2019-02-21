import OSMSource from 'ol/source/OSM'

import SourceMixin from '../../mixin/Source'
import VirtualMixin from '../../mixin/Virtual'

export default {
  mixins: [SourceMixin, VirtualMixin],

  data () {
    return {
      source: new OSMSource()
    }
  },
}
