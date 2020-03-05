import "../sass/app.scss";

$(document).ready(function(){

    // expertise 1
    $(".exper__droits--detail1").hide();
    $(".exper__droits__list--right--arrow1").click(function(){
        $(".exper__droits--detail1").toggle(500);
        $(".exper__droits__list--right--arrow1").hide();
      });

      $(".exper__droits--reduire1").click(function(){
        $(".exper__droits--detail1").toggle(500);
        $(".exper__droits__list--right--arrow1").show();
      });


    // expertise 2
    $(".exper__droits--detail2").hide();
    $(".exper__droits__list--right--arrow2").click(function(){
        $(".exper__droits--detail2").toggle(500);
        $(".exper__droits__list--right--arrow2").hide();
      });

      $(".exper__droits--reduire2").click(function(){
        $(".exper__droits--detail2").toggle(500);
        $(".exper__droits__list--right--arrow2").show();
      });

    // expertise 3
    $(".exper__droits--detail3").hide();
    $(".exper__droits__list--right--arrow3").click(function(){
        $(".exper__droits--detail3").toggle(500);
        $(".exper__droits__list--right--arrow3").hide();
      });

      $(".exper__droits--reduire3").click(function(){
        $(".exper__droits--detail3").toggle(500);
        $(".exper__droits__list--right--arrow3").show();
      });
  
  });