/*
vuex 的mutations 模块
*/
import {
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
