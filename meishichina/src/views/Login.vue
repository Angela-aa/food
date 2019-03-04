<template>
<div id="main">
    <div id="login">
        <img src="img/header_img/banner1.jpg" class="hide show">
        <img src="img/header_img/banner2.jpg" class="hide ">
        <img src="img/header_img/banner3.jpg" class="hide ">
        <img src="img/header_img/banner4.jpg" class="hide ">
    </div>
    <div class="loginBox">
        <div class="login-h">
            <a href="#register" @click="login">注册</a><a href="#login" class="on" @click="login">登录</a>
        </div>

<div class="div user-input">
  <input type="number" class="code" placeholder="请输入手机验证码" required maxlength="6">
  <input type="button" class="obtain generate_code" value=" 获取验证码" @click="settime(this);">
</div>
        <div class="login-l" >
            <ul>
                <li>手机号/昵称：<input type="text" v-model="uname" @keyup.13="signin"></li>
                <li>密　码：<input type="password" v-model="upwd" @keyup.13="signin"></li>
            </ul>
            <p>
                <input type="checkbox" id="loginauto"><label for="loginauto">下次自动登录</label>
                <a href="#">忘记密码？</a>
            </p>
            <input type="button" value="登录" @click="signin">
        </div>
        <!--注册-->
        <div class="register-l" style="display: none">
            <ul>
                <li>手机号：<input type="text" :maxlength="11" v-model="uname"></li>
                <li>密　码：<input type="password" v-model="upwd"></li>
                <li>确认密码：<input type="password" v-model="reupwd"></li>
                <li>
                    <el-row>
                        <el-col :span='5'>验证码：</el-col>
                        <el-col :span='12'><input type="text" v-model="towCode"></el-col>
                        <el-col :span="7"><el-button type="danger" plain @click='sendCode' style="padding:4px;font-size:12px;">发送验证码</el-button></el-col>
                    </el-row>
                </li>
            </ul>
            <input type="button" value="注册" @click="register">
        </div>
        <div class="login-r">
            <img src="img/header_img/msc_app.png" alt="">
            <p>扫描二维码下载客户端</p>
            <div>
                <a href="#"><img src="img/header_img/nir1.png" title="QQ登录"></a>
                <a href="#"><img src="img/header_img/nir2.png" title="微信登录"></a>
                <a href="#"><img src="img/header_img/nir3.png" title="新浪微博账号登录"></a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import {Toast} from 'mint-ui'
    import  {setIP} from '../../public/js/SetIP.js'
export default {
   data(){return{
       uname:"",
       upwd:"",
       towCode:"",
       reupwd:"",
       codeMessage:'',
       url:'',
       countdown:60
   }},
    methods:{
        
 settime(val) {
           
     val = document.querySelector(".obtain")
     console.log(val) 
    setInterval(function() {
    if (this.countdown == 0) {
        val.removeAttribute("disabled");
        val.value="获取验证码";
        this.countdown = 60;
        // return false;
    } else {
        console.log(this.countdown-1)
        val.setAttribute("disabled", true);
        val.value="重新发送(" + this.countdown + ")";
        val.setAttribute("style","width:1000px;");
        this.countdown = this.countdown-1;
    }
    },1000);
},
        login(){
            $("div.login-h>a").click(function(){
            var $a=$(this)
            $a.addClass("on").siblings().removeClass("on")
            if($a.html()=="登录"){
                $("div.login-l").css("display","block")
                $("div.register-l").css("display","none")
            }else{
                 $("div.login-l").css("display","none")
                 $("div.register-l").css("display","block")
             }
            })
        },
        signin(){
            this.$http.post(setIP()+"users/signin",{uname:this.uname,upwd:this.upwd})
            .then(result=>{
                if(result.body.ok==0)
                    Toast(result.body.msg)
                else{
                   this.$router.push("/"+this.url)
                   document.cookie="path=/"
                   document.cookie="uname="+this.uname
                   location.reload()
                }
                
            })
        },
        sendCode(){
            let a = 1111;
            let time = 60;
            let flag = true;
             a = Math.floor(Math.random()*10000+1).toString();
             this.codeMessage = a;
                if(!this.uname){
                     this.$message({
                        message: '请填入您的手机号',
                        type: 'warning'
                    });
                 }
                 else if(!(/^1[34578]\d{9}$/.test(this.uname))){ 
                    this.$message({
                        message: '手机号有误，请重填',
                        type: 'warning'
                    });
                 }else if(!this.upwd){
                     this.$message({
                        message: '请填写密码',
                        type: 'warning'
                    });
                 }else if(!(/^(\w){6,20}$/.test(this.upwd))){
                     this.$message({
                        message: '密码格式为6-20个字符（字母、数字、下划线均可）',
                        type: 'warning'
                    });
                 }else if(!this.reupwd){
                     this.$message({
                        message: '请确认密码',
                        type: 'warning'
                    });
                 }else if(this.reupwd !=this.upwd){
                     this.$message({
                        message: '两次输入的密码不一致，请重新填写',
                        type: 'warning'
                    });
                 }
                 console.log("禁用按钮")
                 if(flag){
                    var timer = setInterval(()=>{
                    if(timer == 60 && flag){
                        flag = false;
                        console.log("已发送")

                        flag = true;
                        timer = 60;
                        clearInterval(timer)
                    }else if(timer == 0){
                        clearInterval(timer)
                        timer = 60
                        flag = true
                    }else{
                        timer--;
                    }
                    },1000)
                }
                //  阿里云的短信验证接口的页面
                //  https://expense.console.aliyun.com/#/order/detail/yunmarket/203247868690852
            //     let json = {
            //         "mobile":this.uname,
            //         "param":`code:${this.codeMessage}`,
            //         "tpl_id":"TP1711063"
            //     };
            //     console.log(json)
            //     var instance = this.axios.create({
            //         baseURL:"http://dingxin.market.alicloudapi.com/dx/sendSms?"+`mobile=${this.uname}&param=code%3A${this.codeMessage}&tpl_id=TP1711063`
            //     });
            //     instance.defaults.headers.common["Authorization"] = "APPCODE " +"063afacd2d304fb587e32e7d2c493667"
            //     instance.post('').then(res =>{
            //     if(res.data.return_code == '00000'){
            //         this.$message({
            //             message: '验证码已成功发送到该手机号',
            //             type: 'warning'
            //         });
            //     }
            // });
        },
        register(){
            // if(!this.towCode){
            //         this.$message({
            //             message: '请输入验证码',
            //             type: 'warning'
            //         });                    
            // }
            // else if(this.towCode == this.codeMessage){
                let json = {uname:this.uname,upwd:this.upwd,reupwd:this.reupwd};
                console.log(json)
                this.$http.post(setIP()+"users/register",{uname:this.uname,upwd:this.upwd,reupwd:this.reupwd})
                .then(result=>{
                    if(result.body.code==200){
                        setTimeout(()=>{
                            Toast("注册成功")
                            this.$router.push('login')
                            location.reload()
                        },1000)
                    }else{
                        console.log(this.uname)
                        Toast(result.body.msg)
                    }
                })
            // }else{
            //         this.$message({
            //             message: '您输入的验证码不正确，请重新输入',
            //             type: 'warning'
            //         });
            // }
            
        },
        setItem(n){
            var arr=document.cookie.split(";")
            for(var item of arr){
                if(item.indexOf(n)!=-1){
                    return item.split("=")[1]
                }
            }
        }
    },
//首页轮播图
    created(){
        setInterval(function(){
            var $img=$("#login>img.show")
            $img.next().addClass("show")
                .siblings().removeClass("show")
            if(!$img.next().is("img")){
            $img.parent().children("img.hide")
                .first().addClass("show")
                .siblings().removeClass("show")
            }
        },8000)

        if(location.href.indexOf("register")!==-1){
                $("div.login-h>a:first-child").addClass("on")
                    .next().removeClass("on")
                $("div.login-l").css("display","none")
                $("div.register-l").css("display","block")
        }
        this.url=this.setItem('url')
    }
}
</script>
<style scoped>
    /*------- 登录 --------*/
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #login img{
        width: 100%;
        height: 100%;
        position:absolute;
        top:0;
        left:0;
        
    }
    #login img.hide{
        opacity: 0;
        transition: all 4s linear;
    }
    #login img.show{
        opacity: 1 ;
    }
    div.loginBox{
        width: 530px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin:-150px 0 0 -265px;
        background: rgba(255,255,255,.8);
    }
    div.loginBox>div.login-h>a{
        display: inline-block;
        width: 265px;
        height: 50px;
        background: rgba(0,0,0,.7);
        color: #fff;
        text-decoration: none;
        text-align: center;
        line-height: 50px;
    }
    div.loginBox>div.login-h>a:hover{
        color: #ff6767;
        text-decoration: underline;
    }
    div.loginBox>div.login-h>a.on{
        background: rgba(255,255,255,.1);
        color: #333333;
    }
    div.loginBox>div.login-h>a.on:hover{
        text-decoration: underline;
    }
    div.loginBox>div.login-l{
        margin-top: 20px;
        padding: 20px;
        width: 340px;
        height: 194px;
        border-right: 1px solid #999999;
        float: left;
    }
    div.loginBox>div>ul{
        width: 300px;
        height: 67px;
        list-style: none;
        border: 1px solid #999;
        border-radius: 5px;
    }
    div.loginBox>div>ul>li{
        width: 298px;
        height: 33px;
        font-size: 15px;
        padding: 5px;
        color: #444;
    }
    div.loginBox>div>ul li+li{
        border-top: 1px solid #999;
    }
    div.loginBox>div>ul>li input{
        width: 190px;
        height: 22px;
        outline: none;
        border: none;
        background: none;
    }

    div.loginBox>div.login-l>p{
        width: 300px;
        height: 42px;
        padding: 10px;
        font-size: 14px;
        color: #333;
    }
    #loginauto{
        margin-top: 4px;
    }
    div.loginBox>div.login-l>p>input,label{
        float:left;
    }
    div.loginBox>div.login-l>p>a{
        float: right;
        color: #333;
    }
    div.loginBox>div>input{
        margin-top: 5px;
        width: 300px;
        height: 40px;
        background: #ff6767;
        outline: none;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    /*----注册---*/
    div.loginBox>div.register-l{
        margin-top: 20px;
        padding: 20px;
        padding-top:0px;
        width: 340px;
        height: 194px;
        border-right: 1px solid #999999;
        float: left;
    }
    div.loginBox>div.register-l>ul{
        height: 133px;
    }

    div.loginBox>div.login-r{
        width: 165px;
        height: 191px;
        margin: 10px;
        float: right;
    }
    div.loginBox>div.login-r>img{
        width: 110px;
        height: 110px;
        margin-left: 25px;
        margin-top: 10px;
    }
    div.loginBox>div.login-r p{
        font-size: 14px;
        text-align: center;
    }
    div.loginBox>div.login-r>div{
        margin-left: 20px;
        margin-top: 5px;
    }
    div.loginBox>div.login-r>div>a>img{
        width: 30px;
        height: 30px;
        margin: 4px;
    }
</style>