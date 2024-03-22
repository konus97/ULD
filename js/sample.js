

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



    
        if ($(window).width() >= 1204) {
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
        }
  

        $(document).ready(function(){
          if ($(window).width() <= 1203) {
              $(".menu_navi > li").on("click", function(){
                  var $submenu = $(this).children(".m_submenu");
                  if ($submenu.is(":visible")) {
                      $submenu.slideUp();
                      $(".menu_navi > li > a").css({color:"#fff"}); // 모든 메뉴의 색상을 흰색으로 변경
                  } else {
                      $(".m_submenu").slideUp();
                      $submenu.slideDown();
                      $(".menu_navi > li > a").css({color:"#fff"}); // 모든 메뉴의 색상을 흰색으로 변경
                      $(this).children("a").css({color:"rgb(63, 188, 210)"}); // 클릭된 메뉴의 색상을 변경
                  }
              });
      
              $(".m_menu_btn").on("click",function(){
                  $(".menu_navi").stop().css({right:"0"});
              });
      
              $(".close_btn").on("click",function(){
                  $(".menu_navi").stop().css({right:"-100%"});
              });
          }
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

  
      $(document).ready(function(){
        if ($(window).width() <= 1204) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1.1,
                spaceBetween: 5,
                freeMode: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                on: {
                    slideChange: function () {
                        if (this.isEnd) {
                            this.slideTo(0, 1000);
                        }
                    },
                },
            });
        } else {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 4,
                spaceBetween: 20,
                freeMode: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                on: {
                    slideChange: function () {
                        if (this.isEnd) {
                            this.slideTo(0, 1000);
                        }
                    },
                },
            });
        }
    });
    

   
  
});

