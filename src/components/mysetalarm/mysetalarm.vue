<template>
  <!-- <div id="mysetcompany" v-if="this.$route.path=='/mysetcompany'"> -->
  <div id="mysetAlarm">
    <div class="divTabAlarm">
      <table class="tabAlarm">
        <tr>
          <td>报警时间</td>
          <td>报警设备</td>
          <td>报警类型</td>
          <td>报警状态</td>
          <td>报警描述</td>
          <td>处理意见</td>
          <td>处理人员</td>
          <td>删除记录</td>
        </tr>
        <tr>
          <td>2019/10/10</td>
          <td>联创探测器</td>
          <td>漏电报警</td>
          <td>已处理</td>
          <td>大电流漏电</td>
          <td>排查线路</td>
          <td>姜工</td>
          <td>
            <a href="#">删除</a>
          </td>
        </tr>
        <tr>
          <td>2019/10/10</td>
          <td>联创探测器</td>
          <td>漏电报警</td>
          <td>已处理</td>
          <td>大电流漏电</td>
          <td>排查线路</td>
          <td>姜工</td>
          <td>
            <a href="#">删除</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import dlgconfirm from "../dlgconfirm/dlgconfirm.vue";
import dlgcompany from "../dlgcompany/dlgcompany.vue";
export default {
  name: "mysetAlarm",
  components: {
    dlgconfirm,
    dlgcompany
  },
  data() {
    return {
      isDlgCompany: false
    };
  },
  methods: {
    closeDlgCompany () {
      this.isDlgCompany = false
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetAlarm
  background-color red
  .divTabAlarm
    position absolute
    left 150px
    // width 1100px
    margin-top 120px
    background-color green
    .tabAlarm
      tr
        td
          padding 10px 25px
          // background-color yellow
          border 1px solid #000
          color #E7EAED
      tr:nth-child(odd)
        background-color #131313
      tr:nth-child(even)
        background-color #383838
</style>
