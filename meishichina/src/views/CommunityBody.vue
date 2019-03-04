<template>
    <div id="main">
        <div class="container">
            <!--nav-->
            <div class="nav">
                <ul>
                    <li><a href="#">广场</a></li>
                    <li><router-link to="communityheader/topic">热门话题</router-link></li>
                    <li><router-link to="communityheader/topic">精华话题</router-link></li>
                    <li><router-link to="communityheader/rizhi">精华日志</router-link></li>
                    <li><router-link to="/">免费抽奖</router-link></li>
                </ul>
            </div>       
            <!--body-right-->
            <div class="body-right">
                <div class="d1">
                    <div class="left"><a href="#"><img src="img/community-img/2.0.jpg" alt=""></a></div>
                    <div class="right">
                        <p><a href="#">ACA/北美电器 AHM-P125A手持搅拌器电动打蛋器</a></p>
                        <p>2018年10月17日-10月23日</p>
                        <p>￥79.00<a href="#">免费抽奖</a></p>
                    </div>
                </div>
                <div class="d2">
                    <div class="left"><a href="#"><img src="img/community-img/2.1.jpg" alt=""></a></div>
                    <div class="right">
                        <p><a href="#">Haier 海尔智能嫩烤箱 (娇嫩粉)</a></p>
                        <p>2018年10月08日-11月08日</p>
                        <p>￥1999.00<a href="#">免费抽奖</a></p>
                    </div>
                </div>
                <div class="d3">
                    <div class="left"><a href="#"><img src="img/community-img/2.2.jpg" alt=""></a></div>
                    <div class="right">
                        <p><a href="#">蛋清分离器打蛋器烤箱油纸</a></p>
                        <p>2018年10月22日-10月28日</p>
                        <p>￥30.00<a href="#">免费抽奖</a></p>
                    </div>
                </div>
                <div class="d4">
                    <div class="left"><a href="#"><img src="img/community-img/2.3.jpg" alt=""></a></div>
                    <div class="right">
                        <p><a href="#">ACA/北美电器 AHM-S300手持式婴儿辅食 料理机 多功能搅拌料理棒</a></p>
                        <p>2018年10月19日-10月25日</p>
                        <p>￥299.00<a href="#">免费抽奖</a></p>
                    </div>
                </div>
                <div class="d5"><a href="#"><img src="img/community-img/right.jpg" alt=""></a></div>
            </div>
            <!--body-left-->
            <div class="body-left">
                <div class='carousel'>
                    <el-carousel :interval="0" arrow="always" class="lunbo">
                        <el-carousel-item v-for="(item,index) in sliders">                   
                            <a href="#" class="show"><img :src="item.img" alt=""></a>
                            <a href="#" class="title">{{item.title}}</a>
                            <a href="#" class="netFriend"><img :src="item.netFriend_img" alt=""><span>{{item.name}}</span></a>
                            <p class="comment">{{item.comment}}</p>                
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="hot-title">
                    <h3>热门话题</h3>
                    <router-link to="communityheader/topic">话题首页</router-link>
                    <a href="#">妈妈派</a>
                    <a href="#">厨艺交流</a>
                    <a href="#">烘焙圈</a>
                    <router-link to="communityheader/topic">美食随手拍</router-link>               
                </div>
                <div class="list">
                    <ul>
                        <li v-for=" item in topic">
                            <div class="t">
                                <a href="#" class="T1"><img :src="item.upic" alt=""></a>
                                <div>
                                    <a href="#" class="title">{{item.user_name}}</a>
                                    <span class="time">2小时前</span>
                                </div>
                            </div>
                            <div class="b">
                                <span>{{item.title}}{{item.t_disc}}</span>
                                <div>
                                    <a href="#" v-for="p in item.pic"><img :src="p" alt=""></a>
                                    <a class="over-num" style="display:none">1</a>
                                </div>
                                <p>1个喜欢，6条评论</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p class="p1"><a href="#" title="美食天下">美食天下 - 让吃更美好</a></p>
            <p class="p2"><a href="#" title="菜谱">菜谱</a> · 
                <a href="#" title="食材">食材</a> · 
                <a href="#" title="魔方">魔方</a> · 
                <a href="#" title="关于我们">关于我们</a> · 
                <a href="#" title="联系我们">联系我们</a> · 
                <a href="#" title="加入我们">加入我们</a> · 
                <a href="#" title="服务声明">服务声明</a> · 
                <a href="#" title="友情链接">友情链接</a> · 
                <a href="#" title="网站地图">网站地图</a> · 
                <a href="#" title="移动应用">移动应用</a>
            </p>
            <p class="p3">© 2004-2018 美食天下 保留所有权利 - 京ICP证090244号</p>
            <div class="d1"><img src="img/community-img/footer-1.png" alt=""><span>手机客户端</span></div>
            <div class="d2"><img src="img/community-img/footer-2.png" alt=""><span>微信公众号</span></div>
        </div>
        <div class="fixed">
            <a href="#"><img src="img/community-img/gotop.png" alt=""></a>
        </div>
    </div>
</template>
<script>
    import  {setIP} from '../../public/js/SetIP.js'
    export default {
        data(){
            return {
                    topic:[],
                    pic:[],
                    sliders:[
                        {img:"img/community-img/2018102115400868112119732003.jpg",
                        title:"干耗牛肉蒸土豆",
                        netFriend_img:"img/community-img/1.1.jpg",
                        name:"食色",
                        comment:"风干牦牛肉？或许是吧，只是显然还不够干。羌藏之地的特产。表面抹满辣椒，当然还有盐..."
                        },
                        {img:"img/community-img/2018102215401704095789702111.jpg",
                        title:"红糖红枣大麦茶",
                        netFriend_img:"img/community-img/1.1.jpg",
                        name:"食色",
                        comment:"大麦茶是将大麦炒制后再经过沸煮而得，有一股浓浓麦香。据说，喝大麦茶能开胃，助消化..."
                        },
                        {img:"img/community-img/2018102115400876769439732003.jpg",
                        title:"冬瓜绿豆汤",
                        netFriend_img:"img/community-img/49_avatar_big.jpg",
                        name:"rosejyy2000",
                        comment:"前几天呀，特别焖热，自己又有点上火。冬瓜也放在冰箱几天了，赶快做个冬瓜绿豆汤吧，..."
                        },
                        {img:"img/community-img/2018102315402571787399702111.jpg",
                        title:"无花果莲子百合糖水",
                        netFriend_img:"img/community-img/1.1.jpg",
                        name:"食色",
                        comment:"无花果正是时令果蔬。《随息居饮食谱》载，“甘寒。清热疗痔，润肠，上利咽喉。”广府..."
                        },
                        {img:"img/community-img/2018102415403437957589702111.jpg",
                        title:"莲藕苹果排骨汤",
                        netFriend_img:"img/community-img/1.1.jpg",
                        name:"食色",
                        comment:"苹果，莲藕均是秋日蔬果。藕，据《随息居饮食谱》载，“甘平，熟食，开胃舒郁，补虚养..."
                        },
                        {img:"img/community-img/2018102515404371127519702111.jpg",
                        title:"咖喱热干面",
                        netFriend_img:"img/community-img/1.1.jpg",
                        name:"食色",
                        comment:"本来想用通心粉来做咖喱，刚一转念便想起来自武汉的热干面之干挂面。1-2毫米粗线的圆柱..."
                        }
                    ],
            }
        },
        created(){
            this.axios.get(setIP()+"community").then(res=>{
                 this.topic=res.data.topic;
                 this.pic=res.data.pic;
                 for(var i in this.topic){
                     this.topic[i].pic=[];
                     for(var j in this.pic){
                         if(this.pic[j].tid==this.topic[i].tid)
                            this.topic[i].pic.push(this.pic[j].tp_src);
                     }
                 }
                 this.topic=this.topic.slice(1,16);
            });
        },
    }
</script>
<style>
    /*修改轮播图组件*/
    .body-left .lunbo .el-carousel__container .el-carousel__arrow--left{
        left:0;
    }
    .body-left .lunbo .el-carousel__container .el-carousel__arrow--right{
        right:0;
    }
    .body-left .lunbo .el-carousel__indicator{
        display:none;
    }
    .body-left .lunbo .el-carousel__container .el-carousel__arrow{
        border-radius:0%;
        height:55px;
        top:40%;
    }
</style>
<style scoped>

    *{
        padding:0;
        margin:0;
    }
    a{
        color:#000;
        text-decoration:none;
    }
    #main{
        text-align:left;
    }
    div.container{
        width:990px;
        margin:0px auto 20px;
        padding-bottom:20px;
        border-bottom:1px solid #999;
        
    }
    /**********************logo**********************/
    div.logo{
        position:relative;
    }
    div.logo:after{
        display:block;
        content:"";
        clear:both;
    }
    div.logo .left{
        width:22%;
        float:left;
    }
    div.logo .left img{
        width:108px;
        vertical-align: middle
    }
    div.logo .left a:last-child{
        width:60px;
        height:30px;
        color:#fff;
        text-align:center;
        line-height:30px;
        border-radius:5px;
        display:inline-block;
        background:#FF838B;
        margin:auto 20px;
        font-size:20px;

    }
    div.logo .left a:last-child:hover{
    background:#F5525A;
    }
    div.logo .right,.middle{
        width:27%;
        float:right;
        height:45px;
        line-height:45px;
        text-align:right;
    }
    div.logo .middle a{
        font-size:20px;
        margin-left:15px;
    }
    div.logo .middle a:first-child{
        color:#FF838B;
    }
    div.logo .middle a:hover{
        color:#FF838B;
    }
    div.logo .right input{
        height:25px;
        border-radius:3px 0 0 3px;
        border-right:none;
    }
    div.logo .right a{
    font-size:15px;
    display:inline-block;
    background:#999;
    color:#fff;
    height:29px;
    line-height:29px;
    border-radius:0 3px 3px 0;
    padding-right:10px;
    }
    div.logo .right a:hover{
        background:#FF838B;
    }
    div.logo .right a img{
        width:15px;
        vertical-align: middle;
        margin:0 10px;
    }
    div.logo b{
        display:block;
        width:0px;
        height:0px;
        border-bottom:10px solid #FF838B;
        border-left:10px solid #fff;
        border-right:10px solid #fff;
        position:absolute;
        left:51%;
        bottom:-15px;
    }
    div.logo i{
        display:block;
        width:0px;
        height:0px;
        border-bottom:10px solid #fff;
        border-top:10px solid transparent; 
        border-left:10px solid transparent;
        border-right:10px solid transparent; 
        position:absolute;
        left:51%;
        bottom:-16px;
    }

    /**********************nav**********************/
    div.nav{
        height:35px;
        line-height:35px;
        margin-top:15px;
        border-top:1px solid #FF838B;
        border-bottom:1px solid #FF838B;
    }
    div.nav ul li{
        list-style:none;
        display:inline-block;
        margin:0 10px;
    }
    div.nav ul li:first-child a,div.nav ul li a:hover{
        color:#FF838B;
    }

    /**********************body**********************/
    div.body-left{
        margin-top:30px;
        width:640px;
        float:left;
        overflow:hidden;
    }
    div.body-right{
        margin-top:30px;
        width:300px;
        float:right;
    }
    div.container:after{
        display:block;
        content:"";
        clear:both;
    }

    /**********************body-right**********************/
    div.body-right img{
        width:60px;
        background:#F2F2F2;
    }
    div.body-right .d1 div,.d2 div,.d3 div,.d4 div{
        float:left;
    }
    div.body-right .d1:after,.d2:after,.d3:after,.d4:after{
        display:block;
        content:"";
        clear:both;
    }
    div.body-right .right{
        width:76%;
        margin-left:4%;
        padding-bottom:30px;
    }
    div.body-right .right p:first-child{
        font-size:15px;
    }
    div.body-right .right p:first-child a:hover{
        color:#FF838B;
        text-decoration:underline;
    }
    div.body-right .right p:nth-child(2){
        font-size:12px;
        color:#999;
        margin:3px 0;
    }
    div.body-right .right p:last-child{
        text-decoration:line-through;
        font-size:12px;
        color:#FF838B;
        position:relative;
    }
    div.body-right .right p:last-child a{
        display:inline-block;
        border:1px solid #FF838B;
        border-radius:10px;
        font-size:14px;
        padding:2px 10px;
        position:absolute;
        right:0;
        color:#FF838B;
    }
    div.body-right .right p:last-child a:hover{
        background:#FF838B;
        color:#fff;
    }
    div.body-right .d5 a img{
        width:100%;
    }

    /**********************body-left**********************/
            .body-left .carousel .el-carousel__item{
                background-color:#F7F7F7;
            }
            .body-left .carousel .lunbo{
                width:40%;
                margin:0 auto;
                width:640px;
                height:240;
            }
           .body-left .carousel .el-carousel__arrow{
               border-radius:0;
           }
           .body-left .carousel .el-carousel__item{
                height:80%;
            }
           .body-left .carousel .show{
                float:left;
                height:100%;
                display:block;
                margin:0 25px 0 0;
            }
           .body-left .carousel .title{
                margin:15px 0;
                font-size:20px;
                display:block;
                height:30px;
                line-height:30px;
            }
          .body-left .carousel .title:hover{
                color:#FF838B;
                text-decoration:underline;
            }
           .body-left .carousel .netFriend{
                float:left;
                width:290px;
                height:40px;
                display:block;
                margin:25px 0 15 0;
                padding:20px 0 10px 0;
            }
          .body-left .carousel .netFriend img{
                width:30px;
                border-radius:50%;
                margin-right:10px;
                vertical-align:middle;
            }
           .body-left .carousel .netFriend span{
                color:#999;
                font-size:8px;
            }
         .body-left .carousel  .netFriend span:hover{
                text-decoration:underline;
            }
          .body-left .carousel p{
                font-size:14px;
                padding-right:50px;
            }     
            






    div.body-left .hot-title{
        border-bottom:1px solid #999;
        margin-top:-35px;
        height:31px;
        z-index:1;
    }
    div.body-left .hot-title h3{
        float:left;
        color:#FF838B;
        font-weight:400;
        padding-bottom:5px;
        border-bottom:3px solid #F5525A;
    }
    div.body-left .hot-title a{
        list-style:none;
        float:right;
        margin-left:15px;
        font-size:16px;
        line-height:31px;
    }
    div.body-left .hot-title a:hover{
        color:#FF838B;
    }
    div.body-left .list ul li{
        list-style:none;
        margin-top:20px;
    }
    div.body-left .list ul li .T1 img{
        float:left;
        width:40px;
        border-radius:50%;
        vertical-align:middle;
        margin:0 10px 0 0;
    }
    div.body-left .list .t{
        float:left;
        width:80%;
    }
    div.body-left .list .t div span{
        color:#999;
    }
    div.body-left .list ul li .title{
        font-size:14px;
        display:block;
        width:88%;
        float:left;
    }
    div.body-left .list ul li .title:hover,.list .b span:hover{
        text-decoration:underline;
    }
    div.body-left .list ul li span{
        display:block;
        float:left;
        font-size:12px;
    }
    div.body-left .list .b{
        margin-left:50px;
    }
    div.body-left .list .b div{
        height:125px;
        width:100%;
        overflow:hidden;
        position:relative;
    }
    div.body-left .list .b span{
        font-size:14px;
        color:#999;
        width:90%;
    }
    div.body-left .list .b a img{
        width:100px;
        margin:10px 7px 10px 0;
    }
    div.body-left .list .b p{
        font-size:14px;
        color:#999;
    }
    div.body-left .list .b div .over-num{
        position:absolute;
        display:inline-block;
        width:20px;
        height:20px;
        right:62px;
        bottom:15px;;
        background:rgb(0,0,0,.5);
        color:#fff;
        font-size:10px;
        text-align:center;
        line-height:20px;
    }

    /**********************bottom**********************/
    div.bottom{
        width:990px;
        margin:25px auto;
        position:relative;
    }
    div.bottom p a:hover{
        text-decoration:underline;
        color:#f50;
    }
    div.bottom p{
        margin-bottom:6px;
    }
    div.bottom .p1 a{
        font-size:14px;
        font-weight:700;
        color:#f50;
    }
    div.bottom .p2 a{
        font-size:12px;
        color:#aaa;
    }
    div.bottom .p3{
        font-size:12px;
        color:#999;
    }
    div.bottom img{
        width:82px;
        display:block;
    }
    div.bottom .d1{
        position:absolute;
        padding-bottom:15px;
        right:110px;
        top:0;

    }
    div.bottom div span{
        font-size:10px;
        margin-left:10px;
    }
    div.bottom .d2{
        position:absolute;
        padding-bottom:15px;
        right:0;
        top:0;
    }
    div.fixed{
        position:fixed;
        left:1490px;
        bottom:0;
        width:58px;
        height:58px;
        border-radius:50%;
        margin-bottom:15px;
    }
    div.fixed img{
        width:58px;
    }
    div.fixed a:hover img{
        opacity:.6;
    }
</style>