import "../sass/app.scss";

window.addEventListener("scroll", function() {
    showArrow();
});



function showArrow() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 1300 ){
        document.getElementsByClassName('arrow-up')[0].classList.add('reveal')
        } else if (scrollTop < 1300 ) {
            document.getElementsByClassName('arrow-up')[0].classList.remove('reveal')
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    // expertise 1
    $(".exper__droits--detail1").hide();
    $(".exper__droits__list--right--arrow1, .titre-exp1").click(function(){
        $(".exper__droits--detail1").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow1").hide();
      });

      $(".exper__droits--reduire1").click(function(){
        $(".exper__droits--detail1").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow1").show();
      });


    // expertise 2
    $(".exper__droits--detail2").hide();
    $(".exper__droits__list--right--arrow2 , .titre-exp2").click(function(){
        $(".exper__droits--detail2").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow2").hide();
      });

      $(".exper__droits--reduire2").click(function(){
        $(".exper__droits--detail2").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow2").show();
      });

    // expertise 3
    $(".exper__droits--detail3").hide();
    $(".exper__droits__list--right--arrow3 , .titre-exp3").click(function(){
        $(".exper__droits--detail3").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow3").hide();
      });

      $(".exper__droits--reduire3").click(function(){
        $(".exper__droits--detail3").toggle(500, 'swing');
        $(".exper__droits__list--right--arrow3").show();
      });

      $(".arrow-up ").click(function() {
        $("html, body").animate({ 
            scrollTop: 800 
        }, "slow");
        return false;
    });

    $('.landing__arrow__png').click(function(event) {
        // Preventing default action of the event
        event.preventDefault();
        // Getting the height of the document
        var n = 800;
        $('html, body').animate({ scrollTop: n }, 'slow');
    });

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 'slow');
    });
  
  });



