$(function () {

  $('#table').bootstrapTable({
    columns: [{
        field: 'id',
        title: '所属区域'
      }, {
        field: 'name',
        title: '企业'
      },
      {
        field: 'plate',
        title: '车牌号'
      },
      {
        field: 'warntype',
        title: '车辆状态'
      },
      {
        field: 'warnlevel',
        title: '开始时间'
      },
      {
        field: 'start',
        title: '结束时间'
      },
      {
        field: 'end',
        title: '开始里程'
      },
      {
        field: 'position',
        title: '结束里程'
      },
      {
        field: 'stopTime',
        title: '行驶里程'
      },
      {
        field: 'lastPosition',
        title: '违规里程'
      },
      {
        field: 'drivingKlio',
        title: '违规里程占比'
      }
    ],
    data: [{
        id: '湖北省-武汉市-江岸区',
        name: '中通快递股份有限公司',
        plate: '鄂A78Y78',
        warntype: '营运中',
        warnlevel: '2018-09-06 09:00:05',
        start: '2018-09-06 09:00:05',
        end: '11.98',
        position: '12.90',
        stopTime: '<span style="color:#006CFF" onclick="alarmDetail()" data-toggle="tooltip" >200</span>',
        lastPosition: '<span style="color:#006CFF" onclick="alarmNumDetail()" data-toggle="tooltip" >10</span>',
        drivingKlio: '12%'
      },
      {
        id: '湖北省-武汉市-江岸区',
        name: '中通快递股份有限公司',
        plate: '鄂A78Y78',
        warntype: '营运中',
        warnlevel: '2018-09-06 09:00:05',
        start: '2018-09-06 09:00:05',
        end: '11.98',
        position: '12.90',
        stopTime: '<span style="color:#006CFF" onclick="alarmDetail()" data-toggle="tooltip" >200</span>',
        lastPosition: '<span style="color:#006CFF" onclick="alarmNumDetail()" data-toggle="tooltip" >10</span>',
        drivingKlio: '12%'
      },
      {
        id: '湖北省-武汉市-江岸区',
        name: '中通快递股份有限公司',
        plate: '鄂A78Y78',
        warntype: '营运中',
        warnlevel: '2018-09-06 09:00:05',
        start: '2018-09-06 09:00:05',
        end: '11.98',
        position: '12.90',
        stopTime: '<span style="color:#006CFF" onclick="alarmDetail()" data-toggle="tooltip" >200</span>',
        lastPosition: '<span style="color:#006CFF" onclick="alarmNumDetail()" data-toggle="tooltip" >10</span>',
        drivingKlio: '12%'
      },
      {
        id: '湖北省-武汉市-江岸区',
        name: '中通快递股份有限公司',
        plate: '鄂A78Y78',
        warntype: '营运中',
        warnlevel: '2018-09-06 09:00:05',
        start: '2018-09-06 09:00:05',
        end: '11.98',
        position: '12.90',
        stopTime: '<span style="color:#006CFF" onclick="alarmDetail()" data-toggle="tooltip" >200</span>',
        lastPosition: '<span style="color:#006CFF" onclick="alarmNumDetail()" data-toggle="tooltip" >10</span>',
        drivingKlio: '12%'
      }
    ],
    sidePagination: "client",
    pageNumber: 1,
    pageSize: 15,
    height: 580,
    pagination: true,
    align: 'center'
  });
  
  
  $("#table-dialog").bootstrapTable({
    columns: [{
        field: 'name',
        title: '车牌号码'
      },
      {
        field: 'plate',
        title: '车牌颜色'
      },
      {
        field: 'warntype',
        title: '接受时间'
      },
      {
        field: 'warnlevel',
        title: '卫星时间'
      },
      {
        field: 'cart',
        title: '速度'
      },
      {
        field: 'position',
        title: '限速值'
      },
      {
        field: 'fire',
        title: '里程'
      },
      {
        field: 'endPosition',
        title: '车辆状态'
      },
      {
        field: 'longTime',
        title: '报警状态'
      },
      {
        field: 'klio',
        title: '位置信息'
      },
      {
        field: 'toward',
        title: '是否有效'
      }
    ],
   	data: [{
        name: '鄂 A13BL0',
        plate: '黄',
        warntype: '2019-09-28 12:13:09',
        warnlevel: '2019-09-28 12:13:09',
        cart: '12',
        position: '100',
        fire: '12',
        endPosition: 'ACC开,定位',
        longTime:'没有',
        klio:'武汉市东西湖区123号',
        toward:'是'
      },
      {
        name: '鄂 A13BL0',
        plate: '黄',
        warntype: '2019-09-28 12:13:09',
        warnlevel: '2019-09-28 12:13:09',
        cart: '12',
        position: '100',
        fire: '12',
        endPosition: 'ACC开,定位',
        longTime:'没有',
        klio:'武汉市东西湖区123号',
        toward:'是'     
      },
    ], 
    sidePagination: "client",
    pageNumber: 1,
    pageSize: 15,
    height: 580,
    pagination: true,
    align: 'center'
  });
  
  $("#table-dialogNUm").bootstrapTable({
    columns: [ {
        field: 'name',
        title: '车牌号码'
      },
      {
        field: 'plate',
        title: '车牌颜色'
      },
      {
        field: 'warntype',
        title: '开始时间'
      },
      {
        field: 'company',
        title: '开始位置'
      },
      {
        field: 'warnlevel',
        title: '结束时间'
      },
      {
        field: 'cart',
        title: '结束位置'
      },
      {
        field: 'position',
        title: '行驶里程'
      },
      {
        field: 'fire',
        title: '违规类型'
      },
      {
        field: 'fix',
        title: '轨迹'
      }
    ],
   	data: [{
        name: '鄂 A13BL0',
        plate: '黄',
        warntype: '武汉东西湖区1235号',
        company: '武汉东西湖区1235号',
        warnlevel: '2018-08-09 20:15:45',
        cart: '武汉东西湖区1235号',
        position: '12',
        fire: '超速',
        fix: '<span class="deal-icon view" data-toggle="tooltip" title="查看"></span>'
      },
      {
        name: '鄂 A13BL0',
        plate: '黄',
        warntype: '武汉东西湖区1235号',
        company: '武汉东西湖区1235号',
        warnlevel: '2018-08-09 20:15:45',
        cart: '武汉东西湖区1235号',
        position: '12',
        fire: '超速',
        fix: '<span class="deal-icon view" data-toggle="tooltip" title="查看"></span>'
      },
    ], 
    sidePagination: "client",
    pageNumber: 1,
    pageSize: 15,
    height: 580,
    pagination: true,
    align: 'center'
  });   
  
  
  $selOperateType = $('#sel_OperateType');
  $selOperateType.multiselect({
    enableFiltering: true,
    nonSelectedText: "营运类型",
    nSelectedText: "个已选择",
    allSelectedText: "全选",
    filterPlaceholder: "搜索",
    maxHeight: 250,
    buttonWidth: '130px',
    maxWidth: 160,
    enableClickableOptGroups: true,
    enableCollapsibleOptGroups: true,
  });



  $("#sel_AlarmType").multiselect("destroy").multiselect({
    enableFiltering: true,
    nonSelectedText: "报警类型",
    nSelectedText: "个已选择",
    allSelectedText: "全选",
    filterPlaceholder: "搜索",
    maxHeight: 250,
    buttonWidth: '130px',
    enableClickableOptGroups: true,
    enableCollapsibleOptGroups: true,
  });
  var start = laydate.render({
    elem: '#startTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm:ss',
    calendar: true, //是否显示节日
    // max: '2017-10-27 23:59:59', //最大日期
    ready: function (date) { //控件在打开时触发，回调返回一个参数

    },
    done: function (value, date) {

    }
  });

  var end = laydate.render({
    elem: '#endTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm:ss',
    calendar: true, //是否显示节日
    //max: '2017-10-27 23:59:59',
    ready: function (date) { //控件在打开时触发，回调返回一个参数

    },
    done: function (value, date) {

    }
  });
  const organInput = $('#organ-input')
  var data = {
    treedata: [{
      text: "湖北省",
      // icon: "iconfont icon-weixuanzhong",
      state: {
        checked: true
      },
      nodes: [{
          text: "武汉市",
          // icon: "iconfont icon-weixuanzhong",
          nodes: [{
              text: "江汉区",
              // icon: "iconfont icon-weixuanzhong",
              nodes: [{
                text: "江滩旅游客运公司",
                // icon: "iconfont icon-weixuanzhong",
              }]
            },
            {
              text: "鄂A25237",
              // icon: "iconfont icon-status"
            }
          ]
        },
        {
          text: "黄石市",
          // icon: "iconfont icon-weixuanzhong",
          nodes: [{
              text: "XX区",
              // icon: "iconfont icon-weixuanzhong",
              nodes: [{
                text: "江滩旅游客运公司",
                // icon: "iconfont icon-weixuanzhong",
              }]
            },
            {
              text: "鄂A25237",
              // icon: "iconfont icon-status"
            }
          ]
        },
        {
          text: "十堰市",
          // icon: "iconfont icon-weixuanzhong",
          nodes: [{
              text: "XX区",
              // icon: "iconfont icon-weixuanzhong",
              nodes: [{
                text: "江滩旅游客运公司",
                // icon: "iconfont icon-weixuanzhong",
              }]
            },
            {
              text: "鄂A25237",
              // icon: "iconfont icon-status"
            }
          ]
        },
        {
          text: "宜昌市",
          // icon: "iconfont icon-weixuanzhong",
          nodes: [{
              text: "XX区",
              // icon: "iconfont icon-weixuanzhong",
              nodes: [{
                text: "江滩旅游客运公司",
                // icon: "iconfont icon-weixuanzhong",
              }]
            },
            {
              text: "鄂A25237",
              // icon: "iconfont icon-status"
            }
          ]
        },
        {
          text: "襄阳市",
          // icon: "iconfont icon-weixuanzhong",
          nodes: [{
              text: "XX区",
              // icon: "iconfont icon-weixuanzhong",
              nodes: [{
                text: "江滩旅游客运公司",
                // icon: "iconfont icon-weixuanzhong",
              }]
            },
            {
              text: "鄂A25237",
              // icon: "iconfont icon-status"
            }
          ]
        },
      ]
    }]
  }

  function init() {
    $('#organ-tree').treeview({
      data: data.treedata,
      showBorder: '#CAD0DA',
      selectedBackColor: "#f3f2f2",
      selectedColor: "#36bfd2",
      selectable: true,
      backColor: '#fff',
      // selectedIcon: 'iconfont icon-fangxingxuanzhong',
      collapseIcon: 'iconfont icon-jianhao1',
      expandIcon: 'iconfont icon-jiahao'
    });
    $('#organ-tree').on('click', function (e) {
      e.stopPropagation()
    })
  }



  organInput.on('focus', function () {
    $('.organ-dialog-wrapper').show()
    init();
  })

  $('.organ-dialog-wrapper').on('click', function () {
    $('.organ-dialog-wrapper').hide()
    e.stopPropagation()
  })

  function initChart() {
    console.log('initchart')
    option = {
      legend: {
	        // orient: 'vertical',
	        // top: 'middle',
	        bottom: 10,
	        left: 'center',
	        data: ['正常行驶时长', '违规行驶时长']
	    },
      series: [{
        type: 'pie',
        radius: ['0%', '65%'],
        color: ['#00acee','#52cdd5','#79d9f1','#a7e7ff','#c8efff','#c6f1e7'],
        data: [{
          name: '正常行驶时长',
          value: 90,
        },{
          name: '违规行驶时长',
          value: 10,
        }],
        label: {

          normal: {
            position: 'inside',
            textStyle: {
              color: '#fff',
              fontSize: 18,
							fontWeight: 'bold',
            },
            formatter: '{d}%',
          },

        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        center: ['30%', '50%'],
      }, {

        type: 'pie',
        radius: ['0%', '65%'],
        color: ['#00acee','#52cdd5','#79d9f1','#a7e7ff','#c8efff','#c6f1e7'],
        data: [{
          name: '正常行驶',
          value: 90,
        },{
          name: '违规次数:10,里程10KM',
          value: 10,
        }],
        center: ['30%', '50%'],
      }, ]
    };
		
		option2 = {
		    tooltip: {
		        trigger: 'axis',
		        formatter: function(params, ticket, callback) {
		
		            var res = params[0].name;
		
		            for (var i = 0, l = params.length; i < l; i++) {
		                if (params[i].seriesType === 'line') {
		                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '%';
		                } else {
		                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '公里';
		                }
		            }
		            return res;
		
		        }
		    },
		    grid: {
		        containLabel: true
		    },
		    legend: {
		        data: ['违规占比', '总时长', '违规时长']
		    },
		    xAxis: [{
		        type: 'category',
		        axisTick: {
		            alignWithLabel: true
		        },
		        data: ['鄂A13BL0', '鄂A78BY0', '鄂A88888', '鄂A66688', '鄂A22888']
		    }],
		    yAxis: [{
		        type: 'value',
		        name: '百分比',
		        min: 0,
		        position: 'left',
		        axisLabel: {
		            formatter: '{value} % '
		        }
		    }, {
		        type: 'value',
		        name: '公里',
		        min: 0,
		        position: 'right',
		        axisLabel: {
		            formatter: '{value}'
		        }
		    }],
		    series: [{
		        name: '百分比',
		        type: 'line',
		        label: {
		            normal: {
		                show: true,
		                position: 'top',
		            }
		        },
		        lineStyle: {
		            normal: {
		                width: 3,
		                shadowColor: 'rgba(0,0,0,0.4)',
		                shadowBlur: 10,
		                shadowOffsetY: 10
		            }
		        },
		        data: [14, 13, 37,47,76]
		    }, {
		        name: '违规时长',
		        stack: '总量',
		        type: 'bar',
		        yAxisIndex: 1,
		        label: {
		            normal: {
		                show: true,
		                position: 'top'
		            }
		        },
		        data: [22, 22, 23,45,100]
		    }, {
		        name: '总时长',
		        stack: '总量',
		        type: 'bar',
		        yAxisIndex: 1,
		        label: {
		            normal: {
		                show: true,
		                position: 'top'
		            }
		        },
		        data: [201, 222, 223,400,899]
		    }]
		};    
    
    
    
    var totalChart = echarts.init(document.getElementById("totalChart"));
   /* totalChart.setOption(option);*/
    
    var lineChart = echarts.init(document.getElementById("lineChart"));
    lineChart.setOption(option2);
    
    lineChart.on('click', function (params) {
		    //console.log(params)
		    totalChart.setOption(option);
		    $(".total-chart-detail").removeClass("hide")
		});
  }
  
  initChart()
  var isTableShow = true;
  $('#switchTable').on('click', function () {
    console.log('tab')
    if (isTableShow) {
      $('.chart-wrapper').addClass('show')
      $('#switchTable').addClass('icon-export-chart')
      $('#switchTable').removeClass('icon-export-table')
      $(".bootstrap-table").addClass('hide')
      isTableShow = false
    } else {
      $('.chart-wrapper').removeClass('show')
      $('#switchTable').removeClass('icon-export-chart')
      $('#switchTable').addClass('icon-export-table')
      $(".bootstrap-table").removeClass('hide')
      isTableShow = true
    }
  })

})