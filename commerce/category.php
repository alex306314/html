<?php include 'header_tu.php'; ?>

<div id="maincon" class="catecon">
    <div class="max_width clearfix">
        
        <div class="cattab clearfix">
            <a class="active" data-id="industry_category">行业分类</a>
            <a data-id="city_category">城市分类</a>
        </div>

        <div class="tabcon active" id="industry_category">
            <div class="tabti">
                <h4>近期热门推荐</h4>
            </div>
            <div class="hotrec">
                <div class="wra clearfix">
                    <?php for($i=1;$i<=4;$i++){?>
                    <div class="logoitem">
                        <a class="imgw" href="category_detail.php"><img src="images/sample_logo2.jpg"></a>
                        <a class="bow" href="category_detail.php">
                            <span class="tx">大众点评</span>
                            <span class="m">去看看>></span>
                        </a>
                    </div>
                    <?php } ?>
                </div>
            </div>
            <?php 
            $cats = [
                ['id'=>1, 'name'=>'餐饮', 'enname'=>'repast'],
                ['id'=>2, 'name'=>'社区', 'enname'=>'commnuity'],
                ['id'=>3, 'name'=>'美业', 'enname'=>'meiye'],
                ['id'=>4, 'name'=>'家居', 'enname'=>'house'],
                ['id'=>5, 'name'=>'旅游', 'enname'=>'travel'],
                ['id'=>6, 'name'=>'教育', 'enname'=>'educate'],
                ['id'=>7, 'name'=>'医疗', 'enname'=>'remedy'],
                ['id'=>8, 'name'=>'汽车', 'enname'=>'car'],
                ['id'=>9, 'name'=>'出行', 'enname'=>'trip'],
                ['id'=>10, 'name'=>'房产', 'enname'=>'house_property'],
                ['id'=>11, 'name'=>'零售', 'enname'=>'retail'],
                ['id'=>12, 'name'=>'服务商', 'enname'=>'service'],
                ['id'=>13, 'name'=>'婚嫁', 'enname'=>'marriage'],
                ['id'=>14, 'name'=>'金融', 'enname'=>'financial'],
                ['id'=>14, 'name'=>'其它', 'enname'=>'others'],
            ];
            ?>
            <div class="catnav">
                <div class="catnavw clearfix">
                    <?php foreach($cats as $k=>$v){ ?>
                    <a class="cnavi" data-id="catlist_<?=$v['enname']?>">
                        <span class="micon <?= $v['enname']?>"></span>
                        <span class="tx"><?=$v['name']?></span>
                    </a>
                    <?php } ?>
                </div>
            </div>

            <div class="catlistw clearfix" id="catlist_repast">
                <div class="lti">
                    <div class="tiw">
                        <span class="micon repast"></span>
                        <span class="tx">餐饮</span>
                    </div>
                    <span class="vlin"></span>
                    <div class="circle c1"></div>
                    <div class="circle c2"></div>
                </div>
                <div class="rlc">
                    <div class="catlistinw">
                    <div class="catlistin clearfix">

                        <?php for($i=1;$i<=12;$i++){?>
                        <div class="logoitem">
                            <a class="imgw"><img src="images/sample_logo1.jpg"></a>
                            <a class="bow" href="">
                                <span class="tx">大众点评</span>
                                <span class="m">去看看>></span>
                            </a>
                        </div>
                        <?php } ?>

                    </div>
                    </div>
                    <a class="openmore">展开更多企业>></a>
                </div>
            </div>

        </div><!--tabcon end #industry_category end-->

        <!--/////////////////////////////////////////-->
        <div class="tabcon" id="city_category">

            <div class="tabti">
                <h4>近期热门推荐</h4>
            </div>
            <div class="hotrec">
                <div class="wra clearfix">
                    <?php for($i=1;$i<=4;$i++){?>
                    <div class="logoitem">
                        <a class="imgw" href="category_detail.php"><img src="images/sample_logo2.jpg"></a>
                        <a class="bow" href="">
                            <span class="tx">大众点评</span>
                            <span class="m">去看看>></span>
                        </a>
                    </div>
                    <?php } ?>
                </div>
            </div>
            <?php 
            $cats = [
                ['id'=>1, 'name'=>'北京', 'enname'=>'beijing'],
                ['id'=>2, 'name'=>'天津', 'enname'=>'tianjin'],
                ['id'=>3, 'name'=>'重庆', 'enname'=>'chongqing'],
                ['id'=>4, 'name'=>'上海', 'enname'=>'shanghai'],
                ['id'=>5, 'name'=>'河南', 'enname'=>'henan'],
                ['id'=>6, 'name'=>'山西', 'enname'=>'shanxi'],
                ['id'=>7, 'name'=>'河北', 'enname'=>'hebei'],
                ['id'=>8, 'name'=>'陕西', 'enname'=>'shaanxi'],
                ['id'=>9, 'name'=>'宁夏', 'enname'=>'ningxia'],
                ['id'=>10, 'name'=>'辽宁', 'enname'=>'liaoning'],
                ['id'=>11, 'name'=>'吉林', 'enname'=>'jilin'],
                ['id'=>12, 'name'=>'山东', 'enname'=>'shandong'],
                ['id'=>13, 'name'=>'海南', 'enname'=>'hainan'],
                ['id'=>14, 'name'=>'福建', 'enname'=>'fujian'],
                ['id'=>14, 'name'=>'广东', 'enname'=>'guangdong'],
            ];
            ?>
            <div class="catnav cities">
                <div class="catnavw clearfix">
                    <?php foreach($cats as $k=>$v){ ?>
                    <a class="cnavi" data-id="citylist_<?=$v['enname']?>" ><?=$v['name']?></a>
                    <?php } ?>
                    <a class="cnavi">更多>></a>
                </div>
            </div>

            <div class="catlistw cities clearfix" id="citylist_beijing">
                <div class="lti">
                    <div class="tiw">北京</div>
                    <span class="vlin"></span>
                    <div class="circle c1"></div>
                    <div class="circle c2"></div>
                </div>
                <div class="rlc">
                    <div class="catlistinw">
                    <div class="catlistin clearfix">

                        <?php for($i=1;$i<=12;$i++){?>
                        <div class="logoitem">
                            <a class="imgw"><img src="images/sample_logo1.jpg"></a>
                            <a class="bow" href="">
                                <span class="tx">大众点评</span>
                                <span class="m">去看看>></span>
                            </a>
                        </div>
                        <?php } ?>

                    </div>
                    </div>
                    <a class="openmore">展开更多企业>></a>
                </div>
            </div>

        </div><!-- #city_category end -->
        
    </div>
</div><!--#maincon end-->

<?php include 'footer.php';?>

    