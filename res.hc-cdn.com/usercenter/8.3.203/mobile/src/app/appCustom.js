function endCustomer() {
    var str;
    if (/pcloudApp/i.test(navigator.userAgent)) hideAllSome(); else {
        0;
        (findStr(str = location.search, 'type=ios') || findStr(str, 'type=android')) && hideAllSome();
    }
}

function findStr(a, b) {
    return 0 <= a.indexOf(b);
}

pcloudApp = !1;

function hideAllSome() {
    pcloudApp = !0;
    $('[meta-data-adjust-app = hide]').css('display', 'none');
    $('.poster-actions-btns span:contains(立即购买)').closest('.aui-button').css('display', 'none');
    $('.btn-group .btn:contains(立即购买)').closest('.btn').css('display', 'none');
    $('.poster-actions-btns a:contains(立即购买)').closest('.aui-btn-red').css('display', 'none');
    $('.product-buy .act-btn.act-btn-def:contains(立即购买)').closest('.act-btn-def').css('display', 'none');
    $('.banner-actions .btn-def span:contains(价格计算器)').closest('.btn-def').css('display', 'none');
    $('.poster-actions-btns a:contains(价格计算器)').closest('a').css('display', 'none');
    $('.poster-actions a:contains(价格计算器)').closest('a').css('display', 'none');
    $('.meal-buy .act-btn.act-btn-def:contains(立即购买)').closest('.act-btn-def').css('display', 'none');
    $('.slider-box .slider-button.btn:contains(立即购买)').closest('.slider-button').css('display', 'none');
    $('.product-config-card .cui-btn:contains(立即购买)').css('display', 'none');
    $('#content').css({
        'padding-top': '0',
        'backgroundPositionY': '0'
    });
}

endCustomer();