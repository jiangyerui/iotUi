import {
    // device
    reqSelectDeviceById,
    reqSelectAllDevice,
    reqSelectDeviceByPage,
    // project
    reqSelectProjectById,
    reqSelectAllProject,
    reqSelectProjectByPage,
    // company
    reqSelectCompanyById,
    reqSelectAllCompany,
    reqSelectCompanyByPage,
    // user
    reqSelectUserById,
    reqSelectAllUser,
    reqSelectUserByPage,
    // other
    reqlcAcsB128,
    reqlcAcs
} from '../api'
import {
    // device
    RECEIVE_DEVICE,
    RECEIVE_DEVICES,
    // project
    RECEIVE_PROJECT,
    RECEIVE_PROJECTS,
    // company
    RECEIVE_COMPANY,
    RECEIVE_COMPANYS,
    // user
    RECEIVE_USER,
    RECEIVE_USERS,
    // other
    RECEIVE_LCACSB128,
    RECEIVE_LCACS
} from './mutation-types'
export default {
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
    async selectAllUser({ commit }) {
        const result = await reqSelectAllUser()
        commit(RECEIVE_USERS, { users: result })
    },
    async selectUserByPage({ commit, state }, { pageNum, userPhone, userName }) {
        const pageSize = state.pageSize
        const result = await reqSelectUserByPage({ pageNum, pageSize, userPhone, userName })
        commit(RECEIVE_USERS, { users: result })
    },
    async getLcAcsB128({ commit }, mac) {
        const result = await reqlcAcsB128(mac)
        commit(RECEIVE_LCACSB128, { lcAcsB128: result })
    },
    // other
    async getLcAcs({ commit }, id) {
        const result = await reqlcAcs(id)
        commit(RECEIVE_LCACS, { lcAcs: result })
    }
}
