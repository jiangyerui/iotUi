import ajaxPost from './ajaxPost'
import ajaxPut from './ajaxPut'
import ajaxGet from './ajaxGet'
import ajaxDelete from './ajaxDelete'

// 增加一个用户
export const reqAddUser = (user) => ajaxPost('/platform/user/addUser/',user)
// 删除一个用户
export const reqDeleteUserById = (userId) => ajaxDelete('/platform/user/deleteUserById/'+userId)
// 修改一个用户
export const reqUpdateUser = (user) => ajaxPut('/platform/user/updateUser/',user)
// 查询一个用户
export const reqSelectUserById = (userId) => ajaxGet('/platform/user/selectUserById/'+userId)
// 查询所有用户
export const reqSelectAllUser = () => ajaxGet('/platform/user/selectAllUser/')
// 分页查询用户
export const reqSelectUserByPage = ({pageNum,pageSize,userPhone,userName}) => ajaxGet('/platform/user/selectUserByPage',{
    pageNum,
    pageSize,
    userPhone,
    userName
})

// 增加一个集团
export const reqAddCompany = (company) => ajaxPost('/platform/company/addCompany/',company)
// 删除一个集团
export const reqDeleteCompanyById = (companyId) => ajaxDelete('/platform/company/deleteCompanyById/'+companyId)
// 修改一个集团
export const reqUpdateCompany = (company) => ajaxPut('/platform/company/updateCompany/',company)
// 查询一个集团
export const reqSelectCompanyById = (companyId) => ajaxGet('/platform/company/selectCompanyById/'+companyId)
// 查询所有集团
export const reqSelectAllCompany = () => ajaxGet('/platform/company/selectAllCompany/')
// 分页查询集团
export const reqSelectCompanyByPage = ({pageNum,pageSize,companyName}) => ajaxGet('/platform/company/selectCompanyByPage',{
    pageNum,
    pageSize,
    companyName
})

// 增加一个项目
export const reqAddProject = (project) => ajaxPost('/platform/project/addProject/',project)
// 删除一个项目
export const reqDeleteProjectById = (projectId) => ajaxDelete('/platform/project/deleteProjectById/'+projectId)
// 修改一个项目
export const reqUpdateProject = (project) => ajaxPut('/platform/project/updateProject/',project)
// 查询一个项目
export const reqSelectProjectById = (projectId) => ajaxGet('/platform/project/selectProjectById/'+projectId)
// 查询所有项目
export const reqSelectAllProject = () => ajaxGet('/platform/project/selectAllProject/')
// 分页查询项目
export const reqSelectProjectByPage = ({pageNum,pageSize,projectName}) => ajaxGet('/platform/project/selectProjectByPage',{
    pageNum,
    pageSize,
    projectName
})

// 增加一个设备
export const reqAddDevice = (device) => ajaxPost('/platform/device/addDevice/',device)
// 删除一个设备
export const reqDeleteDeviceById = (deviceId) => ajaxDelete('/platform/device/deleteDeviceById/'+deviceId)
// 修改一个设备
export const reqUpdateDevice = (device) => ajaxPut('/platform/device/updateDevice/',device)
// 查询一个设备
export const reqSelectDeviceById = (deviceId) => ajaxGet('/platform/device/selectDeviceById/'+deviceId)
// 查询所有设备
export const reqSelectAllDevice = () => ajaxGet('/platform/device/selectAllDevice/')
// 分页查询设备
export const reqSelectDeviceByPage = ({pageNum,pageSize,deviceName}) => ajaxGet('/platform/device/selectDeviceByPage',{
    pageNum,
    pageSize,
    deviceName
})

// 获取lcAcsB128
export const reqlcAcsB128 = (mac) => ajax('/api/lcAcsB128/'+mac)
export const reqlcAcs = (id) => ajax('/api/lcAcs/'+id)
