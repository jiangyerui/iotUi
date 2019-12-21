<template>
  <div id='devcount'>
    <div class="tl"><h1>设备状态</h1></div>
    <table class="tb">
      <tr class="tr">
        <td>总数</td><td><div class="d1"></div></td><td>5321</td><td><div class="d1"></div></td><td>100%</td>
      </tr>
      <tr class="tr">
        <td>在线</td><td><div class="d2"></div></td><td>5213</td><td><div class="d2"></div></td><td>98%</td>
      </tr>
      <tr class="tr">
        <td>报警</td><td><div class="d3"></div></td><td>{{alarmLogs.length}}</td><td><div class="d3"></div></td><td>5%</td>
      </tr>
      <tr class="tr">
        <td>故障</td><td><div class="d4"></div></td><td>5</td><td><div class="d4"></div></td><td>0.5%</td>
      </tr>
      <tr class="tr">
        <td>失联</td><td><div class="d5"></div></td><td>2</td><td><div class="d5"></div></td><td>0.02%</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'devcount',
  computed: {
    ...mapState([
      "indexdevpros",
      "alarmLogs",
      "devicedata"
    ])
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#devcount
  // background-color #131313
  background-color rgba(19,19,19,0.8)
  border 3px solid #383838
  border-radius 20px
  .tb
    position relative
    top 0px
    left 20px
    .tr
      // background-color green
      height 35px
      div
        // display inline
        position relative
        top 5px
        // left 10px
        // right 5px
        margin-left 20px
        margin-right 10px
        width 20px
        height 20px
        border-radius 20px
        background-color yellow
      .d1
        background-color #1E1E1E
      .d2
        background-color green
      .d3
        background-color red
      .d4
        background-color yellow
      .d5
        background-color #333300
      td
        color #E7EAED
        // text-height 30px
        // border-bottom 2px solid red
  .tl
    // background-color #383838
    h1
      position relative
      top 5px
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
</style>
