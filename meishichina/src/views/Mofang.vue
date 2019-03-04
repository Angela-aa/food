<template>
    <div id="main">
        <div id="header" v-for="t in list">
            <a href="#"><img :src="t.banner" alt=""/></a>
        </div>
        <!--文字部分-->
        <div id="body">
            <div class="header1 clear">
                <ul class="collect clear">
                    <li class="fav"><a title="收藏" href="#" ><i></i><span>518</span>人收藏</a></li>
                    <li class="shar1"><a title="分享到微信" href="#"><i></i>微信</a></li>
                    <li class="shar2"><a title="分享到QQ好友" href="#"><i></i>QQ好友</a></li>
                    <li class="shar3"><a title="分享到新浪微博" href="#"><i></i>新浪微博</a></li>
                </ul>
                <p id="p1">浆果是果实的一种类型，是由子房或联合其他花器发育成柔软多汁的肉质果。属于单果，常见于分属于不同科属的多种植物。浆果的外果皮较薄，一枚果实中常有许多种子，浆果类果树种类很多，如葡萄、猕猴桃、树莓、无花果、石榴、杨桃、、番木瓜、番石榴、蓝莓、西番莲等。</p>
            </div>
            <div >
                <div class="title" v-for="item in clss">
                    <h2><img src="img/mofang_img/mo.png" alt=""/>{{item.class_title}}</h2>
                    <p>{{item.class_disc}}</p>
               
                    <div class="img clear" >
                        <ul>
                            <li v-for="c in item.pic" > 
                                <div>
                                    <a :title="c.cp_title" href="#">
                                        <span class="copyright">独家</span>
                                        <img class="Img" :src="c.cp_disc"  alt=""/>                                
                                    <span class="img_title">{{c.cp_title}}</span>
                                    </a>
                                </div>                        
                            </li>
                      </ul>
                </div>
             </div>
        </div>
    </div>
        <!--底部-->
        <div id="footer">
            <div class="hr"></div>
            <div class="ft1">
                <p class="c1"><a href="#">美食天下 -让吃更美好!</a></p>
                <p class="c2">
                    <a title="菜谱" href="#">菜谱</a>•
                    <a title="食材" href="#">食材</a>•
                    <a title="魔方" href="#">魔方</a>•
                    <a title="关于我们" href="#">关于我们</a>•
                    <a title="联系我们" href="#">联系我们</a>•
                    <a title="加入我们" href="#">加入我们</a>•
                    <a title="服务声明" href="#">服务声明</a>•
                    <a title="友情链接" href="#">友情链接</a>•
                    <a title="网站地图" href="#">网站地图</a>•
                    <a title="移动应用" href="#">移动应用</a>
                </p>
                <p class="c3">© 2004-2018 美食天下 保留所有权利 - 京ICP证090244号</p>
            </div>
            <div class="ft3"><img title="微信公众号" src="img/mofang_img/weixin.png" alt="">微信公众号</div>
            <div class="ft2"><img title="手机客户端" src="img/mofang_img/msc_app.png" alt="">手机客户端</div>
            <div class="fixed-footer"><a title="点击返回页面顶部" href="#"><img src="img/mofang_img/gotop.png" alt=""></a></div>
        </div>
    </div>
</template>
<script>
    import  {setIP} from '../../public/js/SetIP.js'
    export default {
        data(){
            return{
                list:[],
                pics:[],
                clss:[],
                pic:[],
                i:0,
                id:this.$route.params.id//主页id
             }     
        },
        methods:{
            getImg(){
                 var url=setIP()+"mofang?id="+this.id;//http://localhost:3030/mofang?id=2
                    this.$http.get(url).then(result=>{
                        console.log(result)
                        this.list=result.body.mf;
                        this.list.map(item=>{
                            item.banner = setIP()+item.banner;
                        })                       
                        this.clss=result.body.class;
                        this.pics=result.body.pics;  
                        this.pics.map(item=>{
                            item.cp_disc = setIP()+item.cp_disc;
                        })
                           for(var i in this.clss){
                               this.clss[i].pic=[];
                             for(var j in this.pics){ 
                                    if(this.clss[i].class_id==this.pics[j].class_id){
                                       this.clss[i].pic.push(this.pics[j]);
                               }                               
                             }
                         } 
                    })                 
             },
            
 
        },
         created(){
          this.getImg();
        },
 }
</script>
<style scoped>
    .img .img_title:hover{
        color:red;
    }
    *{
        margin:0;
        padding:0;
    }
    #header{
     height:340px;
    }
    #header a img{
    width:100%;
    height:90%;
    margin-top:43px;
    margin-bottom:42px;
    }
    #body{
        width:1000px;
        margin:45px auto 0 auto;
        padding:0;
        overflow: hidden;
    }
    #p1{
         text-align:center;
         overflow:hidden;
         display:block;
         position:relative;
     }
    #body p{
        display:block;
        margin-bottom: 12px;
        overflow:hidden;
        text-align:left;
    }
    #body .header1{
        padding:15px 0;
    }
    ul.collect{
        display:block;
        width:300px;
        margin:0 0 5px 10px;
        float:right;
    }
    .collect li{
        width:25%;
        height:53px;
        float:left;
        
    }

    .collect li a{
        text-decoration: none;
        display: block;
        text-align: center;
        white-space: nowrap;
        color: #999;
        font-size: 11px;
    }
    .collect li a i{
        width: 30px;
        height: 30px;
        display: block;
        margin: 2px auto;
        background-image: url("/../img/mofang_img/logo.png");
        background-size: 300px 30px;
    }
    .collect .fav a i{
        background-position:600px,30px;
    }
    .collect .fav a i:hover{
        background-position:570px,30px;
    }
    .collect .shar1 a i{
        background-position:450px,30px;
    }
    .collect .shar2 a i{
        background-position:510px,30px;
    }
    .collect .shar3 a i{
        background:url("/../img/mofang_img/logo.png")  540px,30px;
        background-size: 300px 30px;
    }
    ul{
        list-style:none;
    }
    #p1{
        
        height:132px;
        background:#fff;
        font-size: 18px;
        color: #333;
        padding: 0 0 20px 0;
        position:relative;
        overflow:hidden;
    }
    .title{
        color:#ff6767;
        font-size:20px;
        line-height: 20px;
        padding:10px 0 20px 0;
        background:rgba(0,0,0,0)
    }
    .title h2{
        font-size: 100%;
        font-weight:400;
        text-align:left;
        padding:20px 0;
    }
    #body p{
        font-size:17px;
        color:#333;
        padding:30 0 5px 0;
    }
    #body .img{
        width:1111px;
        text-align:center;
        position:relative;
    }
    .clear:after{
        clear: both;
        content: ' ';
        display: block;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
    .img li{
        float:left;
        width:230px;
    }
    .img ul li .copyright{
        background: rgba(0,0,0,.5);
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        height: 20px;
        left: 5px;
        line-height: 20px;
        padding: 1px 4px;
        position: absolute;
        top: 5px;
        z-index: 1;
    }
    .img div{
        display:block;
        width:230px;
        height:268px;
        text-align:center;
        position:absolute;
    }
    .img ul li{
        float: left;
        margin: 0 20px 20px 0;
        width: 230px;
        height: 268px;
        text-align: center;
        
    }
    .img ul li a:hover span{
        color:#FF6761;
    }
    #body .img ul li div{
        position:absolute;
        text-align:center;
    }
    #body .img ul li div a{
        display:block;
        width:230px;
        height:230px;
        overflow:hidden;
    }
    #body .img ul li div a img{
       width:230px;
       height:230px;
       transition:all 1s linear !important;
    }
    .img ul li a:hover{
        height:230px;
    }
    .img ul li a:hover img{
        transform:scale(1.1);
    }
    .img a{
        color: #333;
        text-decoration: none;
        cursor:pointer;
        
    }
    .img .Img{
        float:right;
        width: 230px;
        height: 230px;
        margin:auto;
        overflow:hidden;
        position:relative;
    }
    .img span.img_title{
        position:absolute;
        left:54px;
        bottom:0;
        text-align:center;
        display:block;
    }
    .img span{
        color: #333;
        display: block;
        font-size: 15px;
        overflow: hidden;
        padding: 5px 0;
        text-align:center;
    }
    #footer{
        border-top:2px solid #e8e8e8;
        width:1000px;
        margin:auto;
        padding:10px 0;
        margin-bottom: 10px;
    }
    #footer .ft1{
        float: left;
        font-size: 11px;
        color: #666;
        width:680px;
        padding-top: 10px;
        text-align:left;
    }
    #footer a{
        text-decoration: none;
    }
    #footer .ft1 p{
        margin-bottom:6px;
    }
    #footer .ft1 .c1 a{
        font-size:15px;
        color:#f50;
        font-weight:700;
    }
    #footer .ft1 .c1 a:hover{
        text-decoration: underline;
    }
    #footer .ft1 .c2 a{
        font-size:12px;
        color:#666;
        padding-right:2px;
        telt-align:left;
    }
    #footer .ft1 .c2 a:hover{
        color:#f30;
        text-decoration: underline;
    }
    #footer .ft1 .c3{
        font-size:11px;
        color:#666;
    }
    .ft2,.ft3{
        clear:none;
        display:block;
        text-align:center;
    }
    #footer .ft2{
        width:82px;
        heifght:100;
        margin:0 798px;
        font-size:13px;
    }
    #footer .ft3{
        width:82px;
        heifght:100;
        float:right;
        margin:0;
        font-size:12px;
    }
    #footer .ft2 img{
        width:82px;
        height:82px;
        display:block;
    }
    #footer .fixed-footer{
    position: fixed;
    bottom: 10px;
    left: 1455px;
    }
   #footer .fixed-footer img{
    width: 58px;
    height:58px;
   }

    
</style>