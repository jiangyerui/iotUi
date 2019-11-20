<template>
  <div id="alarmanalysis">
    <div class="tl"><h1>报警分析</h1></div>
    <div id="alarmline" style="width: 540px;height: 320px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'alarmanalysis',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine('alarmline', '', ['一季度', '二季度', '三季度', '四季度'], '用电量', [120, 232, 471, 83])
  },
  methods: {
    // 画折线图
    // @param container 容器
    // @param titleName 标题
    // @param xData x轴数据
    // @param seriesName 图表名称
    // @param seriesData 图表数据
    drawLine (container, titleName, xData, seriesName, seriesData) {
      var myChart = this.$echarts.init(document.getElementById(container))
      var myOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['本月报警','上月报警','平均报警']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '报警值',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} mA'
            }
          },
          {
            type: 'value',
            name: '报警值',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '本月报警',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '上月报警',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均报警',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      myChart.setOption(myOption)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#alarmanalysis
  background-color #131313
  border 3px solid #383838
  border-radius 20px
  .tl
    width 500
    // background-color #1E1E1E
    h1
      position relative
      top 10px
      width 500
      height 30px
      color #E7EAED
      text-align center
      font-size 18px
      font-weight bold
  #alarmline
    margin-top 30px
    margin-left 30px
</style>
