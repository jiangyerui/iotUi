import {
    // operationlog
    reqSelectOperationLogById,
    reqSelectAllOperationLog,
    reqSelectOperationLogByPage,
    // alarmlog
    reqSelectAlarmLogById,
    reqSelectAllAlarmLog,
    reqSelectAlarmLogByPage,
    reqSelectAlarmLogByCurrentUser,
    // camera
    reqSelectCameraById,
    reqSelectAllCamera,
    reqSelectCameraByPage,
    // device
    reqSelectDeviceById,
    reqSelectAllDevice,
    reqSelectDeviceByPage,
    reqSelectDeviceTreeByCurrentUser,
    reqSelectDeviceDataByMac,
    reqSelectDeviceProjectsByCurrentUser,
    // project
    reqSelectProjectById,
    reqSelectAllProject,
    reqSelectProjectByPage,
    reqSelectAllProjectByCurrentUser,
    // company
    reqSelectCompanyById,
    reqSelectAllCompany,
    reqSelectCompanyByPage,
    // user
    reqSelectUserById,
    reqSelectCurrentUser,
    reqSelectUsersTree,
    reqSelectUserTreeByUserId,
    reqselectUserProjectByProjectId,
    reqSelectAllUser,
    reqSelectUserByPage,
    // other
    // reqlcAcsB128,
    reqlcAcs
} from '../api'
import {
    // operationlog
    RECEIVE_OPERATIONLOG,
    RECEIVE_OPERATIONLOGS,
    // alarmlog
    RECEIVE_ALARMLOG,
    RECEIVE_ALARMLOGS,
    // camera
    RECEIVE_CAMERA,
    RECEIVE_CAMERAS,
    // device
    RECEIVE_DEVICE,
    RECEIVE_DEVICES,
    RECEIVE_DEVICECOMPANYS,
    RECEIVE_MYDEVICEPROJECTS,
    RECEIVE_DEVICEDATA,
    RECEIVE_INDEXDEVPROS,
    // project
    RECEIVE_PROJECT,
    RECEIVE_PROJECTS,
    RECEIVE_PROJECTSCURRENT,
    // company
    RECEIVE_COMPANY,
    RECEIVE_COMPANYS,
    // user
    RECEIVE_USER,
    RECEIVE_USERCURRENT,
    RECEIVE_USERSTREE,
    RECEIVE_USERTREE,
    RECEIVE_USERPROJECTS,
    RECEIVE_USERS,
    // other
    // RECEIVE_LCACSB128,
    RECEIVE_LCACS
} from './mutation-types'
export default {
    // operationlog
    async clearOperationLogVal({ commit }, operationLog) {
        const result = operationLog
        commit(RECEIVE_OPERATIONLOG, { operationLog: result })
    },
    async selectOperationLogById({ commit }, operationLogId) {
        const result = await reqSelectOperationLogById(operationLogId)
        commit(RECEIVE_OPERATIONLOG, { operationLog: result })
    },
    async selectAllOperationLog({ commit }) {
        const result = await reqSelectAllOperationLog()
        commit(RECEIVE_OPERATIONLOGS, { operationLogs: result })
    },
    async selectOperationLogByPage({ commit, state }, { pageNum }) {
        // console.log(pageNum)
        const pageSize = state.pageSize
        const result = await reqSelectOperationLogByPage({ pageNum, pageSize })
        // console.log(result)
        commit(RECEIVE_OPERATIONLOGS, { operationLogs: result })
    },
    // alarmlogs
    async clearAlarmLogVal({ commit }, alarmlog) {
        const result = alarmlog
        commit(RECEIVE_ALARMLOG, { alarmLog: result })
    },
    async selectAlarmLogById({ commit }, alarmlogId) {
        const result = await reqSelectAlarmLogById(alarmlogId)
        commit(RECEIVE_ALARMLOG, { alarmLog: result })
    },
    async selectAllAlarmLog({ commit }) {
        const result = await reqSelectAllAlarmLog()
        commit(RECEIVE_ALARMLOGS, { alarmLogs: result })
    },
    async selectAlarmLogByCurrentUser({ commit }) {
        const result = await reqSelectAlarmLogByCurrentUser()
        commit(RECEIVE_ALARMLOGS, { alarmLogs: result })
    },
    async updateCurrentAlarmLogs({ commit },alarmlogcurrent) {
        const result = alarmlogcurrent
        commit(RECEIVE_ALARMLOGS, { alarmLogs: result })
    },
    async selectAlarmLogByPage({ commit, state }, { pageNum, alarmlogName }) {
        const pageSize = state.pageSize
        // console.log('alarmlogName='+alarmlogName)
        const result = await reqSelectAlarmLogByPage({pageNum, pageSize, alarmlogName})
        commit(RECEIVE_ALARMLOGS, { alarmLogs: result })
    },
    // camera
    async clearCameraVal({ commit }, camera) {
        const result = camera
        commit(RECEIVE_CAMERA, { camera: result })
    },
    async selectCameraById({ commit }, cameraId) {
        const result = await reqSelectCameraById(cameraId)
        commit(RECEIVE_CAMERA, { camera: result })
    },
    async selectAllCamera({ commit }) {
        const result = await reqSelectAllCamera()
        commit(RECEIVE_CAMERAS, { cameras: result })
    },
    async selectCameraByPage({ commit, state }, { pageNum, cameraPhone, cameraName }) {
        const pageSize = state.pageSize
        const result = await reqSelectCameraByPage({ pageNum, pageSize, cameraPhone, cameraName })
        commit(RECEIVE_CAMERAS, { cameras: result })
    },
    // device
    async clearDeviceVal({ commit }, device) {
        const result = device
        commit(RECEIVE_DEVICE, { device: result })
    },
    async selectDeviceById({ commit }, deviceId) {
        const result = await reqSelectDeviceById(deviceId)
        commit(RECEIVE_DEVICE, { device: result })
    },
    async selectAllDevice({ commit }) {
        const result = await reqSelectAllDevice()
        commit(RECEIVE_DEVICES, { devices: result })
    },
    async selectDeviceByPage({ commit, state }, { pageNum, devicePhone, deviceName }) {
        const pageSize = state.pageSize
        const result = await reqSelectDeviceByPage({ pageNum, pageSize, devicePhone, deviceName })
        commit(RECEIVE_DEVICES, { devices: result })
    },
    async selectDeviceTreeByCurrentUser({ commit }) {
        const result = await reqSelectDeviceTreeByCurrentUser()
        commit(RECEIVE_DEVICECOMPANYS, { devicecompanys: result })
    },
    async clearMyDeviceProjectVal({ commit }, mydeviceprojects) {
        const result = mydeviceprojects
        commit(RECEIVE_MYDEVICEPROJECTS, { mydeviceprojects: result })
    },
    async selectDeviceDataByMac({ commit }, mac) {
        const result = await reqSelectDeviceDataByMac(mac)
        commit(RECEIVE_DEVICEDATA, { devicedata: result })
    },
    async updatedevicedatafrommqtt({ commit }, obj) {
        const result = obj
        commit(RECEIVE_DEVICEDATA, { devicedata: result })
    },
    async selectDeviceProjectsByCurrentUser({ commit }) {
        const result = await reqSelectDeviceProjectsByCurrentUser()
        commit(RECEIVE_INDEXDEVPROS, { indexdevpros: result })
    },
    async updateDeviceProjects({ commit },is) {
        const result = is
        commit(RECEIVE_INDEXDEVPROS, { indexdevpros: result })
    },
    // project
    async clearProjectVal({ commit }, project) {
        const result = project
        commit(RECEIVE_PROJECT, { project: result })
    },
    async selectProjectById({ commit }, projectId) {
        const result = await reqSelectProjectById(projectId)
        commit(RECEIVE_PROJECT, { project: result })
    },
    async selectAllProject({ commit }) {
        const result = await reqSelectAllProject()
        commit(RECEIVE_PROJECTS, { projects: result })
    },
    async selectAllProjectByCurrentUser({ commit }) {
        const result = await reqSelectAllProjectByCurrentUser()
        commit(RECEIVE_PROJECTSCURRENT, { projectscurrent: result })
    },
    async selectProjectByPage({ commit, state }, { pageNum, projectPhone, projectName }) {
        const pageSize = state.pageSize
        const result = await reqSelectProjectByPage({ pageNum, pageSize, projectPhone, projectName })
        commit(RECEIVE_PROJECTS, { projects: result })
    },
    // company
    async clearCompanyVal({ commit }, company) {
        const result = company
        commit(RECEIVE_COMPANY, { company: result })
    },
    async selectCompanyById({ commit }, companyId) {
        const result = await reqSelectCompanyById(companyId)
        commit(RECEIVE_COMPANY, { company: result })
    },
    async selectAllCompany({ commit }) {
        const result = await reqSelectAllCompany()
        commit(RECEIVE_COMPANYS, { companys: result })
    },
    async selectCompanyByPage({ commit, state }, { pageNum, companyPhone, companyName }) {
        const pageSize = state.pageSize
        const result = await reqSelectCompanyByPage({ pageNum, pageSize, companyPhone, companyName })
        commit(RECEIVE_COMPANYS, { companys: result })
    },
    // user
    async clearUserVal({ commit }, user) {
        const result = user
        commit(RECEIVE_USER, { user: result })
    },
    async selectUserById({ commit }, userId) {
        const result = await reqSelectUserById(userId)
        commit(RECEIVE_USER, { user: result })
    },
    async selectCurrentUser({ commit }) {
        const result = await reqSelectCurrentUser()
        commit(RECEIVE_USERCURRENT, { usercurrent: result })
    },
    async selectUsersTree({ commit }) {
        const result = await reqSelectUsersTree()
        commit(RECEIVE_USERSTREE, { userstree: result })
    },
    async selectUserTreeByUserId({ commit }, userId) {
        const result = await reqSelectUserTreeByUserId(userId)
        commit(RECEIVE_USERTREE, { usertree: result })
    },
    async selectUserProjectByProjectId({ commit },projectId) {
        const result = await reqselectUserProjectByProjectId(projectId)
        commit(RECEIVE_USERPROJECTS, { userprojects: result })
    },
    async clearUseProjectVal({ commit }, userProject) {
        const result = userProject
        commit(RECEIVE_USERPROJECTS, { userprojects: result })
    },
    async selectAllUser({ commit }) {
        const result = await reqSelectAllUser()
        commit(RECEIVE_USERS, { users: result })
    },
    async selectUserByPage({ commit, state }, { pageNum, userPhone, userName }) {
        const pageSize = state.pageSize
        const result = await reqSelectUserByPage({ pageNum, pageSize, userPhone, userName })
        commit(RECEIVE_USERS, { users: result })
    },
    // async getLcAcsB128({ commit }, mac) {
    //     const result = await reqlcAcsB128(mac)
    //     commit(RECEIVE_LCACSB128, { lcAcsB128: result })
    // },
    // other
    async getLcAcs({ commit }, id) {
        const result = await reqlcAcs(id)
        commit(RECEIVE_LCACS, { lcAcs: result })
    }
}
