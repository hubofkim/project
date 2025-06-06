$(function(){
    let currentIndex=0;
    $(".slider").hide().first().show();
//모든 이미지 숨겨주고 퍼스트 이미지만 보여주는 코드
    setInterval(function(){
        let nextIndex = (currentIndex+1) % 3;
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;
    },3000);
    //메뉴: 하나씩 나오기
});
