/**
 * Created by m1324 on 2018/3/29.
 */

$(".footer>ul>li").click(function() {
    $("footer li").removeClass("active"); //移除class="active"属性
    $(this).addClass("active"); //添加class="active"到选择标签中
});
