$(document).ready(function () {
    // top_btn
    $('.top_btn').click('click', function (event) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });
    
    // gsap.set(".txt-motion", {
    //     yPercent: 110,
    //     transformStyle: "preserve-3d",
    //     opacity: 0,
    //     rotationX: -45,
    //     transformOrigin: "0% 50% -100%",
    // });

    // gsap.to('.sc-contact .txt-motion',{
    //     scrollTrigger:{
    //         trigger:'.sc-contact',
    //         start: "top 50%"
    //     },
    //     transformStyle: "preserve-3d",
    //     opacity: 1,
    //     rotationX: 0,
    //     transformOrigin: "50% 50%",
    //     yPercent: 0,
    //     duration:1.5,
    //     stagger:0.1
    // });

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        contactArea = $('.sc-contact').offset().top;

        if(curr >= contactArea - 200){
            $('.header').addClass('active')
        }else{
            $('header').removeClass('active')
        }
    })
});