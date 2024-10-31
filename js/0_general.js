$(document).ready(function(){

    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top <= 0){
    //     $('.top').hide()
    // }else{
    //     $('.top').show()
    // }

    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top == 0){
    //     $('.top').addclass('hide')
    // }else{
    //     $('.top').removeclass('hide')
    // }    
 
   

        $('.top').click(function() {
        $(window).scrollTop(0)
    })



    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active') 
        $('.list').toggleClass('active')
    })



})
