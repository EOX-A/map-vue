import WMTSSource from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/wmts'
import { get as getProjection } from 'ol/proj'
import { getWidth, getTopLeft } from 'ol/extent'

import SourceMixin from '../../mixin/Source'
import VirtualMixin from '../../mixin/Virtual'


function createWMTSTileGrid(projectionName, matrixIdPrefix, matrixIdPostfix) {
  const projection = getProjection(projectionName);
  const projectionExtent = projection.getExtent();
  const size = getWidth(projectionExtent) / 256;
  const resolutions = new Array(18);
  const matrixIds = new Array(18);

  for (let z = 0; z < 18; ++z) {
    resolutions[z] = size / Math.pow(2, (z + 1));
    let id = z;

    if (matrixIdPrefix) {
      id = matrixIdPrefix + id;
    }
    if (matrixIdPostfix) {
      id += matrixIdPostfix;
    }
    matrixIds[z] = id;
  }
  return new WMTSTileGrid({
    origin: getTopLeft(projectionExtent),
    resolutions,
    matrixIds,
  })
}



export default {
  mixins: [SourceMixin, VirtualMixin],

  props: {
    layer: {
      type: String,
      default: 'terrain-light'
    },
    format: {
      type: String,
      default: 'image/png',
    },
    styleName: {
      type: String,
      default: 'default',
    },
    matrixSet: {
      type: String,
      default: 'WGS84',
      validator (value) {
        return value === 'WGS84' || value === 'g'
      }
    },
    wrapX: {
      type: Boolean,
      default: true
    }
  },

  data () {
    const urls = [
      'http://a.tiles.maps.eox.at/wmts/',
      'http://b.tiles.maps.eox.at/wmts/',
      'http://c.tiles.maps.eox.at/wmts/',
      'http://d.tiles.maps.eox.at/wmts/',
      'http://e.tiles.maps.eox.at/wmts/'
    ]
    const projection = this.matrixSet === 'WGS84' ? 'EPSG:4326' : 'EPSG:3857'

    return {
      source: new WMTSSource({
        urls,
        layer: this.layer,
        matrixSet: this.matrixSet,
        format: this.format,
        style: this.styleName,
        projection,
        tileGrid: createWMTSTileGrid(projection, this.matrixIdPrefix, this.matrixIdPostfix),
        // style: this.style,
        attributions: [
          // new Attribution({
          //   html: displayParams.attribution,
          // }),
        ],
        wrapX: this.wrapX,
        // dimensions: {
        //   time: '',
        // }
      })
    }
  },
}
