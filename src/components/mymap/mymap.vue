<template>
  <div>
    <!-- <div id='allmap' class='allmap'></div> -->
    <iframe id='myIframe' src='http://www.thingjs.com/pp/8e3b079e05059028856ef648' style="width:1530px;height:700px;"></iframe>
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'mymap',

  data () {
    return {
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    createInfoWindow (i) {
      // var json = markerArr[i]
      var iw = new BMap.InfoWindow('<b class=\'iw_poi_title\'>项目名称:联创广汇</b>' +
        '<div class=\'iw_poi_content\'> 项目地址:北京市通州区 </div>'+
        '<div class=\'iw_poi_content\'> 安全责任人:姜工 </div>' +
        '<div class=\'iw_poi_content\'> 点击进入项目 >> </div>')
      return iw
    },
    createIcon (json) {
      var icon = new BMap.Icon('http://a.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg',
        new BMap.Size(json.w, json.h), {imageOffset: new BMap.Size(-json.l, -json.t),
          infoWindowOffset: new BMap.Size(json.lb + 5, 1),
          offset: new BMap.Size(json.x, json.h)})
      return icon
    },
    // 创建地图
    createMap () {
      var map = new BMap.Map('allmap')
      var point = new BMap.Point(105.404844, 33.916263)
      map.centerAndZoom(point, 5)// 设中心点
      map.disableDoubleClickZoom()// 禁用鼠标双击放大
      map.setMapStyle({style: 'midnight'})
      var ctrlNav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE})
    	map.addControl(ctrlNav)// 加控件
      window.map = map
    },
    // 设置地图事件
    setMapEvent () {},
    // 向地图添加控件
    addMapControl () {
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }))
    },
    // 加监听
    addLister (i, marker, label, json) {
      var _iw = this.createInfoWindow(i)
      var _marker = marker
      _marker.addEventListener('click', function () {
        this.openInfoWindow(_iw)
        _marker.getLabel().hide()
      })
      _iw.addEventListener('open', function () {
        _marker.getLabel().hide()
      })
      _iw.addEventListener('close', function () {
        _marker.getLabel().hide()
      })
      label.addEventListener('click', function () {
        _marker.openInfoWindow(_iw)
        _marker.getLabel().hide()
      })
      if (!!json.isOpen) {
        label.hide()
        _marker.openInfoWindow(_iw)
      }
    },
    // 向地图中添加marker
    addMarker () {
      var markerArr = [{title: '天津', content: '我的备注', isAlarm: false, point: '117.214612|39.102162', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '昆明', content: '我的备注', isAlarm: false, point: '102.73|25.04', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '乌鲁木齐', content: '我的备注', isAlarm: false, point: '87.68|43.77', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '长沙', content: '我的备注', isAlarm: false, point: '113|28.21', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '哈尔滨', content: '我的备注', isAlarm: false, point: '126.63|45.75', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '拉萨', content: '我的备注', isAlarm: false, point: '91.11|29.97', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '杭州', content: '我的备注', isAlarm: true, point: '120.19|30.26', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}},
        {title: '延安', content: '我的备注', isAlarm: false, point: '109.47|36.6', isOpen: 0, icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}}]
      for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i]
        var p0 = json.point.split('|')[0]
        var p1 = json.point.split('|')[1]
        var point = new BMap.Point(p0, p1)
        var marker = new BMap.Marker(point)
        var label = new BMap.Label(json.title, {'offset': new BMap.Size(json.icon.lb - json.icon.x + 10, -20)})
        marker.setLabel(label)
        marker.getLabel().hide()
        if (markerArr[i].isAlarm) {
          marker.setAnimation(BMAP_ANIMATION_BOUNCE)
        }
        map.addOverlay(marker)
        label.setStyle({
          borderColor: '#808080',
          color: '#333',
          cursor: 'pointer'
        })
        this.addLister(i, marker, label, json)
      }
    },
    initMap () {
      this.createMap()
      this.setMapEvent()
      this.addMapControl()
      this.addMarker()
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#allmap
  width 1535px;
  height 700px;
  .iw_poi_title
    color: #CC5522
    font-size: 14px
    font-weight: bold
    overflow: hidden
    padding-right: 13px
    white-space: nowrap
  .iw_poi_content
    font: 12px arial,sans-serif
    overflow: visible
    padding-top: 4px
    white-space: -moz-pre-wrap
    word-wrap: break-word
</style>
