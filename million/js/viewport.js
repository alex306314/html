/**
 *<meta content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" name="viewport">
 */
(function(init_width){
    var isAndroid=navigator.userAgent.match(/(Android)/i)
    , viewPort = document.querySelector("meta[name=viewport]");
    window.html_font_size = isAndroid?100:window.innerWidth*100/init_width;
    function setHtmlWidth(){
        document.querySelector("html").style.fontSize = html_font_size + "px";
    }
    if (isAndroid) {
        content = "target-densitydpi=320,width="+init_width+",user-scalable=no";
        viewPort.setAttribute("content",content);
    }else{
        setHtmlWidth();window.onresize = setHtmlWidth;
    }
})(640)