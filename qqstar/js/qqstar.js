(function(){

    function invite() {
        //喊朋友来抢钱
        $(".btn_invite").click(function(e){
            e.preventDefault();
            $(".modal_bg").addClass("show invite_bg");
            $(".dlg_invite").addClass("show");
        })
        $(".btn_know").click(function(e){
            e.preventDefault();
            $(".modal_bg").removeClass("show invite_bg");
            $(".dlg_invite").removeClass("show");
        });
    }

    //活动规则
    function rules(){
        $(".btn_rules").click(function(e){
            e.preventDefault();
            var wh = $(window).height();
            var rh = $(".dlg_rules").height();
            var top = wh>=rh ? (wh-rh)/2 : 500;
            $(".dlg_rules").css({
                top: top + "px"
            });
            $(".modal_bg").css({
                height:$(document).height()+"px"
            });
            $(".modal_bg").addClass("show");
            $(".dlg_rules").addClass("show");
        });
        $(".dlg_rules .btn_close").click(function(e){
            e.preventDefault();
            $(".modal_bg").removeClass("show");
            $(".dlg_rules").removeClass("show");
        });
    }

    function showAlert(msg){
        var dlg = $(".dlg_alert");
        dlg.find(".con").html(msg);
        dlg.css({top:'4rem'}).addClass("show");
    }
    function hideAlert(msg){
        $(".dlg_alert").removeClass("show");
    }
    function btn_nowget(){
        $(".btn_nowget").click(function(e){
            e.preventDefault();
            var $m = $(".ipt_mobile");
            var phone=$m.val();
            if(phone == ""){
                showAlert($m.data("empty"));
                return;
            }
            if(!(/^(13[0-9]|14[7]|15[0|1|2|3|5|6|7|8|9]|18[0-9])\d{8}$/.test(phone))){
                showAlert($m.data("phone-err"));
                return;
            }
            $("#frm_qian").submit();
        });
    }


    //document ready
    $(function(){
        invite();
        rules();
        btn_nowget();
        $(".dlg_alert .btn_close").click(function(e){
            e.preventDefault();
            hideAlert();
        });
    });
})(jQuery);