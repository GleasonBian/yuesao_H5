/**
 * Created by m1324 on 2018/3/29.
 */

$(".footer>ul>li").click(function() {
    $("footer li").removeClass("active"); //�Ƴ�class="active"����
    $(this).addClass("active"); //���class="active"��ѡ���ǩ��
});
