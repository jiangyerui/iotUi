<template>
  <div id='devdata'>
    <div class="tl"><h1>设备数据</h1></div>
    <table>
      <tr><td>设备编号:</td><td>861192545431</td></tr>
      <tr><td>设备名称:</td><td>一层ALE箱</td></tr>
      <tr><td>所属项目:</td><td>联创大楼</td></tr>
      <tr><td>安全责任人:</td><td>姜工</td></tr>
      <tr><td>联系电话:</td><td>153255545555</td></tr>
      <tr><td>常用电压A相:</td><td style="color: green">220V</td></tr>
      <tr><td>常用电压B相:</td><td style="color: green">220V</td></tr>
      <tr><td>常用电压C相:</td><td style="color: green">230V</td></tr>
      <tr><td>备用电压A相:</td><td style="color: green">230V</td></tr>
      <tr><td>备用电压B相:</td><td style="color: green">220V</td></tr>
      <tr><td>备用电压C相:</td><td style="color: green">220V</td></tr>
      <tr><td>电流A相:</td><td style="color: green">10A</td></tr>
      <tr><td>电流B相:</td><td style="color: green">12A</td></tr>
      <tr><td>电流C相:</td><td>11A</td></tr>
      <tr><td>剩余电流1回路:</td><td>100mA</td></tr>
      <tr><td>剩余电流2回路:</td><td>20mA</td></tr>
      <tr><td>剩余电流3回路:</td><td>20mA</td></tr>
      <tr><td>剩余电流4回路:</td><td>25mA</td></tr>
      <tr><td>温度1回路:</td><td>20°C</td></tr>
      <tr><td>温度2回路:</td><td>21°C</td></tr>
      <tr><td>温度3回路:</td><td>20°C</td></tr>
      <tr><td>温度4回路:</td><td>22°C</td></tr>
      <tr><td>当前电量:</td><td>10Kw/h</td></tr>
      <tr><td>绝缘阻值:</td><td>21R</td></tr>
      <tr><td>烟雾探测器状态:</td><td>正常</td></tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'devdata',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    hh () {
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#devdata
  height 100%
  // background-color #131313
  background-color rgba(19,19,19,0.8)
  border 3px solid #383838
  border-radius 20px
  .tl
    // background-color #1E1E1E
    h1
      position relative
      top 5px
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
  table
    margin-top 10px
    tr
      // width 100%
      td
        width 150px
        height 25px
        color #E7EAED
        border 1px solid #000
        text-align center
        font-size 16px
</style>
