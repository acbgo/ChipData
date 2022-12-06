<template>
  <div class="MainPage">
    <div class="Head">
      <img src="../assets/img/logo.png" style="margin-top: 5px; margin-left: 10px; height: 45px">
      <span
        style="font-size: 28px; color: #00ffff; margin-left: 385px; margin-top: 20px">芯片制造价值链因果推断平台</span>
      <i class="el-icon-full-screen" @click="fullScreen"></i>
    </div>
    <div style="display: flex">
      <div class="One" id="one"></div>
      <div class="Two" id="two">
        <h3 style="color: #fff; display: flex">晶圆良率</h3>
        <img src="../assets/img/chip.png" id="chip">
      </div>
      <div class="Three" id="three"></div>
    </div>

    <div style="display: flex">
      <div class="Four" id="four"></div>
      <div class="Five" id="five"></div>
      <div class="Six" id="six">
        <h3 style="margin-left: -385px; font-size: 20px; color: white;">设备预警管理</h3>
        <table>
          <tr>
            <th>设备</th>
            <th>运行状态</th>
            <th>分析</th>
            <th>解决</th>
            <th>更新时间</th>
          </tr>
          <tbody id="tbody">
          </tbody>
        </table>
      </div>
    </div>

    <div style="display: flex">
      <div class="Seven" id="seven"></div>
      <div class="Eight" id="eight"></div>
      <div class="Nine" id="nine"></div>
    </div>
  </div>
</template>

<script>
import screenFull from 'screenfull/dist/screenfull'

export default {
  name: 'MainPage',
  data () {
    return {
      devices: []
    }
  },
  mounted () {
    this.setFirstChart()
    this.setThirdChart()
    this.setFourthChart()
    this.setFifthChart()
    this.setSixthChart()
    this.setSeventhChart()
    this.setEighthChart()
    this.setNinthChart()
  },
  methods: {
    fullScreen () {
      if (screenFull.isEnabled && !screenFull.isFullscreen) {
        screenFull.request()
      } else {
        screenFull.exit()
      }
    },
    getData (url) {
      let xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.send()
      return xmlHttp.response
    },

    setFirstChart () {
      // 基于准备好的dom，初始化echarts实例
      let one = this.$echarts.init(document.getElementById('one'))
      let data = this.getData('http://10.26.225.40:8080/chip/getProduction')
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '当月产能',
          top: 'top',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          name: '月份',
          type: 'category',
          data: []
        },
        yAxis: {
          name: '趋势/片',
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#23303f'
            }
          }
        },
        series: [
          {
            // data: [],
            type: 'line',
            color: '#ee9f0c'
          }
        ],
        textStyle: {
          color: '#fff'
        }
      }

      data = JSON.parse(data)
      option.series[0].data = []
      for (let i = 0; i < data.length; i++) {
        option.xAxis.data[i] = data[i]['month']
        option.series[0].data[i] = data[i]['cnt']
      }
      // 使用刚指定的配置项和数据显示图表。
      one.setOption(option)
    },

    setSecondChart () {

    },

    setThirdChart () {
      let three = this.$echarts.init(document.getElementById('three'))
      let option = {
        textStyle: {
          color: '#fff'
        },
        title: {
          text: '设备故障频次',
          top: 'top',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [],
          top: '10%',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name: '月份',
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          name: '次',
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#23303f'
            }
          }
        },
        series: [
          // {
          //     name: '10nm',
          //     type: 'line',
          //     stack: 'Total',
          //     data: [120, 132, 101, 134, 90, 230, 210]
          // }
        ]
      }
      let data = this.getData('http://10.26.225.40:8080/chip/getFailure')
      data = JSON.parse(data)
      let processing = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getProcessing'))
      option.legend.data = []
      for (let i = 0; i < processing.length; i++) {
        option.series.push({})
        option.legend.data.push(processing[i][(i + 1).toString()] + 'nm')
      }
      option.xAxis.data = []
      for (let i = 1; i <= 12; i++) {
        option.xAxis.data.push(i)
      }
      for (let i = 0; i < processing.length; i++) {
        option.series[i].name = processing[i][(i + 1).toString()] + 'nm'
        option.series[i].type = 'line'
        option.series[i].stack = 'Total'
        // option.series[i].left = '90%';
        option.series[i].data = []
        for (let j = 0; j < data.length; j++) {
          if (data[j]['processing'] === processing[i][(i + 1).toString()]) {
            option.series[i].data.push(data[j]['cnt'])
          }
        }
      }
      three.setOption(option)
    },

    setFourthChart () {
      let four = this.$echarts.init(document.getElementById('four'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '产能分析',
          top: 'top',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '0',
          y: 'middle',
          textStyle: {
            color: '#FFF'
          },

          formatter: function (name) {
            let oa = option.series[0].data
            // let num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value
            for (let i = 0; i < option.series[0].data.length; i++) {
              if (name === oa[i].name) {
                return name + ' ' + oa[i].value
              }
            }
          }
          // data: ['设备故障', '订单减少', '质量问题', '排产计划延迟', '原材料供应不足']

        },
        series: [
          {
            name: '原因分析',
            type: 'pie',
            radius: '45%',
            color: ['#27c2c1', '#9ccb63', '#fcd85a', '#60c1de', '#0084c8'],
            center: ['38%', '50%'],
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: ''
              },
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  formatter: '{b}'
                }
              },
              labelLine: {show: true}
            }
          }
        ]
      }
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getFactors'))
      option.series[0].data = []

      for (let i = 0; i < data.length; i++) {
        let t = {}
        t.value = data[i]['cnt']
        t.name = data[i]['factor']
        option.series[0].data.push(t)
      }
      // 使用刚指定的配置项和数据显示图表。
      four.setOption(option)
    },

    setFifthChart () {
      // 基于准备好的dom，初始化echarts实例
      let radar = this.$echarts.init(document.getElementById('five'))
      let option = {
        title: {
          text: '质量分析',
          top: '20px',
          left: '0px',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {},
        legend: {
          data: ['原因分析'],
          x: '70%',
          y: '15%',
          textStyle: {
            color: '#fff'
          }
        },
        color: ['#f5bd12'],
        radar: {
          name: {
            textStyle: {
              // 设置颜色
              color: '#fff'
            }
          },
          indicator: [
            {name: '桥接短路', max: 5000},
            {name: '开路故障', max: 10000},
            {name: '延迟缺陷', max: 10000},
            {name: '高电阻', max: 7500},
            {name: '连通性', max: 5000}
          ],
          center: ['50%', '50%'],
          radius: '58%'
        },
        series: [{
          name: '',
          type: 'radar',
          itemStyle: {
            normal: {
              splitLine: {
                lineStyle: {}
              },
              label: {
                show: false,
                textStyle: {},
                formatter: function (params) {
                  return params.value
                }
              }
            }
          },
          data: [
            // {
            //     value: [2400, 10000, 28000, 35000, 50000],
            //     name: '原因分析'
            // }
          ]
        }]
      }
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getFailureAnalysis'))
      option.series[0].data = []
      let valueData = []
      for (let i = 0; i < data.length; i++) {
        valueData.push(data[i]['cnt'])
      }
      let t = {}
      t.name = '原因分析'
      t.value = valueData
      option.series[0].data.push(t)
      radar.setOption(option)
    },

    setSixthChart () {
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getDevices'))
      let tbody = document.getElementById('tbody')
      let td = null
      for (let i = 0; i < 5; i++) { // 指定展示前 5 行
        let tr = document.createElement('tr')
        let cnt = 0
        for (let key in data[i]) {
          cnt++
          if (cnt === 1) continue // 筛掉 id 行
          if (cnt > 6) break
          td = document.createElement('td')
          td.innerHTML = data[i][key]
          td.style.border = '1px solid black'
          td.style.padding = '5px'
          td.style.backgroundColor = '#214754'
          td.style.textAlign = 'center'
          td.style.fontSize = '10px'
          td.style.color = 'white'
          tr.appendChild(td)
        }
        tbody.appendChild(tr)
      }
    },

    setSeventhChart () {
      let seven = this.$echarts.init(document.getElementById('seven'))
      let option = {
        title: {
          text: '产量趋势',
          top: '0px',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
        },
        toolbox: {
          show: false,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['', ''],
          show: false
        },
        grid: {
          top: '18%',
          right: '5%',
          bottom: '8%',
          left: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['10nm', '7nm', '5nm', '3nm'],
            splitLine: {
              show: false,
              lineStyle: {
                color: '#3c4452'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              lineStyle: {
                color: '#519cff'
              },
              alignWithLabel: true,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '实际产量',
            nameTextStyle: {
              color: '#fff'
            },
            interval: 20,
            max: 80,
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23303f'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#115372'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              alignWithLabel: true,
              interval: 0

            }
          },
          {
            min: 0,
            max: 80,
            interval: 20,
            type: 'value',
            name: '目标产量',
            nameTextStyle: {
              color: '#fff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23303f'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#115372'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              alignWithLabel: true,
              interval: 0

            }
          }
        ],
        color: 'yellow',
        series: [
          {
            name: 'test1',
            type: 'bar',
            data: [],
            // [2, 4, 7, 23],
            boundaryGap: '45%',
            barWidth: '40%',

            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    '#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd'
                  ]
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                }
              }
            }
          },

          {
            name: 'test2',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
              normal: {
                color: '#c39705'
              }
            },
            data: []
            // [1.0, 0.5, 0.8, 0.9]
          }
        ]
      }
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getProductionTrend'))
      option.series[0].data = []
      option.series[1].data = []
      for (let i = 0; i < data.length; i++) {
        option.series[0].data.push(data[i]['cnt'])
        option.series[1].data.push(data[i]['target'])
      }

      seven.setOption(option)
    },

    setEighthChart () {
      var rightTopChart = this.$echarts.init(document.getElementById('eight'))
      let option = {
        textStyle: {
          color: '#fff'
        },
        title: {
          text: '近七天质量问题趋势',
          top: 'top',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['10nm', '7nm', '5nm', '3nm'],
          top: '10%',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: '/次',
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#23303f'
            }
          }
        },
        series: [
          {
            name: '10nm',
            type: 'line',
            stack: 'Total',
            data: []
            // [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '7nm',
            type: 'line',
            stack: 'Total',
            data: []
            // [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '5nm',
            type: 'line',
            stack: 'Total',
            data: []
            // [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '3nm',
            type: 'line',
            stack: 'Total',
            data: []
            // [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      }

      option.series[0].data = []
      option.series[1].data = []
      option.series[2].data = []
      option.series[3].data = []
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getProblemTrend'))
      for (let i = 0; i < data.length; i++) {
        let processing = data[i]['processing']
        if (processing === 10) {
          option.series[0].data.push(data[i]['cnt'])
        } else if (processing === 7) {
          option.series[1].data.push(data[i]['cnt'])
        } else if (processing === 5) {
          option.series[2].data.push(data[i]['cnt'])
        } else if (processing === 3) {
          option.series[3].data.push(data[i]['cnt'])
        }
      }

      rightTopChart.setOption(option)
    },

    setNinthChart () {
      let rightTopChart = this.$echarts.init(document.getElementById('nine'))
      let option = {
        textStyle: {
          color: '#fff'
        },
        title: {
          text: '厂房环境监测',
          top: 'top',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['温度', '尘埃'],
          top: '10%',
          center: '0',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: [
          {
            type: 'value',
            name: '尘埃系数',
            nameTextStyle: {
              color: '#fff'
            },
            interval: 100,
            max: 400,
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23303f'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#115372'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              alignWithLabel: true,
              interval: 0

            }
          },
          {
            min: 10,
            max: 30,
            interval: 5,
            type: 'value',
            name: '温度',
            nameTextStyle: {
              color: '#fff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23303f'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#115372'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              alignWithLabel: true,
              interval: 0

            }
          }
        ],
        series: [
          {
            name: '温度',
            color: '#e3fd27',
            type: 'line',
            yAxisIndex: 1,
            stack: 'Total',
            data: []
            // [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '尘埃',
            color: '#0ecc7d',
            type: 'line',
            stack: 'Total',
            data: []
            // [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }

      option.series[0].data = []
      option.series[1].data = []
      let data = JSON.parse(this.getData('http://10.26.225.40:8080/chip/getEnvironment'))
      for (let i = 0; i < data.length; i++) {
        option.series[0].data.push(data[i]['temperature'])
        option.series[1].data.push(data[i]['concentration'])
      }
      rightTopChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.MainPage {
  background: url("../assets/img/bg.png");
  margin-top: 0;
}

.Head {
  height: 90px;
  display: flex;
  background: url("../assets/img/head.png") top center no-repeat;
}

.el-icon-full-screen {
  width: 18px;
  height: 18px;
  margin-left: 545px;
  margin-top: 15px;
  background-color: white
}

.One {
  padding-left: 0;
  width: 500px;
  height: 255px;
}

.Two {
  width: 500px;
  height: 255px;
}

.Three {
  width: 500px;
  height: 255px;
}

.Four {
  width: 500px;
  height: 237px;
}

.Five {
  width: 500px;
  height: 237px;
}

.Six {
  width: 540px;
  height: 237px;
}

.Seven {
  width: 500px;
  height: 282px;
}

.Eight {
  width: 500px;
  height: 282px;
}

.Nine {
  width: 500px;
  height: 282px;
}

table {
  border: 2px solid rgba(108, 146, 243, 0.34);
  border-collapse: separate;
  border-spacing: 5px;
  margin: 0 auto;
}

th {
  border: 2px solid rgba(108, 146, 243, 0.34);
  padding: 4px;
  background-color: darkturquoise;
  text-align: center;
  font-size: 15px;
}

td {
  border: 1px solid black;
  padding: 8px;
  background-color: #214754;
  text-align: center;
  /*更加灵活的位置摆放参考flex布局*/
  font-size: 8px;
}
</style>
