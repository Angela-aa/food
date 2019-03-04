<template> 
        <div id="rizhi">
			
			<!---------------------------导航2------------------------------------>
			<div id="rizhi-daohang2">
				<ul>
					<li>
						<a @click="jinghua">精华日志</a>
					</li>
					<li>
						<a @click="zuixin" >最新日志</a>
					</li>
				</ul>
			</div>
			<!------------------日志列表-------------------------------->
			<div id="rizhibiao">
				<div class="rizhibiao" v-for="(item,index) in list" :key="index">
					<div class="rizhi-tu">
						<img v-bind:src=item.rizhi_img />
					</div>
					<div class="rizhi-wenzi">
						<h2><a href="#">{{item.rizhi_tiele}}</a></h2>
						<h6>{{item.datatime}}</h6>
						<p>{{item.rizhi_wenzhang}}</p>
					</div>
				</div>
				
				<div class="fen-ye">
					<ul>
						<li><a @click="router">上一页</a></li>
						<li><span class="ye">
							第<b>{{pageIndex}}</b>页
						</span></li>
						<li><a @click="getrizhi">下一页</a></li>
					</ul>
				</div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
			</div>
			<div id="nei-right">
				
				<div id="tuijian">
					<div class="timu">
						<h3>推荐专题</h3>
						<div id="">
							<a href="#">有奖活动</a>
							<a href="#">美食专题</a>
						</div>
					</div>
					<div id="xiao-rxx">
						<div class="tu">
							<a href="#"><img src="img/rizhi_img/meishi9.jpg" /></a>
						</div>
						<div class="tu">
							<a href="#"><img src="img/rizhi_img/meishi11.jpg" /></a>
						</div>
						<ul>
							<li>
								<a href="#">我们都是秋葵控</a>
							</li>
							<li>
								<a href="#">28款暖身滋补汤</a>
							</li>
							<li>
								<a href="#">"大姨妈"驾到 啥招待</a>
							</li>
							<li>
								<a href="#">雾霾必备：清肺食谱</a>
							</li>
							<li>
								<a href="#">假日饮食健康必读</a>
							</li>
							<li>
								<a href="#">换季食疗抗感冒</a>
							</li>
						</ul>
					</div>

				</div>
				<div class="guangao">

				</div>
				<div id="caipudaquan">
					<div class="timu">
						<h3>菜谱大全</h3>
						<div id="">
							<a href="#">菜谱分类</a>
							<a href="#">家常菜</a>
						</div>
					</div>
					<div class="tu">
						<a href="#"><img src="img/rizhi_img/caipudaquan1.jpg" /></a>
						<a href="#"><img src="img/rizhi_img/caipudaquan2.jpg" /></a>
						<a href="#"><img src="img/rizhi_img/caipudaquan3.jpg" /></a>
						<a href="#"><img src="img/rizhi_img/caipudaquan4.jpg" /></a>
					</div>
					<div class="caipu">
						<ul>
							<li>
								<a href="#">最新菜谱</a>
							</li>
							<li>
								<a href="#">热菜菜谱</a>
							</li>
							<li>
								<a href="#">凉菜菜谱</a>
							</li>
							<li>
								<a href="#">汤羹菜谱</a>
							</li>
							<li>
								<a href="#">主食做法</a>
							</li>
							<li>
								<a href="#">小吃大全</a>
							</li>
							<li>
								<a href="#">泡酱腌菜</a>
							</li>
							<li>
								<a href="#">年夜饭</a>
							</li>
							<li>
								<a href="#">红烧肉</a>
							</li>
							<li>
								<a href="#">鱼香肉丝</a>
							</li>
							<li>
								<a href="#">可乐鸡翅</a>
							</li>
							<li>
								<a href="#">糖醋排骨</a>
							</li>
							<li>
								<a href="#">红烧茄子</a>
							</li>
							<li>
								<a href="#">红烧排骨</a>
							</li>
							<li>
								<a href="#">宫保鸡丁</a>
							</li>
							<li>
								<a href="#">水煮肉片</a>
							</li>
							<li>
								<a href="#">回锅肉</a>
							</li>
							<li>
								<a href="#">佛跳墙</a>
							</li>
							<li>
								<a href="#">水煮鱼</a>
							</li>
							<li>
								<a href="#">寿司</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
            <Footer></Footer>	
		</div>  
		
</template>

<script>
	import Footer from '@/views/Footer.vue'
    import  {setIP} from '../../public/js/SetIP.js'
	//import Vue from "vue"
	export default{
      components: {
          Footer
      },
	data:function(){
          return{
                list:[],
                pageIndex:0,
                pageSize:5,
                hasMore:true,
                pageCount:1
            }
      },
      methods:{
      			qingqiu(){
      				 var url="http://localhost:3030/rizhi?pno="+this.pageIndex+"&pageSize="+this.pageSize;
                    this.$http.get(url).then(result=>{
                        console.log(result);
                        this.list=result.body.data;
                        this.list.map(item=>{
                            item.rizhi_img = setIP()+item.rizhi_img;
                        })
                        this.pageCount=result.body.pageCount;
                    })
      			},
      			zuixin(){
      				this.pageIndex=1;
      				this.qingqiu();
      			},
      			jinghua(){
      				this.pageIndex=2;
      				this.qingqiu();
      			},
                getrizhi(){
                    this.pageIndex++;
                    this.hasMore = this.pageIndex <= this.pageCount;
                    if(!this.hasMore){
                    	this.pageIndex=this.pageCount;
                        // alert("没有更多");
                        this.$message({
                        message: '人家也是有底线的~~~',
                        type: 'warning'
                        });
                    	return}
                   this.qingqiu();
                },
                router(){
                	this.pageIndex--;
                	this.hasfew= this.pageIndex>=1
                	if(!this.hasfew){
                		this.pageIndex=1;
                		alert("已是第一页");
                		return}
                	this.qingqiu();
                }
        },
      created(){
          this.getrizhi();
      }
    }
</script>
<style scoped>
    /*日志头*/
    #rizhi{
        width: 990px;
        margin: auto;
        position: relative;
        
    }
    #rizhi-logo{
        position: absolute;
        left: 0;
        top: 13px;
    }
    #rizhi-logo img{
        width: 108px;
    }
    #rizhi-header{
        position: relative;
        height: 80px;
    }
    #rizhi-header>a{
        text-decoration: none;
        position: absolute;
        top: 22px;
        left: 130px;
    }
    #rizhi-header>a{
        width:60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #FF838B;
        border-radius: 5px;
        color: #fff;
        display:inline-block;
        font-size: 20px;
        font-weight: 400;
    }
    #rizhi-daohang{
        position: absolute;
        right: 280px;
    }
    #rizhi-header ul{
        list-style: none;
        
    }
    #rizhi-header ul li{
        float: left;
        margin: 10px;
    }
    #rizhi-header ul li>a{
        position: relative;
        font-size: 20px;
        color: #333;
        text-decoration: none;
    }
    #rizhi-header ul li a:focus{
        color: #ff6767;
    }
    #rizhi-ss{
        width: 250px;
        height:100%;
        position: absolute;
        top: 0;
        right: 0;
    }
    #rizhi-ss input{
        position: absolute;
        top: 24px;
    }
    #rizhi-ss input{
        width: 160px;
        border: 1px solid #ccc;
        border-right: none;
        border-radius: 3px 0 0 3px;
        height: 20px;
        line-height: 20px;
        padding: 3px;
        outline: 0;
        resize: none;
    }
    #rizhi-ss>a{
        text-decoration: none;
        position: absolute;
        top: 24px;
        right: 2px;
        border-radius: 0 3px 3px 0;
        width: 80px;
        height: 28px;
        font-size: 14px;
        color: #fff;
        text-indent: 35px;
        line-height: 28px;
        background: #999 url(/../img/rizhi_img/sousuo.png) no-repeat scroll 12px center/16px auto;
    }
    #rizhi-ss>a:hover{
        background: #FF838B url(/../img/rizhi_img/sousuo.png) no-repeat scroll 12px center/16px auto;;
    }
    #rizhi-daohang ul li a:focus i{
        position: absolute;
        bottom: -28px;
        left: 50%;
        z-index: 1;
        display: block;
        overflow: hidden;
        margin-left: -9px;
        width: 0;
        height: 0;
        border: 9px dashed transparent;
        border-bottom: 9px solid #ff6767;
        
    }
    #rizhi-daohang ul li a:focus b{
        position: absolute;
        bottom: -29px;
        left: 50%;
        z-index: 2;
        display: block;
        overflow: hidden;
        margin-left: -9px;
        width: 0;
        height: 0;
        border: 9px dashed transparent;
        border-bottom: 9px solid #fff;
    }



    /*导航2*/
    #rizhi-daohang2{
        width: 990px;
        height: 36px;
        border: 1px solid #FF6767;
        border-left: 0;
        border-right:0 ;
    }
    #rizhi-daohang2 ul{
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: 36px;
    }
    #rizhi-daohang2 ul li{
        float: left;
        margin: 0 10px;
    }
    #rizhi-daohang2 ul li a{
        font-size: 16px;
        color: #333;
        text-decoration: none;
    }
    #rizhi-daohang2 ul li a:hover{
        color: #ff6767;
    }

    /*日志表*/
    div.rizhibiao:hover img{
        transform: scale(1.2);
    }
    div.rizhibiao div.rizhi-tu{
        overflow: hidden;
    }

    #rizhibiao{
        width: 640px;
    }
    .rizhibiao{
        width: 640px;
        margin: 30px 0;
    }
    .rizhi-tu{
        width: 180px;
        height: 135px;
        float: left;
    }
    .rizhi-tu img{
        width: 100%;
    }
    div.rizhi-wenzi{
        position: relative;
        height:135px;
    }
    div.rizhi-wenzi h2,p,h6{
        width: 440px;
        position: absolute;
        right: 0;
    }
    div.rizhi-wenzi h2{
        margin-top:5px ;
    }
    div.rizhi-wenzi h2 a:hover{
        color: #FF6767;
        text-decoration: underline;
    }
    div.rizhi-wenzi h6{
        font-weight: 400;
        margin: 0;
        top:45px;
        color: #999999;
        font-size: 14px;
    }
    div.rizhi-wenzi p{
        margin: 0;
        top:69px;
        font-size: 14px;
        color: #333333;
    }
    .rizhi-wenzi h2 a{
        color: #333333;
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
    }

    /*右侧广告等修饰*/
    #nei-right{
        width:300px;
        position: absolute;
        top: 100px;
        right: 0;	
    }
    #xiao-rxx{
        position: relative;
    }
    #xiao-rxx div.tu{
        width:120px;
        height: 90px;
        margin-top:20px;
    }
    #xiao-rxx div.tu img{
        width: 100%;
        height: 100%;
    }
    #xiao-rxx ul{
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;	
    }
    #xiao-rxx ul li+li{
        margin-top: 15px;
    }
    #xiao-rxx ul li a{
        color: #333333;
        text-decoration: none;
    }
    #xiao-rxx ul li a:hover{
        color: #FF6767;
        text-decoration:underline
    }
    div.timu{
        position: relative;
        border-bottom: 1px solid #999999;
    }
    div.timu>h3{
        color:#ff6767;
        border-bottom: 3px solid #ff6767;
        font-weight: 400;
        display: inline-block;
        font-size: 20px;
        margin: 0;
        padding-bottom: 4px;
        outline: 0;
    }
    div.timu>div{
        position: absolute;
        right: 0;
        top: 10px;
    }
    div.timu>div a{
        font-size: 16px;
        text-decoration: none;
        color: #333333;
        margin-left: 20px;
    }
    div.timu>div a:hover{
        color: #FF6767;
    }

    #caipudaquan div.tu {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    #caipudaquan div.caipu ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    #caipudaquan div.caipu ul li{
        width: 75px;
        height: 25px;
    }
    #caipudaquan div.caipu ul li a{
        font-size: 14px;
        text-decoration: none;
        color: #333333;
    }
    #caipudaquan div.caipu ul li a:hover{
        
        color: #FF6767;
        text-decoration: underline;
    }


    /*广告*/
    #nei-right div.guangao{
        width: 300px;
        height: 200px;
    }

    /*分页*/
   .fen-ye{
   	position: absolute;
   	top: 895px;
   	width: 640px;
   	height: 50px;
   	
   }
    .fen-ye ul{
    	justify-content: center;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .fen-ye ul li a{
        font-size: 14px;
        margin: 0 5px;
        width: 70px;
        height: 36px;
        line-height: 36px;
        background:#f8f8f8;
        text-align: center;
        border:1px solid #eeeeee;
    }
    .fen-ye ul li a{
        display: inline-block;
        text-decoration: none;
        color: #999999;
    }
    .fen-ye ul li span.ye{
    	display: inline-block;
    	width: 100px;
    	line-height: 36px;
    	text-align: center;
    	font-size: 18px;
    	color: #888888;
    }
    .fen-ye ul li span.ye b{
    	margin: 0 10px;
    }
    .fen-ye ul li a:hover{
        color:#ffffff;
        background: #ff6767;
    }
    #footer{
    width: 300px;
    position: absolute;
    top: 1000px;
    }
</style>