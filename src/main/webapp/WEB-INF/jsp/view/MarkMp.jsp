<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/5/18
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script type="text/javascript"
            src="http://webapi.amap.com/maps?v=1.4.0&key=cdd4cd14dda93c8acb90e48557152049"></script>
    <script type="text/javascript" src="https://webapi.amap.com/demos/js/liteToolbar.js"></script>
    <%--<script src="https://webapi.amap.com/js/marker.js"></script>--%>
    <style type="text/css">
        body,html,#container{
            height: 100%;
            margin: 0px;
            font: 12px Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial;
        }
        .info-title{
            color: white;
            font-size: 14px;
            background-color: rgba(0,155,255,0.8);
            line-height: 26px;
            padding: 0px 0 0 6px;
            font-weight: lighter;
            letter-spacing: 1px
        }
        .info-content{
            padding: 4px;
            color: #666666;
            line-height: 23px;
        }
        .info-content img{
            float: left;
            margin: 3px;
        }
    </style>
    <title>快速入门</title>
</head>
<body>
<div id="container" tabindex="0"></div>
<div id='panel'></div>
<script type="text/javascript">
    var map = new AMap.Map('container',{
        resizeEnable: true,
        zoom: 10,
        center: [116.480983, 40.0958]
    });
    var marker = new AMap.Marker({
        position: [116.480983, 39.989628]
    });
    marker.setMap(map);
    marker.on('click',function(e){
        infowindow.open(map,e.target.getPosition());
    })
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
        infowindow = new AMap.AdvancedInfoWindow({
            content: '<div class="info-title">高德地图</div><div class="info-content">'+
            '<img src="https://webapi.amap.com/images/amap.jpg">'+
            '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>'+
            '<a target="_blank" href = "https://mobile.amap.com/">点击下载高德地图</a></div>',
            offset: new AMap.Pixel(0, -30)
        });
        infowindow.open(map,[116.480983, 39.989628]);
    })
</script>

</body>
</html>
