<template>
  <!-- <div id="mysetcompany" v-if="this.$route.path=='/mysetcompany'"> -->
  <div id="mysetLog">
    <div class="divTabLog">
      <table class="tabLog">
        <tr>
          <td>操作时间</td>
          <td>操作类型</td>
          <td>操作设备</td>
          <td>操作人员</td>
          <td>操作结果</td>
          <td>删除记录</td>
        </tr>
        <tr>
          <td>2019/10/10</td>
          <td>复位</td>
          <td>联创探测器</td>
          <td>姜工</td>
          <td>成功</td>
          <td>
            <a href="#">删除</a>
          </td>
        </tr>
        <tr>
          <td>2019/10/10</td>
          <td>复位</td>
          <td>联创探测器</td>
          <td>姜工</td>
          <td>成功</td>
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
  name: "mysetLog",
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
    closeDlgCompany() {
      this.isDlgCompany = false;
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#mysetLog
  background-color red
  .divTabLog
    position absolute
    left 150px
    // width 1100px
    margin-top 120px
    background-color green
    .tabLog
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
