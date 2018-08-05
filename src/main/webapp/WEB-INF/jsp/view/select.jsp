<%--
  Created by IntelliJ IDEA.
  User: ljiu
  Date: 2018/6/16
  Time: 9:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <script src="//cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://cdn.bootcss.com/bootstrap-multiselect/0.9.15/css/bootstrap-multiselect.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/bootstrap-multiselect/0.9.15/js/bootstrap-multiselect.js"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>
    <!-- (Optional) Latest compiled and minified JavaScript translation files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/i18n/defaults-*.min.js"></script>
    <title>下拉多选框</title>
    <style>
        .multiselect-container{ /*下拉框的样式*/
            width:195px;
        }
        .multiselect-container>li>a>label{
            line-height: 28px;
            font-size: 12px;
        }
        .multiselect-container>li>a>label>input[type='checkbox'] {
            margin-top: 7px;
        }
        .multiselect-item.multiselect-all.active{
            border-bottom:1px solid #ccc !important;
        }
        /* .multiselect-container.dropdown-menu li{
            width:49%;
            display: inline-block;
        }
        .multiselect-container.dropdown-menu li:first-child{
            width:100%;
        } */
        .multiselect.dropdown-toggle.btn.btn-default:link,.multiselect.dropdown-toggle.btn.btn-default:visited,.multiselect.dropdown-toggle.btn.btn-default:focus,.multiselect.dropdown-toggle.btn.btn-default:hover,.multiselect.dropdown-toggle.btn.btn-default:active, .btn-default.active, .btn-default:active, .open>.dropdown-toggle.btn-default{
            background: #fff;
            outline: none;
            border:1px solid #ccc;
            box-shadow: none;
        }
        .dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover{
            background: #474752;
        }
        .multiselect-selected-text{
            font-size:13px;
            font-family: '微软雅黑','宋体';
            width:100%;
            float: left;
            text-align: left;
        }
        .btn.btn-default{
            padding-right:15px;
        }
    </style>
</head>
<body>
<div class="form-group">
    <label class="col-sm-1 control-label" style="padding-right: 0px;right: -30;top: 5px;">客资类型：</label>
    <div class="col-sm-2">
        <select id="usertype" name="usertype" class="selectpicker show-tick form-control" multiple data-live-search="false">
            <option value="0">苹果</option>
            <option value="1">菠萝</option>
            <option value="2">香蕉</option>
            <option value="3">火龙果</option>
            <option value="4">梨子</option>
            <option value="5">草莓</option>
            <option value="6">哈密瓜</option>
            <option value="7">椰子</option>
            <option value="8">猕猴桃</option>
            <option value="9">桃子</option>
        </select>
    </div>
    <div class="col-sm-2">
        <button id="clk" class="btn-primary">提交</button>
    </div>
</div>
<div style="width: 100%; margin:20px">
    <label class="col-sm-1 control-label" style="padding-right: 0px;right: -30;top: 5px;">户型 ：</label>
    <select id="sel2" multiple="multiple">
        <option>一室一厅</option>
        <option>两室一厅</option>
        <option>三室一厅</option>
    </select>
</div>
</body>
<script>
    $(window).on('load', function () {
        $('#usertype').selectpicker({
            'selectedText': 'cat'
        });
        //bootstrap-multiselect插件初始化
        $("#sel2").multiselect({
            enableFiltering: true,
             nonSelectedText: "营运类型",
             nSelectedText: "个已选择",
             allSelectedText: "全选",
            filterPlaceholder: "搜索",
            // maxHeight: 300,
            // buttonWidth: '195px',
             maxWidth: 160,
            // enableClickableOptGroups: true,
            // enableCollapsibleOptGroups: true,
            includeSelectAllOption: true,
            enableClickableOptGroups: true,
            enableCollapsibleOptGroups: true,
            buttonWidth: 195,
            maxHeight: 300,
        });
    });
    $("#clk").click(function () {
     var select = $("select").val();
     //get请求
        var url = "/user/selectAfter?select="+select;
        $.get(url,function (data) {

        });
    })
</script>
</html>
