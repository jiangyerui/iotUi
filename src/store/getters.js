/*
包含多个基于state的getter计算属性的对象
 */
export default {
  // operationlog
  operationLog (state) {
    return state.operationLog
  },
  operationLogs (state) {
    return state.operationLogs
  },
  // alarmlog
  alarmlog (state) {
    return state.alarmLog
  },
  alarmlogs (state) {
    return state.alarmLogs
  },
  // camera
  camera (state) {
    return state.camera
  },
  cameras (state) {
    return state.cameras
  },
  // device
  device (state) {
    return state.device
  },
  devices (state) {
    return state.devices
  },
  devicecompanys (state) {
    return state.devicecompanys
  },
  devicedata (state) {
    return state.devicedata
  },
  indexdevpros (state) {
    return state.indexdevpros
  },
  // project
  project (state) {
    return state.project
  },
  projects (state) {
    return state.projects
  },
  projectscurrent (state) {
    return state.projectscurrent
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
  userCurrent (state) {
    return state.userCurrent
  },
  userCompany (state) {
    return state.userCompany
  },
  userstree (state) {
    return state.userstree
  },
  usertree (state) {
    return state.usertree
  },
  userProject (state) {
    return state.userprojects
  },
  users (state) {
    return state.users
  },
  // other
  // lcAcsB128 (state) {
  //   return state.lcAcsB128
  // },
  lcAcs (state) {
    return state.lcAcs
  }
}
