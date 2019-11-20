/*
包含多个基于state的getter计算属性的对象
 */
export default {
  // device
  device (state) {
    return state.device
  },
  devices (state) {
    return state.devices
  },
  // project
  project (state) {
    return state.project
  },
  projects (state) {
    return state.projects
  },
  // company
  company (state) {
    return state.company
  },
  companys (state) {
    return state.companys
  },
  // user
  user (state) {
    return state.user
  },
  users (state) {
    return state.users
  },
  // other
  lcAcsB128 (state) {
    return state.lcAcsB128
  },
  lcAcs (state) {
    return state.lcAcs
  }
}
