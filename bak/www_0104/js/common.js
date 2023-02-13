$(document).ready(function () {
    // top_btn
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });

    //layer popup
        //팝업 열기
    $('.item .btn_wrap > a.v1').click(function(e){
        e.preventDefault();

        var popBtnClass = $(this).attr('class');
        var nameArr = [];
            nameArr = popBtnClass.split(' ');
            popupName = nameArr[0];

        // console.log(popupName); // 팝업 클래스명 확인
        $('.popup_'+popupName).addClass('active');
        $('.dim').addClass('active');
        $('body').addClass('noneScroll');

    });
    
    $('.item .btn_wrap > a.v1').click(function(e){
        e.preventDefault();

        var popBtnClass = $(this).attr('class');
        var nameArr = [];
            nameArr = popBtnClass.split(' ');
            popupName = nameArr[0];

        // console.log(popupName); // 팝업 클래스명 확인
        $('.popup_'+popupName).addClass('active');
        $('.dim').addClass('active');
        $('body').addClass('noneScroll');

    });
        // 팝업 닫기
    function popupClose (){
        $('.popup').removeClass('active');
        $('.dim').removeClass('active');
        $('body').removeClass('noneScroll');
    }

    $('.popup .close, .dim').click(function(e){
        popupClose();
    });

});