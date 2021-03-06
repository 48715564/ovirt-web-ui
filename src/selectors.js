import { Exception } from './exceptions'

let Selectors = {}
Selectors = {
  init ({ store }) {
    Selectors.store = store
  },
  // --- config --
  getLoginToken () {
    return getState().config.get('loginToken')
  },
  isTokenExpired () {
    return getState().config.get('isTokenExpired')
  },
  getOvirtVersion () {
    return getState().config.get('oVirtApiVersion')
  },
  // --- icons --
  getAllIcons () {
    return getState().icons
  },
  // --- vms --
  getVmDisks ({ vmId }) {
    return getState().vms.getIn(['vms', vmId, 'disks'])
  },
  getOperatingSystemByName (name) {
    return getState().operatingSystems.get('operatingSystems').toList().find(os =>
      os.get('name') === name)
  },
  getClusterById (clusterId) {
    return getState().clusters.getIn(['clusters', clusterId])
  },
  getTemplateById (templateId) {
    return getState().templates.getIn(['templates', templateId])
  },
  getFilter () {
    return getState().config.get('filter')
  },
  isFilterChecked () { // Has initialization passed?
    return getState().config.get('isFilterChecked')
  },
  getConsoleOptions ({ vmId }) {
    return getState().options.getIn(['options', 'consoleOptions', vmId])
  },
  getCurrentPage () {
    return getState().vms.get('page')
  },
}

function getState () {
  if (!Selectors.store) {
    throw new Exception('Selectors uninitialized - missing store. Call the Selectors.init() method')
  }
  return Selectors.store.getState()
}

export default Selectors
