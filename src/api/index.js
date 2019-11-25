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

// 增加一个相机
export const reqAddCamera = (camera) => ajaxPost('/platform/camera/addCamera/',camera)
// 删除一个相机
export const reqDeleteCameraById = (cameraId) => ajaxDelete('/platform/camera/deleteCameraById/'+cameraId)
// 修改一个相机
export const reqUpdateCamera = (camera) => ajaxPut('/platform/camera/updateCamera/',camera)
// 查询一个相机
export const reqSelectCameraById = (cameraId) => ajaxGet('/platform/camera/selectCameraById/'+cameraId)
// 查询所有相机
export const reqSelectAllCamera = () => ajaxGet('/platform/camera/selectAllCamera/')
// 分页查询相机
export const reqSelectCameraByPage = ({pageNum,pageSize,cameraName}) => ajaxGet('/platform/camera/selectCameraByPage',{
    pageNum,
    pageSize,
    cameraName
})

// 增加一个报警记录
export const reqAddAlarmLog = (alarmlog) => ajaxPost('/platform/alarmLog/addAlarmLog/',alarmlog)
// 删除一个报警记录
export const reqDeleteAlarmLogById = (alarmlogId) => ajaxDelete('/platform/alarmLog/deleteAlarmLogById/'+alarmlogId)
// 修改一个报警记录
export const reqUpdateAlarmLog = (alarmlog) => ajaxPut('/platform/alarmLog/updateAlarmLog/',alarmlog)
// 查询一个报警记录
export const reqSelectAlarmLogById = (alarmlogId) => ajaxGet('/platform/alarmLog/selectAlarmLogById/'+alarmlogId)
// 查询所有报警记录
export const reqSelectAllAlarmLog = () => ajaxGet('/platform/alarmLog/selectAllAlarmLog/')
// 分页查询报警记录
export const reqSelectAlarmLogByPage = ({pageNum,pageSize,alarmlogName}) => ajaxGet('/platform/alarmLog/selectAlarmLogByPage',{
    pageNum,
    pageSize,
    alarmlogName
})

// 增加一个操作记录
export const reqAddOperationLog = (operationLog) => ajaxPost('/platform/operationLog/addOperationLog/',operationLog)
// 删除一个操作记录
export const reqDeleteOperationLogById = (operationLogId) => ajaxDelete('/platform/operationLog/deleteOperationLogById/'+operationLogId)
// 修改一个操作记录
export const reqUpdateOperationLog = (operationLog) => ajaxPut('/platform/operationLog/updateOperationLog/',operationLog)
// 查询一个操作记录
export const reqSelectOperationLogById = (operationLogId) => ajaxGet('/platform/operationLog/selectOperationLogById/'+operationLogId)
// 查询所有操作记录
export const reqSelectAllOperationLog = () => ajaxGet('/platform/operationLog/selectAllOperationLog/')
// 分页查询操作记录
export const reqSelectOperationLogByPage = ({pageNum,pageSize}) => ajaxGet('/platform/operationLog/selectOperationLogByPage',{
    pageNum,
    pageSize
})

// 获取lcAcsB128
export const reqlcAcsB128 = (mac) => ajax('/api/lcAcsB128/'+mac)
export const reqlcAcs = (id) => ajax('/api/lcAcs/'+id)
