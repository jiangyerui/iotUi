<template>
  <div id="monthcount">
    <div class="tl"><h1>本月统计</h1></div>
    <div id="context"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'monthcount',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('context'))
      // console.log(document.getElementById('context'))
      // 绘制图表
      myChart.setOption({
        // title: { text: '123' },
        tooltip: {},
        xAxis: {
          data: ['报警', '故障', '失联', '异常']
        },
        yAxis: {},
        series: [{
          name: '次数',
          type: 'bar',
          data: [55, 70, 80, 30]
        }]
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#monthcount
  // background-color #131313
  background-color rgba(19,19,19,0.8)
  border 3px solid #383838
  border-radius 20px
  .tl
    width 300px
    // background-color #1E1E1E
    h1
      position relative
      top 5px
      width 250px
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
  #context
    width 250px
    height 190px
</style>
