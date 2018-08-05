<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <style type="text/css">
        body,html,#container{
            height: 1000%;
            /*width: 80%;*/
            margin: 0px;
        }
    </style>
    <%--<link rel="stylesheet" href="http://cache.amap.com/lbs/static/main1119.css"/>--%>
    <script type="text/javascript"
            src="http://webapi.amap.com/maps?v=1.4.0&key=cdd4cd14dda93c8acb90e48557152049"></script>
    <%--<script src="http://a.amap.com/jsapi_demos/static/demo-center/model/js/three.js"></script>--%>
    <%--<script src="http://a.amap.com/jsapi_demos/static/demo-center/model/js/loaders/MTLLoader.js"></script>--%>
    <%--<script src="http://a.amap.com/jsapi_demos/static/demo-center/model/js/loaders/LoaderSupport.js"></script>--%>
    <%--<script src="http://a.amap.com/jsapi_demos/static/demo-center/model/js/loaders/OBJLoader2.js"></script>--%>
    <%--<script type="text/javascript" src="https://webapi.amap.com/demos/js/liteToolbar.js"></script>--%>
    <title>快速入门</title>
</head>
<body>
<div id="container" tabindex="0"></div>
<script type="text/javascript">
    //最普通的地图
    // // var map = new AMap.Map('container',{
    //    // //     resizeEnable: true,
    //    // //     // zoom: 10,
    //    // //     // center: [116.480983, 40.0958]     //北京为中心点
    //    // //     center: [114.3381400000,30.3760300000],   //114.3381400000,30.3760300000 学校   //114.305392, 30.593098公司
    //    // //     zoom: 11
    //    // // });
    //    //
    var map = new AMap.Map('container', {
        pitch:75,
        viewMode:'3D',
        zoom: 17,
        expandZoomRange:true,
        zooms:[3,20],
        center:[114.3381400000,30.3760300000]
    }); //3D地图
    AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
        function(){
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());

            map.addControl(new AMap.OverView({isOpen:true}));
        }); //地图工具的初始化

    // //显示绿化地图
    // // var defaultLayer = new AMap.TileLayer();
    // // var traffic = new AMap.TileLayer.Traffic();
    // var map = new AMap.Map('container',{
    //     resizeEnable: true,
    //     zoom: 16,
    //     layers:[new AMap.TileLayer.RoadNet(),
    //         new AMap.TileLayer.Satellite()],
    //     center: [114.3381400000,30.3760300000],
    //
    // });
    // // traffic.setMap(map);
    // var marker = new AMap.Marker({
    //     position: [114.3294450000,30.3586480000]    //九全嘉 114.3294450000,30.3586480000
    // });
    // marker.setMap(map);
    // var circle = new AMap.Circle({
    //     radius: 500,
    //     center: map.getCenter(),
    //     strokeColor: '#006600',
    //     strokeWeight: 1,
    //     fillColor: 'rgba(0,0,255,0.6)',
    //     fillOpacity: 0.5,
    //     map: map
    //
    // });
    // AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    //        function(){
    //            map.addControl(new AMap.ToolBar());
    //
    //            map.addControl(new AMap.Scale());
    //
    //            map.addControl(new AMap.OverView({isOpen:true}));
    //        }); //地图工具的初始化
</script>
</body>
</html>
