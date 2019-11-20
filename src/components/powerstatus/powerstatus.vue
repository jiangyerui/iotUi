<template>
  <div id="powerstatus">
    <div class="tl"><h1>用电量分析</h1></div>
    <div id="line" style="width: 440px;height: 320px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'powerstatus',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine('line', '', ['一季度', '二季度', '三季度', '四季度'], '用电量', [120, 232, 471, 83])
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
        color: [ '#6a7985' ],
        // 标题样式
        title: {
          text: titleName,
          textStyle: {
            color: 'white'
          },
          left: 'center'
        },
        // 菜单
        legend: {
          show: false
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          position: 'top',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },// 图形位置
        grid: {
          left: '4%',
          right: '6%',
          bottom: '4%',
          top: 80,
          containLabel: true
        },
        // x轴
        xAxis: [ {
          type: 'category',
          // 坐标轴两边留白策略，即x轴坐标点开始与结束点位置都不在最边缘
          boundaryGap: true,
          axisLine: {
            show: true,
            // x轴线样式
            lineStyle: {
              color: '#17273B',
              width: 1,
              type: 'solid'
            }
          },
          // x轴字体设置
          axisLabel: {
            show: true,
            fontSize: 12,
            color: 'white'
          },
          data: xData
        } ],// y轴
        yAxis: [ {
          type: 'value',
          // y轴字体设置
          axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12
          },
          // y轴线设置不显示
          axisLine: {
            show: false
          },
          // 与x轴平行的线样式
          splitLine: {
            show: true,
            lineStyle: {
              color: '#17273B',
              width: 1,
              type: 'solid'
            }
          }
        } ],
        series: [ {
          name: seriesName,
          type: 'line',
          // 折线平滑
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          // 线条样式
          lineStyle: {color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [ {
              offset: 0,
              // 0% 处的颜色
              color: '#6ae6dd'
            }, {
              offset: 1,
              // 100% 处的颜色
              color: 'red'
            } ],
            globalCoord: false
          },
          width: 2,
          type: 'solid'
          },
          // 折线连接点样式
          itemStyle: {
            color: '#00E5DE'
          },
          // 折线堆积区域样式
          areaStyle: {
            color: '#004c5E'
          },
          data: seriesData
        } ]
      }
      myChart.setOption(myOption)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#powerstatus
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
  // #line
  //   width 500
  //   height 400
</style>
