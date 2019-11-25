<template>
  <div id="devsys" v-if="this.$route.path=='/devsys'">
    <div class="logo">
      <img src="../../common/img/logo.jpg" />
      <span>雪鹰云</span>
    </div>
    <router-link class="myset" to="/myset">
      <img src="../myset/img/myset.png" />
      <font>系统配置</font>
    </router-link>
    <div class="tabCard">
      <div id="head">
        <ul>
          <li id="L1" @click="Tab(1)">
            <a href="#">智慧消防</a>
          </li>
          <li id="L2" @click="Tab(2)">
            <a href="#">智能照明</a>
          </li>
          <li id="L3" @click="Tab(3)">
            <a href="#">智慧浪涌</a>
          </li>
          <li id="L4" @click="Tab(4)">
            <a href="#">智能电力</a>
          </li>
        </ul>
      </div>

      <div id="d1">
        <ul>
          <li>
            <router-link to="/home">
              <img src="./img/gongyede-.png" />
              <font>智慧用电监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_1.png" />
              <font>电气火灾监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_2.png" />
              <font>消防电源监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_3.png" />
              <font>消防电机监控系统</font>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="d2">
        <ul>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_4.png" />
              <font>智能室内照明管理系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_5.png" />
              <font>智能室外照明管理系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_6.png" />
              <font>智能应急照明监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_7.png" />
              <font>智能疏散照明监控系统</font>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="d3">
        <ul>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_8.png" />
              <font>电涌保护器监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_9.png" />
              <font>信号防雷监控系统</font>
            </router-link>
          </li>
        </ul>
      </div>
      <div id="d4">
        <ul>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_10.png" />
              <font>智能断路器监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_11.png" />
              <font>智能互投监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_1.png" />
              <font>智能电力仪表监控系统</font>
            </router-link>
          </li>
          <li @click="tip()">
            <router-link to="#">
              <img src="./img/gongyede-_2.png" />
              <font>电力电容监控系统</font>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "devsys",
  mounted() {
    // console.log('devsys:'+this.$route.path)
  },
  methods: {
    tip() {
      alert("您暂未开通此系统功能，详情咨询010-59777836");
    },
    Tab(num) {
      var i;
      for (i = 1; i <= 4; i++) {
        if (i === num) {
          document.getElementById("d" + i).style.display = "block";
        } else {
          document.getElementById("d" + i).style.display = "none";
        }
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#devsys
  position absolute
  background-color #131313
  height 900px
  width 100%
  .myset
    // background-color red
    position absolute
    top 10px
    right 15px
    img
      width 25px
      vertical-align middle
      margin-right 8px
    font
      color #F2F2F2
      font-size 20px
      vertical-align middle
  .logo
    position absolute
    top 10px
    left 10px
    img
      height 35px
      vertical-align middle // 居中对齐
    span
      font-size 25px
      color #F2F2F2
      border-left 3px solid #F2F2F2
      padding-left 15px
      margin-left 15px
      vertical-align middle // 居中对齐
  .tabCard
    position absolute
    top 200px
    left 300px
    color #F2F2F2
    #head
      // width: 400px
      height 30px
    #head ul
      padding 0
      margin 0
    #head ul li
      list-style none
      float left
      text-decoration none
      display block
      width 230px
      padding 5px
      margin 0px 10px 0px 0px
      position relative
    #head ul li a
      text-decoration none
      color #F2F2F2
    #head ul li a:visited
      text-decoration none
      color #F2F2F2
    #L1
      background-color #9CC
      // border-top-color #F6C
      // border-right-color #F6C
      // border-left-color #F6C
    #L2
      background-color #CC9
      // border-color #309
      margin-left 1px
    #L3
      background-color orange
      // border-color #360
    #L4
      background-color #690
      // border-color #360
    #d1
      background-color #9CC
      // border 1px solid #C39
      width 950px
      height 220px
      margin-top 0px
      position absolute
      z-index 1
      ul
        display flex
        li:hover
          background-color blue
        li
          margin 30px 40px
          a
            color #F2F2F2
            img
              width 100px
              margin-bottom 20px
            font
              font-size 18px
              display block
    #d2
      background-color #CC9
      // border 1px solid #309
      display none
      width 950px
      height 220px
      margin-top 0px
      position absolute
      z-index 1
      ul
        display flex
        li:hover
          background-color blue
        li
          margin 30px 40px
          a
            color #F2F2F2
            img
              width 100px
              margin-bottom 20px
            font
              font-size 18px
              display block
    #d3
      background-color orange
      // border 1px solid #360
      display none
      width 950px
      height 220px
      margin-top 0px
      position absolute
      z-index 1
      ul
        display flex
        li:hover
          background-color blue
        li
          margin 30px 40px
          a
            color #F2F2F2
            img
              width 100px
              margin-bottom 20px
            font
              font-size 18px
              display block
    #d4
      background-color #690
      // border 1px solid #360
      display none
      width 950px
      position absolute
      height 220px
      margin-top 0px
      z-index 1
      ul
        display flex
        li:hover
          background-color blue
        li
          margin 30px 40px
          a
            color #F2F2F2
            img
              width 100px
              margin-bottom 20px
            font
              font-size 18px
              display block
</style>
