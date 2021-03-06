import popUpBase from '../popup-base/popup-base.js'
import template from './popup-over.vue'

var popUpConfig = {
}

var defaultConfig = {
  autoSetOrthocenter: true,
  position: 'domRelative'
}

var incrId = 0
var instancesMap = {}

function Popover (constructConfig) {
  this.constructor = Popover
  this.init(
    defaultConfig, constructConfig,
    popUpConfig, instancesMap,
    template, incrId++
  )
}

Popover.prototype = popUpBase

export default Popover
