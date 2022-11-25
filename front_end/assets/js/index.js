function Resize(chart) {
    window.addEventListener("resize", () => {
        chart.resize();
    });
}

function setLeftTopChart() {
    // 基于准备好的dom，初始化echarts实例
    var leftTopChart = echarts.init(document.getElementById('left1'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '当月产能',
            textStyle:{
                color: "#fff"
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            name: '趋势/片',
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#23303f'
                }
            },
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ],
        textStyle:{
            color: "#fff"
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    leftTopChart.setOption(option);
    // Resize(leftTopChart);
}

function setMidTopChart() {
    // var midTopChart = echarts.init(document.getElementById('mid1'));
    // 使用刚指定的配置项和数据显示图表。
    // midTopChart.setOption(option);
}

function setRightTopChart() {
    var rightTopChart = echarts.init(document.getElementById('right1'));

    option = {
        textStyle:{
            color: "#fff"
        },
        title: {
            text: '当前设备故障',
            top: 'top',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['10nm', '7nm', '5nm', '3nm'],
            top: '10%',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
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
            },
        },
        series: [
            {
                name: '10nm',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '7nm',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '5nm',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '3nm',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };

    rightTopChart.setOption(option);
}

function setLeftMidChart() {
    var leftMidChart = echarts.init(document.getElementById('left2'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y: 'middle',
            textStyle: {
                color: "#fff"
            },

            formatter: function (name) {
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value;
                for (var i = 0; i < option.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + ' ' + oa[i].value;
                    }
                }
            },
            data: ['设备故障', '订单减少', '质量问题', '排产计划延迟', '原材料供应不足']
        },
        series: [
            {
                name: 'FK',
                type: 'pie',
                radius: '45%',
                color: ['#27c2c1', '#9ccb63', '#fcd85a', '#60c1de', '#0084c8'],
                center: ['38%', '50%'],
                data: [
                    {value: 335, name: '设备故障'},
                    {value: 310, name: '订单减少'},
                    {value: 234, name: '质量问题'},
                    {value: 135, name: '排产计划延迟'},
                    {value: 234, name: '原材料供应不足'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
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
    };

    // 使用刚指定的配置项和数据显示图表。
    leftMidChart.setOption(option);
}

function setMidMidChart() {
    // 基于准备好的dom，初始化echarts实例
    var radar = echarts.init(document.getElementById('mid2'));
    option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            data: ['原因分析'],
            x: "center",
            y: 'bottom',
            textStyle: {
                color: "#fff"
            }
        },
        color: ['#4c95d9'],
        radar: {
            name: {
                textStyle: {
                    //设置颜色
                    color: '#fff'
                }
            },
            indicator: [
                {name: '桥接短路', max: 6500},
                {name: '开路故障', max: 16000},
                {name: '延迟缺陷', max: 30000},
                {name: '高电阻', max: 38000},
                {name: '连通性', max: 52000},
            ],
            center: ['50%', '50%'],
            radius: "58%"
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
                            return params.value;
                        }
                    },
                }
            },
            data: [
                {
                    value: [2400, 10000, 28000, 35000, 50000],
                    name: '原因分析'
                }
            ]
        }]
    };
    radar.setOption(option);
}

function setRightMidChart() {
    // var rightMidChart = echarts.init(document.getElementById('right2'));
    //
    // // 指定图表的配置项和数据

    //
    // // 使用刚指定的配置项和数据显示图表。
    // rightMidChart.setOption(option);
}

function setLeftBottomChart() {
    var leftBottomChart = echarts.init(document.getElementById('left3'));
    option = {
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
                        color: "#fff"
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
                name: '片',
                nameTextStyle: {
                    color: '#fff'
                },
                interval: 5,
                max: 50,
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
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0

                }
            },
            {
                min: 0,
                max: 2.5,
                interval: 0.5,
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
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0

                }
            }
        ],
        color: "yellow",
        series: [
            {
                name: 'test1',
                type: 'bar',
                data: [2, 4, 7, 23],
                boundaryGap: '45%',
                barWidth: '40%',

                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd'
                            ];
                            return colorList[params.dataIndex]
                        }, label: {
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
                data: [1.0, 0.5, 0.8, 0.9]
            }
        ]
    };
    leftBottomChart.setOption(option);
}

function setMidBottomChart() {
    var rightTopChart = echarts.init(document.getElementById('mid3'));
    option = {
        textStyle:{
            color: "#fff"
        },
        title: {
            text: '近七天质量问题趋势',
            top: 'top',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['10nm', '7nm', '5nm', '3nm'],
            top: '10%',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#23303f'
                }
            },
        },
        series: [
            {
                name: '10nm',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '7nm',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '5nm',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '3nm',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };

    rightTopChart.setOption(option);
}

function setRightBottomChart() {
    var rightTopChart = echarts.init(document.getElementById('right3'));
    option = {
        textStyle:{
            color: "#fff"
        },
        title: {
            text: '厂房环境监测',
            top: 'top',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['温度', '尘埃'],
            top: '10%',
            left: 'center',
            textStyle:{
                color: "#fff"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#23303f'
                }
            },
        },
        series: [
            {
                name: '温度',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '尘埃',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };

    rightTopChart.setOption(option);
}
