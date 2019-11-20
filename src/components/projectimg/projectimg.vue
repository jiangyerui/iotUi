<template>
  <div id='projectimg'>
    <div class="tl"><h1>项目图片</h1></div>
    <img src="./img/projectimg.jpg" alt="">
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
  img
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
