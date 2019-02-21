import { install } from './install'

const inBrowser = typeof window !== 'undefined'

class MapVue {

}

MapVue.install = install;

if (inBrowser && window.Vue) {
  window.Vue.use(MapVue)
}

export default MapVue;
