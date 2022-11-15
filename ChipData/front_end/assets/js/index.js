function setLeftTopChart() {
    // 基于准备好的dom，初始化echarts实例
    var leftTopChart = echarts.init(document.getElementById('left1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'model',
            textStyle: {
                color: "#fff"
            },
        },

        tooltip: {},
        legend: {
            data: ['number'],
            textStyle: {
                color: "#fff"
            },
        },
        xAxis: {
            data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {},
        series: [
            {
                name: 'number',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
            },

        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    leftTopChart.setOption(option);
}

function setMidTopChart() {
    var midTopChart = echarts.init(document.getElementById('mid1'));

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        };
    }

    let data = [];
    let now = new Date(1997, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }
    option = {
        title: {
            text: 'Dynamic Data & Time Axis'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return (
                    date.getDate() +
                    '/' +
                    (date.getMonth() + 1) +
                    '/' +
                    date.getFullYear() +
                    ' : ' +
                    params.value[1]
                );
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: 'Fake Data',
                type: 'line',
                showSymbol: false,
                data: data
            }
        ]
    };
    setInterval(function () {
        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
        midTopChart.setOption({
            series: [
                {
                    data: data
                }
            ]
        });
    }, 1000);

    // 使用刚指定的配置项和数据显示图表。
    midTopChart.setOption(option);
}

function setRightTopChart() {
    // 基于准备好的dom，初始化echarts实例
    var radar = echarts.init(document.getElementById('right1'));
    option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            data: ['第一标准', '第二标准', '第三标准'],
            x: "center",
            y: 'bottom',
            textStyle: {
                color: "#fff"
            }
        },
        color: ['#4c95d9', '#f6731b', '#8cd43f'],
        radar: {
            name: {
                textStyle: {
                    //设置颜色
                    color: '#fff'
                }
            },
            indicator: [
                {name: 'test1', max: 6500},
                {name: 'test2', max: 16000},
                {name: 'test3', max: 30000},
                {name: 'test4', max: 38000},
                {name: 'test5', max: 52000},
                {name: 'test6', max: 25000}
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
                    value: [2400, 10000, 28000, 35000, 50000, 19000],
                    name: '第一标准'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '第二标准'
                },
                {
                    value: [6000, 14000, 18000, 21000, 32000, 11000],
                    name: '第三标准'
                }
            ]
        }]
    };
    radar.setOption(option);
}

function setLeftBottomChart() {
    var leftBottomChart = echarts.init(document.getElementById('left2'));
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
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value;
                for (var i = 0; i < option.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + ' ' + oa[i].value;
                    }
                }
            },
            data: ['test1', 'test2', 'test3', 'test4', 'test5', 'text6']
        },
        series: [
            {
                name: 'FK',
                type: 'pie',
                radius: '45%',
                color: ['#27c2c1', '#9ccb63', '#fcd85a', '#60c1de', '#0084c8', '#d8514b'],
                center: ['38%', '50%'],
                data: [
                    {value: 335, name: 'test1'},
                    {value: 310, name: 'test2'},
                    {value: 234, name: 'test3'},
                    {value: 135, name: 'test4'},
                    {value: 234, name: 'test5'},
                    {value: 234, name: 'text6'}
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
    leftBottomChart.setOption(option);
}

function setMidBottomChart() {
    var midBottomChart = echarts.init(document.getElementById('mid2'));
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
                data: ['2021年', '2022年', '2023年', '2024年', '2025年'],
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
                name: '嘎嘎',
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
                name: '哈哈',
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
                data: [2, 4, 7, 23, 25],
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
                data: [1.0, 0.5, 0.8, 0.9, 0.6]
            }
        ]
    };
    midBottomChart.setOption(option);
}

function setRightBottomChart() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var data = null;
    xmlhttp.open("GET", "http://localhost:8080/chip/findPart/5", true);
    xmlhttp.responseType = 'json';
    xmlhttp.onload = function (e) {
        if (this.status == 200) {
            console.log('response', this.response)
            data = this.response
            console.log("this is data")
            console.log(data[0])
            let tbody = document.getElementById("tbody");
            // for (let i = 0; i < data.length; i++) {
            for (let i = 0; i < 5; i++) {
                var tr = document.createElement("tr");
                let cnt = 0;
                for (var key in data[i]) {
                    cnt++;
                    if (cnt > 4) break;
                    var td = document.createElement("td");
                    td.innerHTML = data[i][key];
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }
        } else {
            console.log('error')
        }
    };
    xmlhttp.send();
}
