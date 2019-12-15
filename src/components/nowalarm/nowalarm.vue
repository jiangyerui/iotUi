<template>
  <div id="nowalarm">
    <div class="tl">
      <h1>实时报警</h1>
      <span @click="cui()">点击催单</span>
    </div>
    <div class="scroll">
      <ul :style="{top}" :class="{transition:index!=0}">
        <li v-for="item in alarmLogs" @click="hh" :key="item.no">
          {{item.alarmTime | dateFormat('yyyy-mm-DD hh:mm:ss')}}-电气火灾{{item.alarmDeviceId}}号设备{{item.alarmName}}
          <!-- 设备{{item.no}}-漏电报警 -->
        </li>
      </ul>
      <!-- <ul :style='{top}' :class='{transition:index!=0}'>
        <li v-for='item in list' @click='hh' :key="item.no">
          {{item.dt | dateFormat('yyyy-mm-DD hh:mm:ss')}}-电气火灾探测器{{item.no}}-漏电报警
        </li>
      </ul>-->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'nowalarm',
  data() {
    return {
      list: [{ dt: new Date(), no: '862545420', type: '电气火灾' },
      { dt: new Date(), no: '862545421', type: '电气火灾' },
      { dt: new Date(), no: '862545422', type: '电气火灾' },
      { dt: new Date(), no: '862545423', type: '电气火灾' },
      { dt: new Date(), no: '862545438', type: '电气火灾' },
      { dt: new Date(), no: '862545439', type: '电气火灾' }],
      top: '',
      index: 0,
      p: '',
      msg: '110',
      msg2: '119'
    }
  },
  mounted() {
    this.goScroll()
  },
  computed: {
    ...mapState(["alarmLogs"]),
    alarmToString: function () {
      var alarmTemp = ''
      this.list.forEach(item => {
        alarmTemp = alarmTemp + '警告，编号为' + item.no + item.type + '漏电报警，请及时处理。'
      })
      return alarmTemp
    }
  },
  methods: {
    hh() {
      console.log('120')
    },
    cui() {
      alert('您将以短信的方式通知相关安全责任人及时去处理当前报警列表！')
    },
    goScroll() {
      var _this = this
      this.p = setInterval(() => {
        _this.top = -30 * _this.index + 'px'
        if (_this.index >= this.alarmLogs.length + 1) {
          _this.index = 0
          _this.top = -0 + 'px'
          clearInterval(_this.p)
          this.goScroll()
        } else {
          _this.index++
        }
      }, 2000)
    }
  },
  destroyed() {
    clearInterval(this.p)
  },
  filters: {
    dateFormat: function (dateStr, pattern) {
      var dt = new Date(dateStr)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return y + '-' + m + '-' + d
      } else {
        var hh = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()
        if (hh < 10) {
          hh = '0' + hh
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        if (ss < 10) {
          ss = '0' + ss
        }
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
        // return y + '年' + m + '月' + d + '日' + hh + '时' + mm + '分' + ss + '秒'
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#nowalarm
  background-color #131313
  border 3px solid #383838
  border-radius 20px
  .tl
    // background-color #C0C0C0
    height 30px
    h1
      position relative
      display inline
      top 5px
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
    span
      position relative
      left 120px
      top 8px
      color #fff
      background-color orange
      border-radius 5px
      cursor pointer
  .scroll
    overflow hidden
    font-size 0px
    position relative
    z-index 0
    ul
      position relative
    .transition
      transition top 2s
      li
        overflow hidden
        line-height 30px
        text-align center
        font-size 14px
        color #E7EAED
      li:nth-of-type(odd)
        background #383838
      li:nth-of-type(even)
        background #252526
</style>
