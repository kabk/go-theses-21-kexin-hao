$(document).ready(function(){
  $(function(){
    $("#abstract").click(function(){
      location.href = "abstract.html";
    });
    $("#c0").click(function(){
      location.href = "c0.html";
    });
    $("#c1").click(function(){
      location.href = "c1.html";
    });
    $("#c2").click(function(){
      location.href = "c2.html";
    });
    $("#c3").click(function(){
      location.href = "c3.html";
    });
    $("#c4").click(function(){
      location.href = "c4.html";
    });
    $("#c5").click(function(){
      location.href = "c5.html";
    });
    $("#c6").click(function(){
      location.href = "c6.html";
    });
    $("#c7").click(function(){
      location.href = "c7.html";
    });
    $("#bibliography").click(function(){
      location.href = "b.html";
    });
    $("#home").click(function(){
      location.href = "../index.html";
    });
  });
  $('.lyricsreveal').click(function(){
      $('#lyrics' + $(this).attr('id')).toggle();
     });


   $('.topbar').click(function(){
   $('#navbar').toggle();
     // window.location.hash = target;
   });

});
