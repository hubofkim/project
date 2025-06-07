$(function(){ //html문서를 모두 로딩후 스크립트를 읽겠다.
    //메뉴
  $("nav > ul > li").mouseover(function(){
    $(".submenu, .menutg").stop().slideDown();
})
    $("nav > ul > li").mouseout(function(){
    $(".submenu, .menutg").stop().slideUp();
})
    //슬라이드
    let currentIndex = 0;
    $(".slide ul li").hide().first().show();
    setInterval(function(){
    nextIndex = (currentIndex+1) % 3;
    $(".slide ul li").eq(currentIndex).fadeOut();
    $(".slide ul li").eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
    },3000)
})