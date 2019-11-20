import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import devsys from '../pages/devsys/devsys'
import home from '../pages/home/home'
import myset from '../pages/myset/myset'
import mysetcompany from '../components/mysetcompany/mysetcompany'
import mysetproject from '../components/mysetproject/mysetproject'
import mysetdevice from '../components/mysetdevice/mysetdevice'
import mysetuser from '../components/mysetuser/mysetuser'
import mysetcamera from '../components/mysetcamera/mysetcamera'
import mysetalarm from '../components/mysetalarm/mysetalarm'
import mysetlog from '../components/mysetlog/mysetlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/devsys',
      name: 'devsys',
      component: devsys
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/myset',
      name: 'myset',
      component: myset,
      children: [
        {path: '/myset/mysetcompany',component: mysetcompany},
        {path: '/myset/mysetproject',component: mysetproject},
        {path: '/myset/mysetdevice',component: mysetdevice},
        {path: '/myset/mysetuser',component: mysetuser},
        {path: '/myset/mysetcamera',component: mysetcamera},
        {path: '/myset/mysetalarm',component: mysetalarm},
        {path: '/myset/mysetlog',component: mysetlog}
      ]
    }
  ]
})
