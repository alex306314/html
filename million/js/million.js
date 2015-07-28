(function($){
  function tabaction(){
    $(".tabaction").click(function(e){
      e.preventDefault();
      $(this).toggleClass("open").toggleClass("close");
    });
  }

  function showyknow(){
    $('.dlgbg').addClass("show");
    var top = (window.innerHeight - $(".dlg_join_suc").height())/2;
    top = top<0?0:top;
    $(".dlg_join_suc").css({
      top:top + "px"
    }).addClass("show");
  }
  function hideknow(){
    $('.dlgbg').removeClass("show");
    $(".dlg_join_suc").removeClass("show");
  }

  function btn_joinnow(){
    //立即参与按钮
    $(".btn_joinnow").click(function(e){
      e.preventDefault();
      showyknow();
    });
    $(".dlg_join_suc .close").click(function(){
      var href = $(this).data("href");
      if(typeof(href)!="undefined"){
        hideknow();
        window.location = href;
      }
      hideknow();
    });
  }
  
  //邀请码验证页面
  function btn_verify(){
    //按钮 立即验证
    $(".btn_verify").click(function(e){
      e.preventDefault();
      $('.dlgbg').addClass("show");
      var top = (window.innerHeight - $(".dlg_verify_suc").height())/2;
      top = top<0?0:top;
      $(".dlg_verify_suc").css({
        top:top + "px"
      }).addClass("show");
    });
    $(".dlg_verify_suc .btn_iknow").click(function(e){
      e.preventDefault();
      hideknow();
    });
    //按钮 放弃验证
    $(".btn_verify_cancel").click(function(e){
      e.preventDefault();
      $('.dlgbg').addClass("show");
      var top = (window.innerHeight - $(".dlg_verify_cancel").height())/2;
      top = top<0?0:top;
      $(".dlg_verify_cancel").css({
        top:top + "px"
      }).addClass("show");
    });
    //弹出框 放弃验证 确定
    $(".dlg_verify_cancel .btn_iknow1").click(function(e){
      e.preventDefault();
      hideknow();
    });
    //弹出框 放弃验证 取消
    $(".dlg_verify_cancel .btn_iknow2").click(function(e){
      e.preventDefault();
      hideknow();
    });
  }

  /**
   * 进度条控制类
   */
  var Progress = function(options){
    this.$s = -1;
    this.val = 0;
    this.time = 1000;
    this.initialize(options);
  };
  Progress.prototype = {
    initialize: function(options){
      var self = this;
      $.extend(this, options);
      this.val = parseInt(this.$s.find(".reg_num").val());
      var w = this.val*2 / 100 * 6 * html_font_size;
      this.$s.find(".pfg").stop(true,false).animate({
        width: w + "px"
      }, self.time, "linear");
      for(var i=1;i<=Math.ceil(this.val/10)+1; i++){
        this.$s.find(".num.n" + i).addClass("active");
      }
    }
  };
  $.fn.progress = function(){
    $.each(this,function(i,n){
      var $s = $(n),options = $s.find(".reg_num").data("options");
      options = $.parseJSON(options.replace(/'/ig, "\"")); 
      options.$s = $s;
      new Progress(options);
    })
  }

  /**
   * 画圆
   */
  var CircleCanvas = function(options){
    this.$s = -1;
    this.max = 10;
    this.val = 0;
    this.fps = 30;
    this.angleStep = 5;
    this.sizerem = 2.1;  //圆的大小 rem
    this.canvasSize = 2.3;
    this.canvasSizePx = 0;
    this.r = 0;
    this.sizepx = 0;
    this.bgcolor = "#c2c2c2";
    this.color = "#f04c42";
    this.angle = 0;
    this.$c = -1 ;// canvas dom obj
    this.ctx = -1; //canvas context
    this.interval = -1;
    this.centx = 0;
    this.centy = 0;
    this.innerCircle = 1.68;//rem
    this.innerCircleR = 0;
    this.currentAngle = 0;
    this.initialize(options);
  };
  CircleCanvas.prototype = {
    initialize: function(options){
      $.extend(this,options);
      var self = this;
      this.val = parseInt(this.$s.find(".reg_num").val());
      this.angle = 180 * (10-this.val)/10;
      this.sizepx = Math.round(this.sizerem * html_font_size) ;
      this.r = Math.round(this.sizerem * html_font_size/2) ;
      this.canvasSizePx = Math.round(this.canvasSize * html_font_size);
      this.centx = this.centy = Math.round(this.canvasSizePx /2);
      this.innerCircleR = Math.round(this.innerCircle * html_font_size /2); 
      this.initCanvas();
      this.interval = setInterval(function(){
        self.animate(self.currentAngle);
        if(self.currentAngle > self.angle){
          clearInterval(self.interval);
        }
        self.currentAngle +=self.angleStep;
      },1000/self.fps);
    },
    animate: function(angle){
      this.clear();
       this.drawArc(angle, this.color,this.r);
       this.drawArc(angle, this.color,this.r,true);
       this.drawLine();
       //this.drawCircle();
    },
    initCanvas: function(){
      this.$c = $('<canvas width="'+this.canvasSizePx+'" height="'+this.canvasSizePx+'"></canvas>');
      this.$c.appendTo(this.$s.find(".circle"));
      this.ctx = this.$c[0].getContext("2d");
    },
    //angle 角度
    drawArc: function(angle, color,r,counterclockwise){
      var oneAngle = Math.PI/180;
      var begin = 0.5*Math.PI, end;
      counterclockwise = counterclockwise?counterclockwise:false;
      end = counterclockwise? begin-angle*oneAngle : begin+angle*oneAngle;
      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = color;
      this.ctx.beginPath();
      this.ctx.moveTo(this.centx, this.centy);
      this.ctx.arc(this.centx,this.centy,r, begin, end, counterclockwise);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
    },
    drawCircle: function(){
      var oneAngle = Math.PI/180;
      this.ctx.fillStyle = "#ffffff";
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.beginPath();
      this.ctx.moveTo(this.centx, this.centy);
      this.ctx.arc(this.centx, this.centy,this.innerCircleR, 0, 2*Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
    },
    drawLine: function(){
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = this.color;
      this.ctx.moveTo(this.centx, this.centy);
      this.ctx.lineTo(this.centx, this.sizepx);
      this.ctx.closePath();
      this.ctx.stroke();
    },
    //清除背景
    clear: function(){
      this.ctx.fillStyle = this.bgcolor;
      this.ctx.beginPath();
      this.ctx.moveTo(this.centx, this.centy);
      this.ctx.arc(this.centx, this.centy,this.r, 0, 2*Math.PI);
      this.ctx.fill();
    }
  };
  $.fn.circle_canvas = function(){
    $.each(this,function(i,n){
      var $s = $(n), options = $s.find(".reg_num").data("options");
      options = $.parseJSON(options.replace(/'/ig, "\"")); 
      options.$s = $s;
      new CircleCanvas(options);
    })
  }

  $(document).ready(function(){
    tabaction();
    btn_joinnow();
    btn_verify();
    $(".prow").progress();
    $(".circle_canvas").circle_canvas();
  });
})(jQuery);