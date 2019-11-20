<template>
  <div id='projectimg'>
    <div class="tl"><h1>视频监控</h1></div>
    <video width="370" height="260" poster="./img/camre.png" controls loop>
      <source src="./img/111.mp4" type="video/mp4">
      您的浏览器不支持Video标签。
    </video>
  </div>
</template>
<script>
export default {
  name: 'projectimg'
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#projectimg
  background-color #131313
  border 3px solid #383838
  border-radius 20px
  video
    width 100%
    height 280px
    border-radius 10px
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
