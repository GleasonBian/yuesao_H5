/**
 * Created by m1324 on 2018/3/30.
 */
/**
 * Created by m1324 on 2018/3/30.
 */




//点击下一步 显示隐藏
$(function () {
    $(".btn").click(function () {
        $(".box_top").css("display", "none");
        $(".box_bottom").css({"display":"block","margin-top":0});
    })
})
// 给input  date设置默认值
var now = new Date();
//格式化日，如果小于9，前面补0
var day = ("0" + now.getDate()).slice(-2);
//格式化月，如果小于9，前面补0
var month = ("0" + (now.getMonth() + 1)).slice(-2);
//拼装完整日期格式
var today = now.getFullYear() + "-" + (month) + "-" + (day);
//完成赋值
$('#id_yy_input').val(today);
