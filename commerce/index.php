<?php include 'header.php'; ?>

    <div id="maincon">
        <div class="max_width clearfix">
            <div class="l">

                <div class="slide1w">
                    <div class="cycle-slideshow" 
                        data-cycle-fx=scrollHorz
                        data-cycle-timeout=2000
                        data-cycle-speed=400
                        data-cycle-slides="> .item" 
                        data-cycle-prev=".prevControl"
                        data-cycle-next=".nextControl"
                        >
                        <a class="item">
                            <img src="images/sample_img1.jpg">
                            <span class="txw">
                                <span>校园O2O，舍本逐末的虚火模式</span>
                            </span>
                        </a>
                        <a class="item">
                            <img src="images/sample_img1.jpg">
                            <span class="txw">
                                <span>校园O2O，舍本逐末的虚火模式</span>
                            </span>
                        </a>
                        <a class="item">
                            <img src="images/sample_img1.jpg">
                            <span class="txw">
                                <span>校园O2O，舍本逐末的虚火模式</span>
                            </span>
                        </a>
                        <div class="cycle-pager"></div>
                    </div>
                    <!-- <div class=center>
                        <span class="prevControl"> << </span>
                        <span class="nextControl"> >> </span>
                    </div> -->
                </div>

                <div class="blk_ti gray mt20">
                    <h4>热门推荐</h4>
                </div>
                <ul class="idxlist_ul">
                    <?php for($i=0;$i<10;$i++){ ?>
                    <li class="clearfix">
                        <a class="imgw"><img src="images/sample_img1.jpg"></a>
                        <div class="imgr">
                            <a class="lti" href="detail.php">餐饮餐饮上市膳食上市</a>
                            <p class="des">本文是执惠旅游创始人刘照慧专访淘在路上总裁唐一波的内容第一部分，
唐一波素有中国休闲旅游进化史之称，他见证了自由行从1.0到2</p>
                            <div class="rbo">
                                <a class="author">网友</a>
                                <a class="time">2015-6-6</a>
                                <span class="tags">
                                    <a class="a1" target="_blank">传统企业转型</a>
                                    <a class="a2" target="_blank">餐饮</a>
                                    <a class="a3" target="_blank">O2O</a>
                                </span>
                            </div>
                        </div>
                    </li>
                    <?php } ?>
                </ul>

                <ul class="pagination">  
                    <li class="active"><a class="current">1</a></li>
                    <li><a class="num" href="/page/2.html">2</a></li>
                    <li><a class="num" href="/page/3.html">3</a></li>
                    <li><a class="num" href="/page/4.html">4</a></li> 
                    <li><a class="next" href="/page/2.html">&gt;&gt;</a></li> 
                    <li><a class="end" href="/page/473.html">473</a></li>              
                    <li><input type="text" placeholder="页码" id="yema"></li>
                    <li><a id="tiaozhuan">跳转</a></li>
                </ul>

            </div><!--l end-->
            <?php include 'side.php'; ?>
        </div>
    </div><!--#maincon end-->
    <script type="text/javascript" src="js/jquery.cycle2.min.js"></script>
    <?php include 'footer.php';?>

    