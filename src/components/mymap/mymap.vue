<template>
  <div>
    <div id="allmap" class="allmap" @click="updatemapofmymap()"></div>
    <!-- <iframe id='myIframe' src='http://www.thingjs.com/pp/8e3b079e05059028856ef648' style="width:1530px;height:700px;"></iframe> -->
  </div>
</template>

<script>
import BMap from 'BMap'
import { mapState } from "vuex";
export default {
  name: 'mymap',

  data() {
    return {
      msg: 'hahaha',
      markerArr: [{ title: '天津', content: '我的备注', isAlarm: false, point: '117.214612|39.102162', isOpen: 0 },
      { title: '昆明', content: '我的备注', isAlarm: false, point: '102.73|25.04', isOpen: 0 },
      { title: '乌鲁木齐', content: '我的备注', isAlarm: false, point: '87.68|43.77', isOpen: 0 },
      { title: '长沙', content: '我的备注', isAlarm: false, point: '113|28.21', isOpen: 0 },
      { title: '哈尔滨', content: '我的备注', isAlarm: false, point: '126.63|45.75', isOpen: 0 },
      { title: '拉萨', content: '我的备注', isAlarm: false, point: '91.11|29.97', isOpen: 0 },
      { title: '杭州', content: '我的备注', isAlarm: true, point: '120.19|30.26', isOpen: 0 },
      { title: '延安', content: '我的备注', isAlarm: false, point: '109.47|36.6', isOpen: 0 }]
    }
  },
  computed: {
    ...mapState([
      "indexdevpros"
    ])
  },
  mounted() {
    // this.$store.dispatch("selectDeviceProjectsByCurrentUser");
    this.initMap()
  },
  methods: {
    updatemapofmymap() {
      // console.log('updatemapofmymap')
      this.addMarker()
    },
    clickIw() {
      // console.log("clickIw")
    },
    mapchanged() {
      // console.log("mapchange3d" + this.msg)
      this.$emit("emitmapdddone")
    },
    mapchange3d1() {
      // console.log("mapchange3d1")
      this.$emit("emitmapdddotther")
    },
    createInfoWindow(json) {
      // var json = markerArr[i]
      var iw = new BMap.InfoWindow('<b class=\'iw_poi_title\'>项目名称:' + json.project.projectName + '</b>' +
        '<div class=\'iw_poi_content\'> 项目地址:' + json.project.projectAddress + ' </div>' +
        '<div class=\'iw_poi_content\'> 安全责任人:姜工 </div>' +
        '<div class=\'iw_poi_content\'> <a ref=\'myiw\' id=\'iw' + json.project.projectId + '\'>点击进入项目3D >></a> </div>')
      return iw
    },
    // createIcon(json) {
    //   var icon = new BMap.Icon('http://a.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
    //     new BMap.Size(json.w, json.h), {
    //     imageOffset: new BMap.Size(-json.l, -json.t),
    //     infoWindowOffset: new BMap.Size(json.lb + 5, 1),
    //     offset: new BMap.Size(json.x, json.h)
    //   })
    //   return icon
    // },
    // 创建地图
    createMap() {
      var map = new BMap.Map('allmap')
      var point = new BMap.Point(105.404844, 33.916263)
      map.centerAndZoom(point, 5)// 设中心点
      map.disableDoubleClickZoom()// 禁用鼠标双击放大
      map.setMapStyle({ style: 'midnight' })
      // var ctrlNav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE })
      // map.addControl(ctrlNav)// 加控件
      window.map = map
    },
    // 设置地图事件
    setMapEvent() { },
    // 向地图添加控件
    addMapControl() {
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          // BMAP_NORMAL_MAP,
          // BMAP_HYBRID_MAP
        ]
      }))
    },
    // 加监听
    addLister(i, marker, label, json) {
      var _iw = this.createInfoWindow(json)
      var that = this
      var _marker = marker
      _marker.addEventListener('click', function () {
        // console.log(+'clickkk' + json.project.projectName)
        _marker.openInfoWindow(_iw)
        // this.openInfoWindow(_iw)
        // _marker.getLabel().hide()
      })
      _iw.addEventListener('open', function () {
        // _marker.getLabel().hide()
        // var that = this
        var domTemp = document.getElementById('iw' + json.project.projectId)
        document.getElementById('iw' + json.project.projectId).onclick = function (json) {
          // console.log('iw' + domTemp.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('id'))
          // domTemp.parentNode.parentNode.mapchange3d()
          if (domTemp.getAttribute('id') === 'iw1') {
            that.mapchanged()
            // that.$emit("emitmapdddone")
          } else {
            that.mapchange3d1()
          }
        }
      })
      // _iw.addEventListener('close', function () {
      //   _marker.getLabel().hide()
      // })
      _iw.addEventListener('close', function () {
        // console.log('labelclick')
        // _marker.getLabel().hide()
      })
      // label.addEventListener('click', function () {
      //   _marker.openInfoWindow(_iw)
      //   _marker.getLabel().hide()
      // })
      label.addEventListener('click', function () {
        // console.log('labelclick')
        // _marker.openInfoWindow(_iw)
        // _marker.getLabel().hide()
      })
      // if (!!json.project.projectIsOpen) {
      //   label.hide()
      //   _marker.openInfoWindow(_iw)
      // }
    },
    // 向地图中添加marker
    addMarker() {
      // 删除原来的marker
      // var allOverlay = map.getOverlays();
      // for (var j = 0; j < allOverlay.length; j++) {
      //   if (allOverlay[j].toString() === "[object Marker]") {
      //     map.removeOverlay(allOverlay[j]);
      //   }
      // }
      // 新增marker
      var _indexdevpros = this.indexdevpros
      // console.log('_indexdevpros.length = '+_indexdevpros.length)
      var myicon = { w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5 };
      // var isOpens = []
      for (var i = 0; i < _indexdevpros.length; i++) {
        // isOpens[i] = 0;
        // console.log(_indexdevpros[i].project.projectName)
        var json = _indexdevpros[i]
        var p0 = json.project.projectLongitude
        var p1 = json.project.projectLatitude
        var point = new BMap.Point(p0, p1)
        var marker = new BMap.Marker(point)
        // var label = new BMap.Label(json.title, {'offset': new BMap.Size(json.icon.lb - json.icon.x + 10, -20)})
        var label = new BMap.Label(json.project.projectName, { 'offset': new BMap.Size(myicon.lb - myicon.x + 10, -20) })
        marker.setLabel(label)
        marker.getLabel().hide()
        // console.log(json.project.projectDeviceStatus)
        if (json.project.projectDeviceStatus === 2) {
          marker.setAnimation(BMAP_ANIMATION_BOUNCE)
        }
        map.addOverlay(marker)
        label.setStyle({
          borderColor: '#808080',
          // color: '#333',
          color: '#fff',
          cursor: 'pointer'
        })
        this.addLister(i, marker, label, json)
      }
    },
    initMap() {
      this.createMap()
      this.setMapEvent()
      this.addMapControl()
      setTimeout(() => {
        this.addMarker()
      }, 1000);
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#allmap
  width 1535px
  height 700px
  .iw_poi_title
    color #CC5522
    font-size 14px
    font-weight bold
    overflow hidden
    padding-right 13px
    white-space nowrap
  .iw_poi_content
    font 12px arial, sans-serif
    overflow visible
    padding-top 4px
    white-space -moz-pre-wrap
    word-wrap break-word
</style>
