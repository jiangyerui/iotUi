/*
vuex 的mutations 模块
*/
import {
    RECEIVE_OPERATIONLOG,
    RECEIVE_OPERATIONLOGS,
    RECEIVE_ALARMLOG,
    RECEIVE_ALARMLOGS,
    RECEIVE_CAMERA,
    RECEIVE_CAMERAS,
    RECEIVE_DEVICE,
    RECEIVE_DEVICES,
    RECEIVE_PROJECT,
    RECEIVE_PROJECTS,
    RECEIVE_COMPANY,
    RECEIVE_COMPANYS,
    RECEIVE_USER,
    RECEIVE_USERS,
    RECEIVE_LCACSB128,
    RECEIVE_LCACS
} from './mutation-types'
export default {
    // operationlog
    [RECEIVE_OPERATIONLOG] (state, { operationLog }) {
        state.operationLog = operationLog
    },
    [RECEIVE_OPERATIONLOGS] (state, { operationLogs }) {
        state.operationLogs = operationLogs
        // console.log("operationLogs:"+state.operationLogs)
    },
    // alarmlog
    [RECEIVE_ALARMLOG] (state, { alarmLog }) {
        state.alarmLog = alarmLog
    },
    [RECEIVE_ALARMLOGS] (state, { alarmLogs }) {
        state.alarmLogs = alarmLogs
    },
    // camera
    [RECEIVE_CAMERA] (state, { camera }) {
        state.camera = camera
    },
    [RECEIVE_CAMERAS] (state, { cameras }) {
        state.cameras = cameras
    },
    // device
    [RECEIVE_DEVICE] (state, { device }) {
        state.device = device
    },
    [RECEIVE_DEVICES] (state, { devices }) {
        state.devices = devices
    },
    // project
    [RECEIVE_PROJECT] (state, { project }) {
        state.project = project
    },
    [RECEIVE_PROJECTS] (state, { projects }) {
        state.projects = projects
    },
    // company
    [RECEIVE_COMPANY] (state, { company }) {
        state.company = company
    },
    [RECEIVE_COMPANYS] (state, { companys }) {
        state.companys = companys
    },
    // user
    [RECEIVE_USER] (state, { user }) {
        state.user = user
    },
    [RECEIVE_USERS] (state, { users }) {
        state.users = users
    },
    // other
    [RECEIVE_LCACSB128] (state, { lcAcsB128 }) {
        state.lcAcsB128 = lcAcsB128
    },
    [RECEIVE_LCACS] (state, { lcAcs }) {
        state.lcAcs = lcAcs
    }
}
