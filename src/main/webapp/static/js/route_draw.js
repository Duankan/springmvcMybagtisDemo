(function ($, path) {
    //通用变量
    var golalbal=0;
    var forNum =1;
    var wayPointArray = new Array("1","1","1");
    var publicCache = {},
        map,
        polyline,
        searchParams = {
            startLocation: '',
            startCity: '',
            endLocation: '',
            endCity: '',
        }
    ;


    var DrivePlan = function () {
        var drivePlan = new Object();

        // 路线导航计划
        drivePlan.routePlan;

        map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 12,
            center: firstSpot
        });
        if (spotList && spotList.length > 0) {
            document.getElementById('btn_save').setAttribute("disabled", "disabled");
            polyline = new AMap.Polyline({
                path: spotList,          //设置线覆盖物路径
                strokeColor: "#3366FF", //线颜色
                strokeOpacity: 1,       //线透明度
                strokeWeight: 5,        //线宽
                strokeStyle: "solid",   //线样式
                strokeDasharray: [10, 5] //补充线样式
            });
            polyline.setMap(map);
        }

        /*加载AMap.Autocomplete 插件*/
        AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function () {

            function getCityName(district) {
                var endIndex = district.indexOf('市') + 1;
                return district.substring(0, endIndex);
            }

            function init(id, callback) {
                var autoOptions = {
                        //city: "北京", //城市，默认全国
                        input: id//使用联想输入的input的id
                    },
                    autocomplete = new AMap.Autocomplete(autoOptions),
                    placeSearch = new AMap.PlaceSearch({
                        //city: '北京',
                        map: map
                    });

                AMap.event.addListener(autocomplete, "select", function (e) {

                    if (callback) {
                        callback(e,id);
                    }

                    placeSearch.search(e.poi.name);
                });
            };

            init("startAddress", function (e) {

                searchParams.startCity = getCityName(e.poi.district);
                searchParams.startLocation = e.poi.name;
            });

            init("endAddress", function (e) {
                searchParams.endCity = getCityName(e.poi.district);
                searchParams.endLocation = e.poi.name;
            });
            //途经点位置联想
            // for(forNum ;forNum<=golalbal;forNum++){
            //     var no="wayAddress_"+forNum;
            //     //alert(i);
            //     init(no, function (e) {
            //         wayPointArray.push({
            //             keyword: e.poi.name,
            //             city: getCityName(e.poi.district)
            //         });
            //     });
            //  }
            for(var i=0 ;i<golalbal;i++){
                var no=""+i;
                //alert(i);
                init(no, function (e,id) {
                    var index=parseInt(id);
                    //数组不为空，并且在该索引处有值
                    if(wayPointArray.length>0){
                        wayPointArray.splice(index,1);
                        wayPointArray.splice(index,0,{keyword: e.poi.name, city: getCityName(e.poi.district)});
                    }
                    //判断数组是否有值，对应的索引处是否有值
                    if(wayPointArray.length==0){
                        wayPointArray.splice(index,0,{keyword: e.poi.name, city: getCityName(e.poi.district)});
                    }
                });
            }

        });

        map.plugin(["AMap.Driving"], function () {

            publicCache.policyArr = [
                AMap.DrivingPolicy.LEAST_TIME,          //最快捷模式
                AMap.DrivingPolicy.LEAST_FEE,           //最经济模式
                AMap.DrivingPolicy.LEAST_DISTANCE,      //最短距离模式
                AMap.DrivingPolicy.REAL_TRAFFIC         //考虑实时路况
            ];

            /**
             * 路线导航查询
             */
            drivePlan.search = function () {
                // 获取查询参数

                var startLocation = searchParams.startLocation;
                var startCity = searchParams.startCity;
                var endLocation = searchParams.endLocation;
                var endCity = searchParams.endCity;

                // // 参数验证
                // if (!startCity) {
                //     layer.msg("请输入起始地点城市", {icon: 0});
                //     return;
                // }
                if (!startLocation) {
                    layer.msg("请输入起始地点地址", {icon: 0});
                    return;
                }

                if (!startLocation) {
                    layer.msg("请输入终止地点地址", {icon: 0});
                    return;
                }
                //当存在途经框，而没有输入途经点
                if($('.minus').length) {
                    var flag =0;
                    for(var rs=0;rs<wayPointArray.length;rs++){
                        if(wayPointArray[rs]!="1"){
                            flag++;
                            }
                    }
                    if (flag<$('.minus').length) {
                        layer.msg("您有途经点没有设置地点，将默认此途径点无效！")
                    }
                }
                if (polyline) {
                    polyline.setMap(null);
                    document.getElementById('btn_save').removeAttribute("disabled");
                }
                var policyIndex = $('#policy').val();
                var pointArr = new Array();

                pointArr.push({
                    keyword: startLocation,
                    city: startCity
                });
                //可以显示途经点
                for(var j=0;j<wayPointArray.length;j++){
                    if(wayPointArray[j]!="1"){
                    pointArr.push({
                        keyword:wayPointArray[j].keyword,
                        city: wayPointArray[j].city
                    });
                    }
                }


                pointArr.push({
                    keyword: endLocation,
                    city: endCity
                });

                var policy = publicCache.policyArr[parseInt(policyIndex)];

                //构造路线导航类
                var driving = new AMap.Driving({
                    map: map,                               // 标注地图
                    panel: "panel",                         // 显示区域
                    extensions: 'all',                       // 返回DriveStep基本信息+DriveStep详细信息
                    hideMarkers: false                       // 设置隐藏路径规划的起始点图标
                });
                driving.setPolicy(policy);

                // 删除地图所有覆盖物
                map.clearMap();
                // 清空结果显示
                $('#panel').text('');
                // 根据起终点名称规划驾车导航路线
                driving.search(pointArr, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log('result', result);
                        drivePlan.parse(result);
                    }
                });
            };
        });


        /**
         * 解析导航结果
         * @param result
         */
        drivePlan.parse = function (result) {

            // 判断路线是否为空
            if (!result.routes || result.routes.size == 0) {
                return;
            }

            drivePlan.routePlan = new Object();
            // 线路
            var routePlanPO = new Object();
            routePlanPO.routeid = parseInt($('#routeId').val());
            routePlanPO.policy = parseInt($('#policy').val());
            routePlanPO.originname = result.originName;
            routePlanPO.origin = result.origin.lng + ',' + result.origin.lat;
            routePlanPO.destinationname = result.destinationName;
            routePlanPO.destination = result.destination.lng + ',' + result.destination.lat;
            var route = result.routes[0];
            routePlanPO.distance = route.distance;
            routePlanPO.duration = route.time;

            // 线路步骤
            var routePlanStepPOList = new Array();

            $.each(route.steps, function (index, val) {
                var step = new Object();
                step.distance = val.distance;
                step.duration = val.time;
                step.sort = index;
                var pointArr = new Array();
                $.each(val.path, function (i, path) {
                    pointArr.push(path.lng + ',' + path.lat);
                });
                if (pointArr.length > 0) {
                    step.polyline = pointArr.join(';');
                }
                routePlanStepPOList.push(step);
            });

            drivePlan.routePlan.routePlanPO = routePlanPO;
            drivePlan.routePlan.routePlanStepPOList = routePlanStepPOList;
            console.log('', drivePlan);

        };


        function closeDialog()
        {
            setTimeout(function () {
                parent.layer.closeAll();
            },1500);
        }

        /**
         * 保存
         */
        drivePlan.save = function () {
            if (!drivePlan.routePlan) {
                layer.msg("请先查询线路", {icon: 0});
                return;
            }
            console.log('----test----', JSON.stringify(drivePlan.routePlan));
            layer.load(3);
            $.ajax({
                type: 'post',
                url: publicCache.path + '/route/saveRoutePlan',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(drivePlan.routePlan),
                success: function (res) {
                    layer.closeAll('loading');
                    var msg = res.msg;
                    var code = res.code;
                    if (code == '0') {
                        layer.msg(msg, {icon: 1});
                    } else {
                        layer.msg(msg, {icon: 0});
                    }
                    closeDialog();
                }, error: function (xhr, status) {
                    layer.closeAll('loading');
                    //提示层
                    layer.msg("系统出现异常！", {icon: 0});
                    closeDialog();
                }
            });
        };
        return drivePlan;
    };


    //初始化数据
    var initData = function () {
        publicCache.path = path;
    };

    //初始化事件
    var initEvent = function (drivePlan) {
        //1.查询按钮事件
        $('#btn_search').click(function () {
            drivePlan.search();

            $('#btn_save').attr("disabled", false);
        });

        //2.保存
        $('#btn_save').click(function () {
            $(this).attr("disabled", "true");
            drivePlan.save();
        })
    };

    //初始化页面
    var initPage = function () {

    };

    // 页面刷新
    var pageReload = function (millisec) {
        var s = 3000;
        if (!millisec) {
            s = millisec;
        }
        setTimeout(function () {
            location.reload();
        }, 3000);
    };
    //添加途经点
    $("#btn_add").click(function () {
        if(golalbal>=3){
            layer.msg("途经节点最多允许三个！");
            return false;
        }
        var addbtn = $("#byWay");
        var div=$("<div class='form-group form-item'>");
        var label =$("<label style='font-size: 12px'>途经:</label>");
        var input = $("<input type='text' class='form-control pit' style='width:195px;height:32px;border-left-width: 1px;margin-left: 4px;' placeholder='请输入途经点'/> ");
        input.attr("id",""+golalbal);
        var btn = $("<button type='button' class='btn btn-default minus'  style='padding: 1px 7px;color:red;margin-left: 5px;'>");
        var span = $("<span class='glyphicon glyphicon-minus' aria-hidden='true'></span>");
        btn.append(span);
        div.append(label);
        div.append(input);
        div.append(btn);
        addbtn.before(div);
        golalbal++;
        var drivePlan = new DrivePlan();
        initData();
        initEvent(drivePlan);
        initPage();
        $('.minus').on('click', function (e) {
            //debugger
            console.log($('.minus').index(this))
            var index = $('.minus').index(this);
            if (index < 0) {
                return
            }
            //每次删除一个div，改变下面div>input的Id,因为我是根据id进行数组赋值
            var length =$('.form-item').length;
            $('.form-item').eq(index).remove();
            if(index+1<length){
                var k =index+1;
                for(k;k<length;k++){
                    var newID=k-1;
                    $("#"+k).attr("id",newID+"");
                }
                //为了让选地点或改变地址回调的时候对应标签id
                var drivePlan = new DrivePlan();
                initData();
                initEvent(drivePlan);
                initPage();
            }
            else {
                var drivePlan = new DrivePlan();
                initData();
                initEvent(drivePlan);
                initPage();
            }
            golalbal--;
            //删除途经点对应数组 为了保证数组的长度不变并且始终精确的对应关系
            // 所以策略是：1.初始化数组长度为三 2.每次删一个就push个1进去  3.更换时先删再添加的指定位置
            wayPointArray.splice(index,1);
            wayPointArray.push("1");
            if(searchParams.startLocation&&searchParams.endLocation) {
                drivePlan.search();
            }
        });
    });


    // 页面初始化
    $(function () {
        var drivePlan = new DrivePlan();
        initData();
        initEvent(drivePlan);
        initPage();
    });

})(jQuery, path);