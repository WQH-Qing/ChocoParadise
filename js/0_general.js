$(document).ready(function(){
    
// TOP鍵
    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top <= 0){
    //     $('.to-top').hide()
    // }else{
    //     $('.to-top').show()
    // }

    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top == 0){
    //     $('.to-top').addclass('hide')
    // }else{
    //     $('.to-top').removeclass('hide')
    // }    
    // 上課成品
    //     $('.to-top').click(function() {
    //     $(window).scrollTop(0)
    // })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();           
        }       
    })

    $('.to-top').click(function(){
        $('html').animate({ scrollTop: 0 }, 400);
    })


// 漢堡選單
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active') 
        $('.list').toggleClass('active')
    })

// 手機版的選單點選
    $('.list > li').click(function(e) {
        // 防止事件冒泡到父元素
        e.stopPropagation();
        
        // 切換子選單顯示
        $(this).children('.dropdown-open').slideToggle();
        
        // 其他子選單隱藏
        $(this).siblings().children('.dropdown-open').slideUp();
    });

    // 點擊其他地方隱藏子選單
    $(document).click(function() {
        $('.dropdown-open').slideUp();
    });

    



})
