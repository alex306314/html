(function($){

  //十大热门文章
  function tenhot(){
    $(".tenhot li").hover(function(){
      $(".tenhot li").removeClass("active");
      $(this).addClass("active");
    },function(){});
  }

  //设置左侧面高度
  function setLtiHeight(){
    $.each($(".catlistw"), function(i, n){
      var $s = $(n);
      var height = $s.find(".catlistin").height();
      $s.find(".lti").css("height", height-30+"px").find(".vlin").css("height", height-30+"px");
    });
  }
  
  $(function(){
    tenhot();
    //logoitem
    $(".logoitem").hover(function(){
      $(this).addClass("hover");
    },function(){$(this).removeClass("hover");});
    //catnavw 
    $(".catnavw .cnavi").click(function(e){
      e.preventDefault();
      var id = $(this).data("id");
      var $t = $("#" + id);
      if(!!$t[0]){
        var top = $t.offset().top;
        $(window).scrollTop(top-30);
      }
    });
    
    setLtiHeight();
    //图谱tab
    $(".cattab a").click(function(e){
      e.preventDefault();
      $(".cattab a").removeClass("active");
      $(this).addClass("active");
      $(".tabcon").removeClass("active");
      $("#" + $(this).data("id")).addClass("active");
      setLtiHeight();
    });
  });
})(jQuery);