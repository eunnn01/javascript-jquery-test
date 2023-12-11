$(function(){
    console.log("load")
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
   
    // 패밀리사이트
    $(".family select").change(function(){
        var $href=$(this).val();
        window.open($href, "_self");
    })
    
    // 공지사항 탭

    $(".n-g-list a").click(function(){
        console.log("클릭")
        $(".tab-content").hide();
        $(this.hash).show();
        $(".n-g-list a").removeClass("active");
        $(this).addClass("active");
    })
    // 슬라이드 페이드 인, 아웃
    var $slideLength=0;
    var slidePosition=0;
    var $slides=$(".slides");
    var $slide=$slides.children(".slide");
    var $slideLength=$slide.length;
    var $auto=null;

    $(".slides>.slide:gt(0)").hide();
    function slideEvent(){
        function fadeEvent(){
            $slide.fadeOut();
            $slide.eq(slidePosition).fadeIn();
        }
        function nextPlay(){
            if(slidePosition==$slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            fadeEvent();
        }
    
        $(".nextbt").click(function(){
            nextPlay();
        })
        function prevPlay(){
            if(slidePosition==0){
                slidePosition=$slideLength-1;
            }else{
                slidePosition--;
            }
            fadeEvent();
        }
        $(".prevbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },3000)
        }
        autoPlay();
    }
    slideEvent();
    
    // 모달 
    $("#notic").each(function(index){
        $(this).find("a").click(function(){
            $(".modal-contents h2").text($(this).parent().find("a").text());
            $(".modal-text").text($(this).parent().find("a").text());
            $(".modal-popup").show();
        })
    })
    
    $(".modal-close").click(function(){
        $(".modal-popup").hide();
    })
    $(".modal-popup").click(function(){
        $(this).hide();
    })
})