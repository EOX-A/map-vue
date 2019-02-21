import MvMap from './components/Map'
import MvLayerTile from './components/layer/Tile'
import MvLayerImage from './components/layer/Image'
import MvLayerGroup from './components/layer/Group'
import MvSourceOSM from './components/source/OSM'
import MvSourceXYZ from './components/source/XYZ'
import MvSourceEOXMaps from './components/source/EOXMaps'

export let _Vue

export function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return
  }

  install.installed = true

  _Vue = Vue

  Vue.component('mv-map', MvMap)

  Vue.component('mv-layer-tile', MvLayerTile)
  Vue.component('mv-layer-image', MvLayerImage)
  Vue.component('mv-layer-group', MvLayerGroup)

  Vue.component('mv-source-osm', MvSourceOSM)
  Vue.component('mv-source-xyz', MvSourceXYZ)
  Vue.component('mv-source-eox-maps', MvSourceEOXMaps)
}
