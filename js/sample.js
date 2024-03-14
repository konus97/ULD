

$(function(){

    let total = $(".slide li").length;
      let i = 0;
      let wid = 100;

      start();
      function start() {
        timer = setInterval(function () {
          i++;
          if (i == total - 1) {
            $(".slide")
              .stop()
              .animate({ left: "-300%" }, function () {
                $(".slide").css({ left: "0" });
              });
            i = 0;
          } else {
            $(".slide")
              .stop()
              .animate({ left: -i * wid + "%" });
          }
          $(".slide_navi li").removeClass("on");
          $(".slide_navi li").eq(i).addClass("on");
        }, 4000);
      }
      function updateNavigation() {
        $(".slide_navi li").removeClass("on");
        $(".slide_navi li").eq(i).addClass("on");
      }
    
      // 네비게이션 클릭 이벤트
      $(".slide_navi li").click(function() {
        clearInterval(timer); // 자동 슬라이드 중지
    
        i = $(this).index(); // 클릭된 네비게이션의 인덱스
    
        $(".slide")
          .stop()
          .animate({ left: -i * wid + "%" });
    
        updateNavigation(); // 네비게이션 업데이트
    
        start(); // 자동 슬라이드 재시작
      });




    
    


      $(".menu_navi , .hover_menu").mouseover(function(){
        $(".hover_menu").stop().css({
          display: "block",
          "border-top": "1px solid #000",
          "border-bottom": "1px solid #000"
        });
      
        $("header").stop().css({background: "#fff"});
        $(".menu_navi li a").stop().css({color:"#000"});
        $("header .h_wrap .logo a img").css("filter", "invert(0%)");
      });

      $(".menu_navi , .hover_menu").mouseleave(function(){
        $(".hover_menu").stop().css({
          display: "none",
          "border-top": "0px solid #000",
          "border-bottom": "0px solid #000"
        });
        $("header").stop().css({background:"none"});
        $(".menu_navi a").stop().css({color:"#fff"});
        $("header .h_wrap .logo a img").css("filter", "invert(100%)");
    });
    
      


   
      var $header = $('header'); //헤더를 변수에 넣기
      var $window = $(window);
      var scrollThreshold = 300; // 스크롤이 변할 위치
  
      var updateHeader = function(){ // 헤더 업데이트 함수
          var scrolled = $window.scrollTop() >= scrollThreshold; // 스크롤된 상태; true or false
          $header.toggleClass('down', scrolled); // 클래스 토글
      };
  
      $window.on('scroll', function(){ // 스크롤시
          updateHeader();
      });
  
      updateHeader(); // 초기 헤더 상태 설정

  



    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true, // 슬라이드가 끝에 도달했을 때 다시 맨 앞으로 이동
    autoplay: {
      delay: 3000, // 자동 슬라이드 간격(ms)
      disableOnInteraction: false, // 사용자 상호 작용 시 자동 슬라이드 중지 여부
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        if (this.isEnd) {
          // 마지막 슬라이드에 도달하면 첫 번째 슬라이드로 이동 (자연스럽게)
          this.slideTo(0, 1000); // 첫 번째 슬라이드의 인덱스는 0, 1000은 이동 시간(ms)을 나타냅니다.
        }
      },
    },
  });
  
});

