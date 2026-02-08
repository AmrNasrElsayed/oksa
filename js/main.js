/// <reference path="../@types/jquery/index.d.ts" />
let navbar = $('.navbar')
let sectionOffset = $('#sec2').offset().top
$(window).on('scroll' , function(){
let curScroll = $(window).scrollTop()

if(curScroll>sectionOffset - navbar.outerHeight(true)){
    navbar.css('backgroundColor' , '#FAFAFA')
}else{
    navbar.css('backgroundColor' , 'transparent')
}
})

$(function () {
    $('.loader').fadeOut(3000 , function(){
        $('.loadScreen').slideUp(1000,function(){
            $('body').css('overflow','auto');
            $('.loadScreen').remove();
        })
    })
    })


$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    let aHref = e.target.getAttribute('href')
   let sectionOffset = $(aHref).offset().top    
$('body,html').animate({scrollTop:sectionOffset}, 1000)
$('a').removeClass('text-decoration-underline active')
$(this).addClass('text-decoration-underline active')
})    


$('#gear').on('click',function () {
    $('.sidebar').animate({width:'toggle'},1000 , function () {
        $(gear).toggleClass('fa-gear fa-x spin')
    })
})

$('aside span').on('click',function(e){
backColor = $(e.target).css('background-color');
$('h1 , h2 , h3 ,h4 , button , .nav-link , i , p , a').css('color',backColor)

})

$('#sec1,#sec2,#sec3,#sec4,#sec5,#sec6').on('click',function(){
    $('.sidebar').hide(1000)
})