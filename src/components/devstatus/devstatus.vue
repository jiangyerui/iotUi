<template>
  <div id="devstatus">
    <div class="tl"><h1>设备统计</h1></div>
    <div class="pie">
      <div id="pie1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="float:left;width:100%;height:230px"></div>
      </div>
    </div>
  </div>
</template>

<script>// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  created () {
  },
  mounted () {
    this.initData()
  },
  methods: {
    // 初始化数据
    initData () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: ''// 主标题
          // subtext: '纯属虚构',// 副标题
          // x: 'center'// x轴方向对齐方式
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: ['总数', '在线', '故障', '失联']
        },
        series: [
          {
            name: '设备数据',
            type: 'pie',
            radius: '60%',
            center: ['50%', '45%'],
            data: [
              {value: 335, name: '总数'},
              {value: 310, name: '在线'},
              {value: 234, name: '故障'},
              {value: 135, name: '失联'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 1)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#devstatus
  // background-color #131313
  background-color rgba(19,19,19,0.8)
  border 3px solid #383838
  border-radius 20px
  .tl
    // background-color #1E1E1E
    h1
      position relative
      top 5px
      height 20px
      color #E7EAED
      text-align center
      font-size 16px
      font-weight bold
</style>
