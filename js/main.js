$(function(){
    // 图表
    var graphics = {
        line : function(){
            var myChart = echarts.init($("#gastos_hogar")[0]);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                grid : {
                    x : 50
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['MAY', 'JUN', 'JUL', 'AGO', 'SEP'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} €',
                        textStyle: {
                            color: 'rgba(255,255,255,0.3)'
                        }
                    },
                    max : 3000,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.3)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisPointer: {
                        snap: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [{
                        lte: 1,
                        color: '#D8BE75'
                    }, {
                        gt: 1,
                        lte: 2,
                        color: '#E6D5A7'
                    }, {
                        gt: 2,
                        lte: 3,
                        color: '#D8BE75'
                    }, {
                        gt: 3,
                        lte: 4,
                        color: '#E6D5A7'
                    }]
                },
                series: [
                    {
                        name:'GASTOS HOGAR',
                        type:'line',
                        symbol : 'none',
                        data: [600, 800, 550, 920, 770],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        pie_circle : function(){
            var myChart = echarts.init($("#my_expenses")[0]);
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color : ["#D8BE75","#25ABB6","#2A86CA","#F35E61"],
                series: [
                    {
                        name:'MY EXPENSES',
                        type:'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:235, name:'name1'},
                            {value:264, name:'name2'},
                            {value:234, name:'name3'},
                            {value:335, name:'name4'}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        },
        bar : function(){
            var myChart = echarts.init($("#gastos_past_data")[0]);
            var option = {
                grid : {
                    x:20,
                    x2:20,
                    y:30,
                    y2 : 80
                },
                color : ["#2DCDCD"],
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel : {
                        show : false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    barWidth : 18,
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };
            myChart.setOption(option);
        },
        tiny_line : function(dom,color){
            var myChart = echarts.init($("#"+dom)[0]);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['MAY', 'JUN', 'JUL'],
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisPointer: {
                        snap: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [{
                        lte: 1,
                        color: '#fff'
                    }, {
                        gt: 1,
                        lte: 2,
                        color: color
                    }]
                },
                series: [
                    {
                        name:'GASTOS HOGAR',
                        type:'line',
                        symbol : 'none',
                        data: [500,800,500],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        line_chart : function(){
            var myChart = echarts.init($("#line_chart_middle_left_bottom")[0]);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                grid : {
                    x : 20,
                    x2 : 20
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['11:30', '12:30', '13:30', '14:30', '15:30','16:30'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisPointer: {
                        snap: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        name:'noname',
                        type:'line',
                        symbol : 'none',
                        smooth : true,
                        color : ['#FF555F'],
                        data: [600, 800, 900, 800, 550,650],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    },
                    {
                        name:'noname',
                        type:'line',
                        symbol : 'none',
                        smooth : true,
                        color : ['#2DCDCD'],
                        data: [800, 1000, 1200, 1000, 750,900],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        middle_bar_chart : function(){
            var myChart = echarts.init($("#top_part_chart")[0]);
            var option = {
                title : {
                    text : 'Gastos e Ingresos',
                    textStyle : {
                        fontWeight : 'normal',
                        color : '#A4BCD1',
                        fontSize : 15
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend : {
                    show : true,
                    x: 'right',
                    y: 'top',
                    itemWidth: 20,
                    itemHeight: 10,
                    textStyle : {
                        color : '#A4BCD1'
                    }
                },
                grid : {
                    x : 40,
                    x2 : 20
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: true,
                    data: ['11:30', '12:30', '13:30', '14:30', '15:30','16:30','11:30', '12:30', '13:30', '14:30', '15:30','16:30','11:30', '12:30', '13:30', '14:30', '15:30','16:30'],
                    axisTick: {
                        show: false
                    },
                    silent: false,
                    axisLine: {
                        show: true,
                        onZero: true,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(0,0,0,0.3)'],
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                series: [
                    {
                        name:'noname1',
                        type:'bar',
                        symbol : 'none',
                        smooth : true,
                        color : ['#FF555F'],
                        barWidth : 10,
                        stack: 'one',
                        data: [-600, -800, -900, -800, -550,-650,-600, -800, -900, -800, -550,-650,-600, -800, -900, -800, -550,-650],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    },
                    {
                        name:'noname2',
                        type:'bar',
                        symbol : 'none',
                        smooth : true,
                        color : ['#2DCDCD'],
                        barWidth : 10,
                        stack: 'one',
                        data: [800, 1000, 1200, 1000, 750,900,800, 1000, 1200, 1000, 750,900,800, 1000, 1200, 1000, 750,900],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        middle_scatter : function(dom,color){
            var myChart = echarts.init($("#"+dom)[0]);
            var option = {
                title : {
                    text : 'Categorias Ingresos',
                    textStyle : {
                        fontWeight : 'normal',
                        color : '#A4BCD1',
                        fontSize : 15
                    }
                },
                grid : {
                    x : 0,
                    y : 90
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    symbolSize: function (data) {
                        return Math.sqrt(data[2])*25;
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: function (param) {
                                return param.name;
                            },
                            color : '#A4BCD1',
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(param){
                                return color[param.dataIndex];
                            }
                        }
                    },
                    data: [
                        [2,4,4],
                        [1,1,10],
                        [5,3,3],
                        [4,2,15],
                        [6,2,2]
                    ],
                    symbol : 'diamond',
                    type: 'scatter'
                }]
            };
            myChart.setOption(option);
        },
        middle_line : function(){
            var myChart = echarts.init($("#expenses_evolution")[0]);
            var dataLength = 15;
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                grid : {
                    y : 20,
                    x : 50,
                    x2: 10,
                    y2: 10
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['JUN', 'JUN', 'JUL', 'AGO', 'SEP','JUN', 'JUN', 'JUL', 'AGO', 'SEP','MAY', 'JUN', 'JUL', 'AGO', 'SEP'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} €',
                        textStyle: {
                            color: 'rgba(255,255,255,0.3)'
                        }
                    },
                    max : 2000,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.3)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisPointer: {
                        snap: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces : (function(){
                        var pieces = [];
                        for(var i = 0;i < dataLength;i++){
                            if(i % 2 == 0)var color = '#D8BE75';
                            else color = '#E6D5A7';
                            pieces.push({
                                gt: i,
                                lte: i+1,
                                color : color
                            })
                        }
                        return pieces;
                    })()
                },
                series: [
                    {
                        name:'GASTOS HOGAR',
                        type:'line',
                        symbol : 'none',
                        data: [600, 800, 1000, 1420, 1700,1270, 900, 550, 920, 770,600, 800, 550, 920, 770],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        },
                        markPoint : {
                            symbolSize: 20,
                            itemStyle: {
                                normal: {
                                    borderColor: '#1e90ff',
                                    borderWidth: 1,
                                        label: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    borderColor: '#1e90ff',
                                    borderWidth: 5,
                                    label: {
                                        show: false
                                    }
                                }
                            },
                            effect : {
                                show: true,
                                shadowBlur : 0
                            },
                            data : [
                                {name: "MAY", value: 600}
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        scatter : function(){
            var myChart = echarts.init($("#ene")[0]);
            var color = ["#D8BE75","#2DCDCD","#5BBEFF","#F35E61"];
            var option = {
                grid : {
                    x : 0,
                    y : 150,
                    x2 : 0,
                    y2 : 0
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data : ['Home', 'Health', 'Transport', 'Clothes',"","",""]
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                    symbolSize: function (data) {
                        return Math.sqrt(data[2])*25;
                    },
                    label: {
                        normal: {
                            show: true,
                            offset : [30,0],
                            formatter: function( data ) {
                                return data.name + '\n{white|1000€}';
                            },

                            rich: {
                                white: {
                                    color: '#A4BCD1'
                                }
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(param){
                                return color[param.dataIndex];
                            }
                        }
                    },
                    data: [
                        [1,4,15],
                        [1,1,10],
                        [5,4,3],
                        [4,2,15]
                    ],
                    symbol : 'diamond',
                    type: 'scatter'
                }]
            };

            myChart.setOption(option);
        },
        bar_chart : function(){
            var myChart = echarts.init($("#septembre")[0]);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend : {
                    show : true,
                    x: 'right',
                    y: 'top',
                    itemWidth: 20,
                    itemHeight: 10,
                    textStyle : {
                        color : '#A4BCD1'
                    }
                },
                grid : {
                    x : 80,
                    x2 : 80
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: true,
                    data: ['MAY', 'JUN', 'JUL'],
                    axisTick: {
                        show: false
                    },
                    silent: false,
                    axisLine: {
                        show: false,
                        onZero: true,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        formatter : function(data){
                            return data + '€'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['rgba(0,0,0,0.3)'],
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                series: [
                    {
                        name:'noname1',
                        type:'bar',
                        symbol : 'none',
                        smooth : true,
                        color : ['#FF555F'],
                        barWidth : 10,
                        stack: 'one',
                        data: [-600, -800, -900],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    },
                    {
                        name:'noname2',
                        type:'bar',
                        symbol : 'none',
                        smooth : true,
                        color : ['#2DCDCD'],
                        barWidth : 10,
                        stack: 'one',
                        data: [800, 1000, 1200],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        line_bottom : function(){
            var myChart = echarts.init($("#gastosSalud")[0]);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                grid : {
                    x : 80,
                    x2 : 50
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['MAY', 'JUN', 'JUL', 'AGO', 'SEP'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#A4BCD1',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(255,255,255,0.3)'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} €',
                        textStyle: {
                            color: 'rgba(255,255,255,0.3)'
                        }
                    },
                    max : 3000,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.3)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisPointer: {
                        snap: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [{
                        lte: 1,
                        color: '#2A86CA'
                    }, {
                        gt: 1,
                        lte: 2,
                        color: '#5BBEFF'
                    }, {
                        gt: 2,
                        lte: 3,
                        color: '#2A86CA'
                    }, {
                        gt: 3,
                        lte: 4,
                        color: '#5BBEFF'
                    }]
                },
                series: [
                    {
                        name:'GASTOS HOGAR',
                        type:'line',
                        symbol : 'none',
                        data: [600, 800, 550, 920, 770],
                        itemStyle : {
                            normal : {
                                lineStyle : {
                                    width : 15
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        pie_chart : function(){
            var myChart = echarts.init($("#percentPie")[0]);
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color : ["#25ABB6",'transparent'],
                series: [
                    {
                        name:'MY EXPENSES',
                        type:'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter : function(params){
                                    return "900 00€"
                                },
                                textStyle : {
                                    fontSize : 22,
                                    color : "#25ABB6"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:800, name:'name1'},
                            {value:264, name:'name2'}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        }
    };

    // 数字递增
    function count() {
        // top
        new CountUp('num1', 0, 3980, 0, 2).start();
        new CountUp('num2', 0, 590, 0, 2).start();
        new CountUp('num3', 0, 89, 0, 2).start();
        new CountUp('num4', 0, 130, 0, 2).start();
        new CountUp('num5', 0, 150, 0, 2).start();
        new CountUp('num6', 0, 75, 0, 2).start();
        new CountUp('num7', 0, 75, 0, 2).start();
        new CountUp('num8', 0, 150, 0, 2).start();
        new CountUp('num9', 0, 75, 0, 2).start();
        new CountUp('num10', 0, 75, 0, 2).start();

        // middle
        new CountUp('num11', 0, 25000, 0, 2).start();
        new CountUp('num12', 0, 9000, 0, 2).start();
        new CountUp('num13', 0, 800, 0, 2).start();
        new CountUp('num14', 0, 200, 0, 2).start();
        new CountUp('num15', 0, 100, 0, 2).start();
        new CountUp('num16', 0, 232240, 0, 2).start();
        new CountUp('num17', 0, 35123, 0, 2).start();
        new CountUp('num18', 0, 18753, 0, 2).start();
        new CountUp('num19', 0, 2240, 0, 2).start();
        new CountUp('num20', 0, 987, 0, 2).start();
    }

    init();

    function init(){
        graphics.line();
        graphics.pie_circle();
        graphics.bar();
        graphics.tiny_line("food_dining","#D8BE75");
        graphics.tiny_line("shopping","#2DCDCD");
        graphics.line_chart();
        graphics.middle_bar_chart();
        graphics.middle_scatter("scatter1",["#2DDDDD","#93CCCD","#60E8DF","#2DCDCD","#7ACDCD"]);
        graphics.middle_scatter("scatter2",["#FF7679","#FFD3D3","#FF7676","#FF555F","#FFBCBC"]);
        graphics.middle_line();
        graphics.scatter();
        graphics.bar_chart();
        graphics.line_bottom();
        graphics.pie_chart();
        // 数字递增
        count();
    }
});