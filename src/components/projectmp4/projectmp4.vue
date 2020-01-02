<template>
  <div id="projectimg">
    <div class="tl">
      <h1>视频监控</h1>
    </div>
    <!-- <video width="370" height="260" poster="./img/camre.png" controls loop>
      <source src="./img/111.mp4" type="video/mp4">
      您的浏览器不支持Video标签。
    </video>-->
    <!-- <iframe
      src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D47010197/1.hd.live&autoplay=1&accessToken=at.7gpob0za7rrx157jbpkxcb434fq8rj9u-2h6cyj2uew-1r6v1dh-easgppvyo"
      width="360"
      height="260"
      id="ysOpenDevice"
      allowfullscreen
    ></iframe>-->
    <iframe v-bind:src="url" width="360" height="260" id="ysopen" allowfullscreen></iframe>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'projectimg',
  computed: {
    ...mapState([
      "indexdevpros"
    ])
  },
  data() {
    return {
      url: ""
      // url: "https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/D47010197/1.hd.live&autoplay=0&accessToken=at.czzsokhic1obtfa7ac95ixqbb6f1ma8i-5q5h7qqrdt-1d97ri1-42bulo5ud"
    }
  },
  mounted() {
  },
  methods: {
    checkUrl(mac) {
      this.indexdevpros.forEach(element => {
        element.deviceGroups.forEach(item => {
          if (item.device.deviceNo === mac) {
            this.url = item.camera.cameraUrl + "&autoplay=0&accessToken=" + item.camera.cameraApiKey
          }
        });
      });
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#projectimg
  background-color #131313
  border 3px solid #383838
  border-radius 20px
  // video
  // width 100%
  // height 280px
  // border-radius 10px
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
</style>
