
/**
 * Created by m1324 on 2018/3/23.
 */
// rem²¼¾Ö
var ua=navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //androidÖÕ¶Ë
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=767){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
