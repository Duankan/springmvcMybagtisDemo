<%--
  Created by IntelliJ IDEA.
  User: ljiu
  Date: 2018/6/28
  Time: 10:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>echarts例子</title>
    <script src="/static/js/echarts.js"></script>
    <script src="//cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
<div id="main" style="width: 600px;height: 500px"></div><!--还得指定高度？？？？-->
<div id="main2" style="width: 600px;height: 500px"></div>
</body>
<script>
    //初始化
    var mychart = echarts.init(document.getElementById('main'));
    var mychart2 = echarts.init(document.getElementById('main2'));
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

   mychart.setOption(option1);
    mychart2.setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ]
            }
        ]
    });
</script>
</html>
