<template>
    <header id="header">
        
        <div class="top_nav">
            <!-- 导航 -->
            <ul class="nav_left" @click="aaa">
                <li><router-link to="/"><i></i>首页</router-link></li>
                <li><router-link to="/recipe" target="_blank">菜谱</router-link></li>
                <li><a href="#" >食材</a></li>
                <li><a href="#">珍选</a></li>
                <li><a href="#">健康</a></li>
                <li><a href="#">专题</a></li>
                <li><router-link to="/communityheader" target="_blank">社区</router-link></li>
                <li><router-link to="/communityheader/topic" target="_blank">话题</router-link></li>
                <li><a href="#">活动</a></li>
                <li><a href="#">搜索</a></li>
                <li>
                    <i></i>
                    <div >
                        <a href="#">烘焙</a>
                        <a href="#">妈妈派</a>
                    </div>
                </li>
            </ul>
            <!-- 客户端 -->
            <a href="#"><img src="img/header_img/nr3.png" >客户端<img src="img/header_img/msc_app.png" alt=""></a>

            <ul class="nav_right">
                <li><a href="#"><img src="img/header_img/nr2.png" alt="">签到有礼</a></li>
                <!-- 发布 -->
                <li>
                    <a ><img src="img/header_img/nr1.png" alt="">发布</a>
                    <a href="#">发菜谱</a>
                    <a href="#">发话题</a>
                    <router-link to="faburizhi">发日志</router-link>
                </li>
                <!-- 登录 -->
                
                <li :class="login==-1?'':cls">
                    <a href="#"><img src="img/header_img/nir1.png">QQ登录</a>
                    <a href="#"><img src="img/header_img/nir2.png" alt="">微博登录</a>
                    <a href="#"><img src="img/header_img/nir3.png" alt="">微信登录</a>
                </li>
                <li :class="login==-1?'':cls"><router-link to="/login" class="btnLogin" >登录</router-link></li>
                <li :class="login==-1?'':cls"><router-link to="/register" class="btnRes" @click="reload">注册</router-link></li>

                <!--登录成功-->
                <li :class="login==-1?cls:''" >
                    <a href="#"><img :src="url"></a><a href="#">收藏</a>
                    <a href="#">管理</a>
                    <a href="#">私信</a>
                    <a href="#">通知</a>
                    <a  @click="signOut()">退出</a>
                </li>
            </ul>
        </div>
    </header>

</template>
<script>
    import  {setIP} from '../../public/js/SetIP.js'
export default{
    data(){return{
       url:``,
       cls:"loginSuccess",
       login:-1,
       name:""
    }},
    methods:{
        aaa(e){
          var event = window.event || e;
          var target = event.target || event.srcElement;
          console.log(target);
          var x = document.getElementsByClassName("nav_left")
          
          console.log(Array.from(x[0].childNodes))
          var arr = Array.from(x[0].childNodes);
          arr.map(item=>{
              item.setAttribute("style","background:#333;");
            //   item.childNodes.setAttribute("style","color: #afccc2")
            // console.log(item.firstChild)
            item.firstChild.setAttribute("style","color: #afccc2")
          })
          if(arr.indexOf(target) !=-1){
              //li进入到这里
              target.setAttribute("style","background:#999 ")
              target.childNodes.setAttribute("style","color:#fff;")
          }else{
              //a  i  进入到这里
            target.parentNode.setAttribute("style","background:#999 ")
            target.setAttribute("style","color:#fff;")
          }
          
        },

        reload(){
            location.reload();
            if(location.href.indexOf("register")!==-1){
                    $("div.login-h>a:first-child").addClass("on")
                        .next().removeClass("on")
                    $("div.login-l").css("display","none")
                    $("div.register-l").css("display","block")
            } 

        },
        signOut(){
            document.cookie="url="
            document.cookie="uname="
            this.login=-1;
            
            location.reload()
        },
        getpic(){
            var uname=this.setItem('uname')
            this.name=uname
            this.$http.get("users/getPic?uname="+uname)
            .then(result=>{
                if(uname==''){
                    this.login=-1
                }else{
                    this.login=1
                    this.url=setIP() + result.body.upic;
                    //location.reload()
                }
                 
            })
        },
        setItem(n){
            var arr=document.cookie.split(";")
            if(arr.length>2){
                for(var item of arr){
                    console.log(item)
                    if(item.indexOf(n)!=-1){
                        console.log(item)
                        return item.split("=")[1]
                    }
                }
            }else{
                return ''
            }
        }
    },
    mounted(){
        this.getpic()
         var url = location.href.split("#")[1].slice(1)
            document.cookie="path=/"
            document.cookie="url="+url
            //location.href="localhost:8080/#/"+url
    },
    

}

    
</script>
<style scoped>
        /*********** header样式 *************/
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #header{
        width: 100%;
        height: 40px;
        background: #333;
        position: fixed;
        top: 0;
        z-index: 100;
        /* display: none; */
    }
    /*--------左边导航条--------*/
    #header>div.top_nav>ul.nav_left{
        width: 575px;
        height:40px;
        list-style-type: none;
        float: left;
    }
    #header>div.top_nav>ul.nav_left li{
        float: left;
        text-align: center;
        z-index:2;
    }
    #header>div.top_nav>ul>li a{
        width: 48px;
        height: 40px;
        display: inline-block;
        color: #afccc2;
        text-decoration: none;
        line-height: 40px;
        font-size: 14px;
        z-index: 1;
    }
    #header>div.top_nav>ul li a:hover{
        background: #999;
        color: #fff;
    }
    /*-----美食天下 样式-------*/
    #header>div.top_nav>ul.nav_left li:nth-child(1){
        width: 113px;
    }
    #header>div.top_nav>ul.nav_left li:nth-child(1) a{
        width: 113px;
    }
    #header>div.top_nav>ul.nav_left li:nth-child(1) i{
        display: inline-block;
        margin-right: 10px;
        width: 55px;
        height: 14px;
        background: url("/../img/header_img/top-bar110.png") no-repeat;
        background-size: 55px;
        vertical-align: middle;
    }
    #header>div.top_nav>ul.nav_left li:nth-child(1) a:hover i{
        background-position:0 -14px ;
    }
    /*---- 下拉菜单样式------*/
    #header>div.top_nav>ul.nav_left>li:last-child{
        width: 30px;
        height:40px;
        cursor: pointer;
    }
    #header>div.top_nav>ul.nav_left>li:last-child i{
        display: block;
        width: 5px;
        border: 5px solid transparent;
        border-top-color:#afccc2;
        margin: 17px auto;
    }
    #header>div.top_nav>ul.nav_left>li:last-child>div{
        width: 66px;
        height: 80px;
        background: #333333;
        margin-top: -5px;
        margin-left: -36px;
        display: none;
    }
    #header>div.top_nav>ul.nav_left>li:last-child>div a{
    display: inline-block;
        width: 66px;
        height: 40px;
    }
    #header>div.top_nav>ul.nav_left li:last-child:hover{
        background: #000000;
    }
    #header>div.top_nav>ul.nav_left li:last-child:hover i{
        border-top-color:#fff;
        display: block;
    }
    #header>div.top_nav>ul.nav_left li:last-child:hover div{
        display: block;
    }

    /*-------右边导航条----------*/
    #header>div.top_nav>ul.nav_right{
        width: 276px;
        height:40px;
        float: right;
        list-style: none;
    }
    #header>div.top_nav>ul.nav_right>li{
        width: 60px;
        height: 40px;
        float: right;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(4){
        width:48px;
        text-align: center;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(5){
        width:48px;
        text-align: center;
    }
    #header>div.top_nav>ul.nav_right>li img{
        width: 18px;
        height:18px;
        display: block;
        margin: 0 auto;
        margin-bottom: -10px;
    }
    /*----- 登录 -----*/
    #header>div.top_nav>ul.nav_right>li:nth-child(3):hover a{
        background: #000;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(3) a{
        width: 60px;
    font-size: 10px;
        text-align: center;
        color: #f1f1f1;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(3) a:nth-child(2){
        background: #555;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(3) a:nth-child(3){
        background: #bbb;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(3):hover  a{
        display: block;
        color: #fff;
    }
    /*------- 登录成功 ---------*/
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a{
        width: 60px;
        font-size: 10px;
        text-align: center;
        color: #f1f1f1;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-top: 4px;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a:nth-child(2){
        margin-top: -5px;
        background: #585757;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a:nth-child(3){
        background: #717070;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a:nth-child(4){
        background: #7d7d7d;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a:nth-child(5){
        background: #939393;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6) a:nth-child(6){
        background: #9f9f9f;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6):hover a:first-child{
        background: #000;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6):hover a{
        display: block;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(6):hover a:hover{
        color: #fff;
    }
    /*--------隐藏--------*/
    #header>div.top_nav>ul.nav_right li.loginSuccess{
        display: none;
    }
    /*----- 发布 -------*/
    #header>div.top_nav>ul.nav_right>li:nth-child(2) a{
        width: 60px;
        font-size: 10px;
        text-align: center;
        color: #f1f1f1;
        cursor: pointer;
        background: #59c3d1;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(2):hover a:hover{
        color: #fff;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(2) a:nth-child(2){
        background: #8ECDD8;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(2) a:nth-child(3){
        background:#A6DFEA;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(2) a:nth-child(4){
        background:#ADECF8;
        display: none;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(2):hover a{
        display: block;
    }
    /*------ 签到有礼 --------*/
    #header>div.top_nav>ul.nav_right>li:nth-child(1) a{
        background: #ffa859;
        width: 60px;
        font-size: 10px;
        text-align: center;
        color: #f1f1f1;
    }
    #header>div.top_nav>ul.nav_right>li:nth-child(1) a:hover{
        color: #fff;
    }
    /*-------- 客户端 ----------*/
    #header>div.top_nav>a{
        text-decoration: none;
        float: right;
        width: 60px;
        height: 40px;
        font-size: 10px;
        color: #f1f1f1;
        text-align: center;
        background: #FE5761;
    }
    #header>div.top_nav>a img:nth-child(1){
        width: 18px;
        height:18px;
        display: block;
        margin: 0 auto;
        margin-bottom: 3px;
    }
    #header>div.top_nav>a img:nth-child(2){
        width: 100px;
        height: 100px;
        margin:6px 0 0 -45px;
        display: none;
    }
    #header>div.top_nav>a:hover img:nth-child(2){
        display: block;
    }
</style>