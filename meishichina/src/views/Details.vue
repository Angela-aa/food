<template> 
  <div id="main">
    <!--头部---->
    <div>
        <div id="top">
            <div class="second_logo">
                <a href="https://www.meishichina.com/" title="美食天下">美食天下</a>
            </div>
            <div>
                <h1><a href="https://home.meishichina.com/recipe.html" title="菜谱">菜谱</a></h1>
            </div>
            <div class="search">
                <div class="search-box">
                    <!-- <a href="javascript:;" title="搜索" class="" id="search">搜索</a>
                    <input type="text" id="" class=""> -->
                    <InputSearch></InputSearch>
                </div>
            </div>
            <div class="list">
                <router-link to="/recipe">菜谱首页<i></i><b></b></router-link>
                <a class='arrow' href="#">分类<i></i><b></b></a>
                <a href="#">菜单<i></i><b></b></a>
                <a href="#">排行<i></i><b></b></a>
                <span style="float: left; height:18px; margin:23px 4px 0; border-right: 1px solid #ddd;"></span>
                <a target="_blank" href="#" title="食材">食材</a>
                <a target="_blank" href="#" title="食疗食补">食疗食补</a>
            </div>
        </div>
        <div id="top_2">
            <ul>
                <li><a href="#" >首页</a></li>
                <li><a title="热菜" href="#">热菜</a></li>
                <li><a title="凉菜" href="#">凉菜</a></li>
                <li><a title="汤羹" href="#">汤羹</a></li>
                <li><a title="主食" href="#">主食</a></li>
                <li><a title="小吃" href="#">小吃</a></li>
                <li><a title="西餐" href="#">西餐</a></li>
                <li><a title="烘焙" href="#">烘焙</a></li>
                <li><a title="饮品" href="#">饮品</a></li>
                <li><a title="零食" href="#">零食</a></li>
                <li><a title="泡酱腌菜" href="#">泡酱腌菜</a></li>
                <li><a title="自制食材" href="#">自制食材</a></li>
                <li><a title="最新菜谱" href="#">最新菜谱</a></li>
                <li id="navlist">
                    <a class="navlist_a" href="javascript:void(0);" >浏览全部菜谱<i></i><b></b></a>                    
                </li>
            </ul>
        </div>
    </div>
    <!--广告---->
    <div class='top-ad'>
        <img src='../../public/img/details_img/top-ad.jpg'>
    </div>
    <!--导航---->
    <nav>
        <ul>
            <li>您的位置：</li>
            <li><a href="#">美食天下</a>&nbsp;>&nbsp;</li>
            <li><a href="#">菜谱</a>&nbsp;&nbsp;</li>
            
        </ul>
        <div>
            <span><a href="#">家常菜谱&nbsp;</a></span>
            <span><a href="#">&nbsp;手机菜谱</a></span>
        </div>
    </nav>
    <!--主体---->
    <section>        
        <div class="wrap">
            <div class="w clear">
                <!--左边-->
                <div class="space-left">
                    <div class="userTop">
                        <h1>{{recipe_name}}</h1>
                        <a href="#">
                            <img src="img/details_img/user.jpg" alt="">
                            <span>莎糖家</span>
                        </a>
                    </div>
                    <div class="space-box-home">
                    <!--main-pic-->
                    <div class="main-pic">
                        <a href="#"><img :src="big_pic" alt=""></a>
                    </div>
                    <!---简介-->
                     <div class="block-text">
                         <span>“</span>自己在家做饭也可以这么简单。   <span>”</span>
                     </div>
                     <!--食材明细-->
                     <div class="mo">
                        <span class="cicle"></span> <p>食材明细</p>
                     </div>
                     <!--主料---->
                     <fieldset class="particulars">
                         <legend>主料</legend>
                         <div class="recipe">
                            <ul class="clear">
                                <li v-for='item in mainList'>
                                    <ul>
                                        <li class="sub">{{item.main_name}}</li>
                                        <li>{{item.main_count}}</li>
                                    </ul>
                                </li>
                            </ul>
                         </div>
                     </fieldset>
                     <!--辅料-->
                     <fieldset class="particulars">
                         <legend>辅料</legend>
                         <div class="recipe">
                             <ul>
                                 <li v-for='item in accList'>
                                     <ul>
                                         <li class="sub">{{item.acc_name}}</li>
                                         <li>{{item.acc_count}}</li>
                                     </ul>
                                 </li>                    
                             </ul>
                         </div>
                     </fieldset>
                     <!--其他-->
                     <div class="recipeOther">
                         <ul class="clear">
                             <li>
                                 <ul>
                                     <li class="sub">{{kouwei}}</li>
                                     <li>口味</li>
                                 </ul>
                             </li>
                             <li>
                                 <ul>
                                     <li class="sub">{{gongyi}}</li>
                                     <li>工艺</li>
                                 </ul>
                             </li>
                             <li>
                                 <ul>
                                     <li class="sub">{{haoshi}}</li>
                                     <li>耗时</li>
                                 </ul>
                             </li>
                             <li>
                                 <ul>
                                     <li class="sub">{{nandu}}</li>
                                     <li>难度</li>
                                 </ul>
                             </li>
                         </ul>
                     </div>
                     <!--步骤-->
                     <div class="mo">
                        <span class="cicle"></span> <p>自制{{recipe_name}}的做法步骤</p>
                     </div>
                     <!--步骤内容-->
                     <div class="recipeStep ">
                         <ul>
                            <li v-for='item in stepList'>
                                 <img :src="item.m_pic" alt="">
                                 <div class="step-r">
                                    <span>{{item.m_no}}</span>
                                    {{item.m_disc}}
                                 </div>
                             </li>            
                         </ul>
                     </div>
                     <!--小窍门-->
                     <div class="mo"><span class="cicle"></span> 小窍门</div>
                     <div style='text-align:left'>
                        {{qiaomen}}
                     </div>
                     <div class="mt20" style='text-align:left'>
                         来自&nbsp;美食天下&nbsp;<a href="#" class="hov">莎糖家</a>&nbsp;的作品
                     </div>
                     <div class="mt20" style='text-align:left'>
                         使用的厨具：厨师机、煮锅
                     </div>
                     <div class="mt20" style='text-align:left'>
                         所属分类: <span>菜谱</span>
                     </div>
                     <!--收藏，转载-->
                     <div class="recipeAction">
                        <ul class="clear">
                            <li class="lik">
                                <a href="#">
                                    <i></i>
                                    <span>3</span>人喜欢
                                </a>                                
                            </li>
                            <li class="fav">
                                <a href="#">
                                    <i></i>
                                    <span>53</span>人收藏
                                </a>
                            </li>
                            <li class="com">
                                <a href="#">
                                    <i></i>
                                    <span>2</span>条评论
                                </a>
                            </li>
                            <li class="col">
                                <a href="#">
                                    <i></i>
                                    <span>加入菜单</span>
                                </a>
                            </li>
                            <li class="fg"></li>
                            <li class="shar-wx">
                                <a href="#">
                                    <i></i>
                                    <span>微信</span>
                                </a>
                            </li>
                            <li class="shar-fre">
                                <a href="#">
                                    <i></i>
                                    <span>QQ好友</span>
                                </a>
                            </li>
                            <li class="shar-kj">
                                <a href="#">
                                    <i></i>
                                    <span>QQ空间</span>
                                </a>
                            </li>
                            <li class="shar-sina">
                                <a href="#">
                                    <i></i>
                                    <span>新浪微博</span>
                                </a>
                            </li>
                        </ul>
                     </div>
                     <!--最新推荐-->
                     <div class="ui-title ">
                        <h3 class="on">最新推荐</h3>
                            <a href="#" class="right ml15">更多</a>
                            <a href="#" class="right">面条</a>
                        </ul>
                     </div>
                     <!--最新推荐内容-->
                     <!-- <ul class="newRecipe">
                        <li class="t2">
                             <a href="#">
                                <h2>这些糕点，没有烤箱照样能做哦！</h2>
                                <div class="t2-pic"><img src="img/details_img/new-1.jpg" alt=""></div>
                                <div class="t2-pic"><img src="img/details_img/new-2.jpg" alt=""></div>
                                <div class="t2-pic"><img src="img/details_img/new-3.jpg" alt=""></div>
                                <div class="t2-pic"><img src="img/details_img/new-4.jpg" alt=""></div>
                                <span>菜单</span>    
                             </a>
                        </li>
                        <li class="t2">
                                <a href="#">
                                   <h2>群英荟萃？大白萝卜来开会！</h2>
                                   <div class="t2-pic"><img src="img/details_img/new-5.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/new-6.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/new-7.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/new-8.jpg" alt=""></div>
                                   <span>菜单</span>    
                                </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-1.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                                <a href="#">
                                    <div class="t1-pic"><img src="img/details_img/fav-2.jpg" alt=""></div>
                                    <div class="t1-cont">
                                        <h2>一周热门</h2>
                                        <p>近7天来最受欢迎的新菜谱~</p>
                                        <span>菜谱排行</span>
                                    </div>
                                </a>
                        </li>
                        <li class="t1">
                                <a href="#">
                                    <div class="t1-pic"><img src="img/details_img/fav-3.jpg" alt=""></div>
                                    <div class="t1-cont">
                                        <h2>一周热门</h2>
                                        <p>近7天来最受欢迎的新菜谱~</p>
                                        <span>菜谱排行</span>
                                    </div>
                                </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-4.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-5.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-6.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-8.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>                        
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-9.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t3">
                            <a href="#" class="clear">
                                <div><img src="img/details_img/t3-1.jpg" alt=""></div>
                                <h2>芋泥吐司</h2>
                                <span>菜谱</span>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-10.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-11.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-12.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-13.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t2">
                            <a href="#">
                                   <h2>山芋面包</h2>
                                   <div class="t2-pic"><img src="img/details_img/t1-1.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/t1-1.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/t1-1.jpg" alt=""></div>
                                   <div class="t2-pic"><img src="img/details_img/t1-1.jpg" alt=""></div>
                                   <span>菜单</span>    
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-14.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-15.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-16.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                        <li class="t1">
                            <a href="#">
                                <div class="t1-pic"><img src="img/details_img/fav-17.jpg" alt=""></div>
                                <div class="t1-cont">
                                    <h2>一周热门</h2>
                                    <p>近7天来最受欢迎的新菜谱~</p>
                                    <span>菜谱排行</span>
                                </div>
                            </a>
                        </li>
                     </ul> -->
                     <!--查看更多-->
                     <!-- <div class="watchMore">
                        <a>查看更多</a>
                     </div> -->
                     <!--讨论区-->
                     <div class="comment ">
                        <div class="comment-post">
                            <div class="comment-post-text">
                                <p><a href="#">登录</a>&nbsp;后参与讨论，发表评论</p>
                            </div>
                            <div class="comment-post-tools clear">
                                <div class="comment-post-tools-l">
                                    <a href="#"><img src="img/details_img/smilies-icon.gif" alt=""></a>
                                    Ctrl+Enter 也可提交哦
                                </div>
                                <div class="comment-post-tools-r">
                                    <span>发表评论</span>
                                </div>
                            </div>
                        </div>
                        <div class="comment-nav">
                            <i></i>
                            最新评论<span class="">（2条）</span>
                        </div>
                        <div class="comment-list">
                            <ul>
                                <li class="clear">
                                    <div class="user-pic">
                                        <a href="#">
                                            <img src="img/details_img/user-1.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="details">
                                        <div class="tools clear">
                                            <div class="tools-l">
                                                <a href="#">雨中漫步_kRsJPX</a> 
                                                <span>2018-10-23 16:28</span>
                                            </div>
                                            <div class="tools-r">
                                                <a href="#">回复</a>    
                                            </div>
                                        </div>
                                        <div class="content">👍</div>
                                        <div class="comment-befrom">

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                     </div>

                </div>
                </div>
                <!---右边-->
                <div class="space-right">
                    <!--广告-->
                    <div class="ad"></div>
                    <!--健康与话题-->
                    <div id='healthAndTopic'>
                        <div class="t-title">
                            <h3 class="on">健康与话题</h3>
                            <a href="#" class="right">更多</a>
                        </div>
                        <div class="t-content">
                            <p><span></span> <a href="#">秋天壮阳补肾，这些食物最适合男性食用！</a></p>
                            <p><span></span><a href="#">香蕉能减肥？是真的吗？</a></p>
                            <p><span></span><a href="#">便秘不是病，解不出来真要命！</a></p>
                            <p><span></span><a href="#">秋冬心血管疾病高发，如何保护血管？</a></p>
                            <p><span></span><a href="#">减肥人群，早餐晚餐这些都“不要”</a></p>
                        </div>
                    </div>
                    <!--热门话题-->
                    <div class="ui-title">
                        <h3 class="on">热门话题</h3>
                        <a href="#" class="right">更多</a>
                    </div>
                    <!--图片-->
                    <div class="r-pics ">
                        <ul class="clear">
                            <li><a href="#"></a><img src="img/details_img/right-1.jpg" alt=""></a></li>
                            <li><a href="#"></a><img src="img/details_img/right-2.jpg" alt=""></a></li>
                            <li><a href="#"></a><img src="img/details_img/right-3.jpg" alt=""></a></li>
                            <li><a href="#"></a><img src="img/details_img/right-4.jpg" alt=""></a></li>
                        </ul>
                    </div>
                    <!--标签-->
                    <div class="biaoqian">
                        <a href="#">年夜饭</a>
                        <a href="#">养生粥</a>
                        <a href="#">面片儿</a>
                        <a href="#">芋罢不能</a>
                        <a href="#">想吃醋</a>
                        <a href="#">低卡餐</a>
                        <a href="#">百搭配菜</a>
                        <a href="#">蟹脚痒</a>
                        <a href="#">撒椒</a>
                        <a href="#">补气血</a>
                        <a href="#">抗雾霾</a>
                        <a href="#">瘦身</a>
                        <a href="#">秋葵</a>
                        <a href="#">黑木耳</a>
                        <a href="#">大闸蟹</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <!--向上-->
    <div class="gotop">
        <a href="#" title="点击返回顶部">
            <img src="img/details_img/gotop.png" alt="">
        </a>
    </div>
    <Footer></Footer>
  </div>  
</template>

<script>
    //引入网页底部
	import Footer from '@/views/Footer.vue'	
    import  {setIP} from '../../public/js/SetIP.js'
	import InputSearch from '@/views/Inputsearch.vue'
	export default {
        data(){
            return {
                rid:this.$route.params.rid,      //菜谱的id
                body:{},
                recipe_name:'',
                big_pic:'',
                kouwei:'',
                gongyi:'',
                haoshi:'',
                nandu:'',
                qiaomen:'',
                mainList:'',
                accList:'',
                stepList:'',
            }
        },
        methods:{
            getInfo(){
                this.$http.get(setIP()+'details?rid='+this.rid)
                .then(result=>{             //14  15
                    console.log(result.body);
                    //console.log(typeof(result.body))    //object
                    this.body=result.body;
                    this.recipe_name=this.body.recipe[0].recipe_name;
                    this.body.recipe[0].big_pic = setIP()+ this.body.recipe[0].big_pic;
                    this.big_pic=this.body.recipe[0].big_pic;
                    this.kouwei=this.body.recipe[0].kouwei;
                    this.gongyi=this.body.recipe[0].gongyi;
                    this.haoshi=this.body.recipe[0].haoshi;
                    this.nandu=this.body.recipe[0].nandu;
                    this.qiaomen=this.body.recipe[0].qiaomen;
                    //this.main_name=this.body.main[0].main_name;
                    //this.main_count=this.body.main[0].main_count;
                    this.mainList=this.body.main;
                    this.accList=this.body.acc;
                    this.body.step.map(item=>{
                        item.m_pic = setIP()+item.m_pic;
                    })
                    this.stepList=this.body.step;
                    console.log(this.body.step);
                })
            },
        },
        created(){
            this.$nextTick(()=>{
            this.getInfo();

            })
        },
        //注册子组件
		components: {
			Footer,InputSearch
		}
}
</script>
<style scoped>
    *{
    margin:0;
    padding: 0;
    list-style: none;
    }
    body{
        color: #000;
        background: white;
    }
    .clear::after{
        content: '';
        display: block;
        clear: both;
    }
    .userTop>a:hover>span,.sub:hover,.hov:hover{
        color: #ff6767;
    }
    .mt20{
        margin-top: 20px;
    }
    .ml15{
        margin-left: 15px;
    }
    .hov:hover{
        border-bottom: 1px solid  #ff6767;
    }
    .block-text,.mo,.particulars>legend,.step-r,.newRecipe,.comment-nav,.content{
        text-align:left;
    }
    .w{
        width:990px;
        margin:0 auto;
        padding-top: 10px;
    }
    /**网页头部样式*/
    #top{
        width: 990px;
        height: 65px;
        padding-top: 50px;
        margin: auto;
    }
    #top .second_logo{
        width: 108px;
        height: 60px;
        background: url("/../img/caipu_img/logo.png") no-repeat scroll left center/108px auto;
        float: left;
    }/*logo*/
    #top .second_logo a{
        display: block;
        height: 60px;
        text-indent: -9999em;
    }
    #top .second_logo+div{
        height: 30px;
        width: 60px;
        line-height: 30px;
        margin: 15px 0 0 10px;
        padding: 0 0 0 10px;
        float: left;
    }/*菜谱*/
    #top .second_logo+div h1 a{
        background: #FF838B;
        border-radius: 5px;
        color: #fff;
        display: block;
        font-size: 20px;
        padding: 0 10px;
        float: left;
    }
    #top .search{
        padding-top: 18.5px;
        float: right;
    }/*搜索框*/
    #top .search .search-box input{
        float: right;
        width: 160px;
        border: 1px solid #ccc;
        border-right: none;
        border-radius: 3px 0 0 3px;
        height: 20px;
        line-height: 20px;
        padding: 3px;
        outline: none;
    }
    #top .search .search-box a{
        float: right;
        border-radius: 0 3px 3px 0px;
        width: 80px;
        height: 28px;
        font-size: 14px;
        text-indent: 35px;
        color: #fff;
        line-height: 28px;
        background: #999 url("/../img/search.png") no-repeat scroll 12px center/16px auto;
    }
    #top .search .search-box a:hover{
        background: #ff6767 url("/../img/search.png") no-repeat scroll 12px center/16px auto;
    }
    #top .list{
        float: right;
        padding: 0 40px 0 0;
        height: 60px;
    }/*列表*/
    #top .list a{
        position: relative;
        float: left;
        padding: 0 10px 5px;
        font-size: 20px;
        line-height: 60px;
    }
    #top .list a:hover{
        color: #ff6767;
    }/**/
    #top .list a{
        color:#333;
    }
    #top .list a.arrow i{
        position:absolute;
        bottom: -1px;
        left:50%;
        margin-left: -9px;
        z-index:1;
        width: 0px;
        height: 0px;
        border: 9px solid transparent;
        border-bottom: 10px solid #ff6767;
    }
    #top .list a.arrow b{
        position:absolute;
        bottom: -2px;
        left:50%;
        margin-left: -9px;
        z-index:2;
        width: 0px;
        height: 0px;
        border: 9px solid transparent;
        border-bottom: 9px solid #fff;
    }
    #top_2{
        width: 990px;
        height: 34px;
        border-bottom: 1px solid #ff6767;
        border-top: 1px solid #ff6767;
        margin: 0 auto;
    }/*二级导航条*/
    #top_2 ul li{
        float: left;
        list-style: none;
        padding:0 10px;
        position: relative;
    }
    #top_2 ul li:last-child{
        float: right;
    }
    #top_2 ul li a{
        display: block;
        padding: 0 3px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
    }
    #top_2 ul li a.on{
        color: #ff6767;
    }
    #top_2 ul li a:hover{
        color: #ff6767;
    }
    #top_2 #navlist a.navlist_a{
        padding: 0px 10px;
    }
    #top_2 #navlist a.navlist_a i{
        position:absolute;
        top: 15px;
        right:6px;
        z-index:1;
        width: 0px;
        height: 0px;
        border: 4px solid transparent;
        border-top: 6px solid #333;
    }
    #top_2 #navlist a.navlist_a b{
        position:absolute;
        top: 13.5px;
        right:6px;
        z-index:2;
        width: 0px;
        height: 0px;
        border: 4px solid transparent;
        border-top: 6px solid #fff;
    }
    #top_2 #navlist a.navlist_a:hover i{
        border-top-color:  #ff6767 !important;
    }
    div.top-ad{
        margin:15px auto ;
        width:990px;
    }
    /***导航 */
    nav{
        width:990px;
        height: 19px;
        margin: 0 auto;
        color:#666;
        line-height: 19px;
        padding:5px 0 10px 0;
        border-bottom: 1px solid #ddd;
        font-size: 12px;
    }
    nav>ul,nav>ul>li,.space-left,.userTop>h1{
        float: left;
    }
    nav>ul>li>a,nav>div>span>a{
        text-decoration: none;
        color: #666;
    }
    nav>ul>li>a:hover,nav>div>span>a:hover{
        color: #ff6767;
        text-decoration: underline;
        text-decoration-color: #ff6767;
    }
    nav>div,.userTop>a{
        float: right;
    }
    .space-left{
        width: 640px;
    }
    .userTop{
        width:640px;
        height:57px;    
        padding: 15px 0 10px 0;  
    }
    .userTop>h1{
        font-size:35px;
        line-height: 57px;
        font-weight: 400;
        line-height: 57px;
    }
    .userTop>a{
        width:36px;
        height: 57px;
        text-decoration: none;
    }
    .userTop>a>img{
        width:34px;
        height: 34px;
        border-radius: 50%;
        padding: 0 1px 0 1px;
        float: left;
    }
    .userTop>a>span{
        font-size: 12px;
        color: #999;
    }
    .main-pic{
        /*height:480px;*/
    }
    .main-pic img{
        width:640px;
       /* height: 480px;*/
    }
    .block-text{
        margin-top: 30px;
        height:25px;
        line-height: 25px;
    }
    .block-text span{
        height: 16px;
        width:30px;
        line-height: 100%;
        font-size: 40px;
        font-family: 宋体, "Hiragino Sans GB", STHeiti, 微软雅黑, "Microsoft YaHei";
        color:#bfbfbf;
        display: inline-block;
        text-indent: -8px;
        overflow: hidden;
    }
    .mo{
        color: #ff6767;
        margin-top:20px;
        padding:20px 0 20px 0px;
        font-size:20px;
        line-height: 20px;
    }
    .cicle{
        width:12px;
        height: 12px;
        border:4.5px solid #ff6767;
        border-radius: 50%;
        float: left;
        margin-right: 5px;
        margin-top:1px;
        
    }
    .particulars,.recipeOther{
        border:1px solid #ddd;
        padding-bottom:10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    .particulars>legend{
        margin:0 35px;
        padding:0 10px;
        font-size: 16px;
    }
    .recipe>ul>li,.recipeOther>ul>li{
        float: left;
        width:159px;
        height:70px;
        text-align:center;
        line-height: 16px;
        font-size: 12px;
        color:#999;
    }
    .sub{
        font-size:20px;
        line-height:45px;
        color: #333;
        cursor: pointer;
    }
    .recipeOther{
        margin-top: 30px;
    }   
    .recipeStep>ul>li{
        margin-bottom: 40px;
    }
    .recipeStep>ul>li::after{
        content: '';
        display: block;
        clear: both;
    }
    .recipeStep>ul>li>img{
        width:220px;
        float: left;
        padding-right: 20px;
    }
    .step-r{
        width:390px;
        float: left;
        font-size:18px;
        vertical-align: middle;    
    }
    .step-r>span{
        width:34px;
        height: 34px;
        border:1px solid #ddd;
        border-radius: 50%;
        display: block;
        line-height: 34px;
        text-align: center;
        margin-bottom:10px;
    }
    .recipeAction{
        padding: 15px 0;
        margin-top: 10px;
        color: #666;
        font-size:11px;
        text-align: center;
    }
    .recipeAction>ul>li{
        float: left;
    }
    .recipeAction>ul>li>a{
        width:77px;
        height: 53px;
        display: block;
    }
    .recipeAction>ul>li>a>i{
        width:30px;
        height: 30px;
        margin:2px auto;
        background: url('/../img/details_img/ix2.png');
        background-size: 300px 30px;
        display: block;    
    }
    .recipeAction>ul>li.lik>a>i{   
        background-position:-210px 0;
    }
    .recipeAction>ul>li.lik>a>i:hover{   
        background-position:-180px 0;
    }
    .recipeAction>ul>li.fav>a>i{   
        background-position:0 0;
    }
    .recipeAction>ul>li.fav>a>i:hover{
        background-position: -30px 0;
    }
    .recipeAction>ul>li.com>a>i{
        width:30px;
        height: 30px;    
        background:url('/../img/details_img/pl3.png');
        background-size: 30px 30px;
        display: block;
    }
    .recipeAction>ul>li.col>a>i{
        background-position: 60px 0; 
    }
    .recipeAction>ul>li.fg{
        width:1px;
        height:30px;
        border-right: 1px solid #ddd;
        margin: 2px auto;
    }
    .recipeAction>ul>li.shar-wx>a>i{
        background-position: -150px 0;
    }
    .recipeAction>ul>li.shar-fre>a>i{
        background-position: -90px 0;
    }
    .recipeAction>ul>li.shar-kj>a>i{
        background-position: -120px 0;
    }
    .recipeAction>ul>li.shar-sina>a>i{
        background-position: -60px 0;
    }
    /**最新推荐*/
    .t2,.t1,.t3{
        border-bottom:1px solid #ddd; 
    }
    .t2>a,.t1>a,.t3>a{
        padding:10px 0;
        display: block;
    }
    .t2>a>h2,.t1 .t1-cont>h2,.t3>a>h2{
        font-size:20px;
        font-weight: 400;
        color: #111;
        padding-bottom: 10px;
    }
    .t2>a>h2:hover,.t1 .t1-cont>h2:hover,.t3>a>h2:hover{
        color: #ff6767;
    }
    .t2-pic,.t1-pic{
        width: 120px;
        height: 120px;
        overflow: hidden;
        display: inline-block;
        margin-right: 12px;
    }
    .t1-pic{
        margin-right: 10px;
        float: left;
    }

    .t2-pic>img,.t1-pic>img{
        width:120px;
        height: 120px;
        transition: all .4s linear;        
    } 
    .t2-pic>img:hover,.t1-pic>img:hover{
        transform: scale(1.1)
    }
    .t2>a>span{
        display: block;
        font-size: 12px;
        color: #888;
        padding-top: 8px;
        line-height: 100%;
    }
    .t1 .t1-cont{
    height: 120px;
    }
    .t1 .t1-cont>h2{
        padding-top: 5px;
    }
    .t1 .t1-cont>p{
        font-size:14px;
        margin-bottom: 40px;
        color:#888;
    }
    .t1 .t1-cont>span,.t3>a>span{
        color: #888;
        font-size: 12px;
    }
    .t3>a>div{
        float: left;
        padding-right: 10px;
    }
    .t3>a>div>img{
        width:320px;
        height:180px;
    }
    .t3>a>span{
        clear: both;
        display: block;
        line-height: 100%;
    padding-top:5px;
    }
    /**查看更多*/
    .watchMore{
        background: #f8f8f8;    
        font-size: 18px; 
        text-align: center;
        line-height: 44px;
        margin-top: 20px;
    }
    .watchMore>a{  
        width: 100%;
        color: #ff6767;   
        border-radius: 5px; 
        display: inline-block;  
        transition: all .3s linear 
    }
    .watchMore>a:hover{
        background: #ff8d8d;
        color: white;
        cursor: pointer;
    } 
    .comment{
        margin-top: 30px;
    }
    .comment-post-text{
        border:1px solid #ccc;
        padding:5px;
        line-height: 90px;
        font-size: 14px;
    }
    .comment-post-text>p{
        text-align: center;
    }
    .comment-post-text>p>a{
        color: #069;
    }
    .comment-post-tools{
        border: 1px solid #ccc;
        border-top:none;
        background: #eee;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
    }
    .comment-post-tools-l{
        height: 32px;
        float: left;
        color: #999;
        font-size: 12px;
        line-height: 32px;
    }
    .comment-post-tools-l>a{
        float: left;
        height: 32px;
    }
    .comment-post-tools-l>a>img{
        margin:5px 10px 5px 5px;
    }
    .comment-post-tools-r{
        float: right;
    }
    .comment-post-tools-r>span{
        width: 100px;
        display: inline-block;
        text-align: center;
        background: #ba2020;
        color: white;
    }
    .comment-nav{
        height: 30px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 30px;
    }
    .comment-nav>i{
        width:2px;
        height: 30px;
        border-left: 2px solid #ba2020;
        padding-right:20px ;
        display: inline-block;
        float: left;
    }
    /*用户评论**/
    .comment-list{
        margin-top: 10px;
    }
    .comment-list>ul>li{
        padding: 10px 0;
    }
    .user-pic{
        float: left;
        height:75px; 
        margin-right: 10px;   
    }
    .user-pic>a>img{
        width:48px;
        height:48px;
        border-radius:50%;
    }
    .details{
        float: left;
        width:580px;
        color: #666;
        font-size: 10px;
    }
    .tools{
        height: 24px;
        line-height: 24px;    
    }
    .tools-l{
        float: left;
    }
    .tools-l>a{
        color: #6599f6;

    }
    .tools-r{
        float: right;
    }
    .content{
        clear: both;
        height: 22px;
        line-height: 22px
    }

    /**向上***/
    .gotop{
        position:fixed;
        bottom:20px;
        right: 17%;
    }
    .gotop>a{
        width:58px;
        height: 58px;
        display: inline-block;
    }
    .gotop>a>img{
        width:58px;
        height: 58px;
    }

    /*-----网页右边栏格式---------*/
    a{
        text-decoration: none;
        color:#333;
    }
    .space-right{
        width:300px;
        float: right;
    }
    .ad{
        height:250px;
    /* border:1px solid red;*/
    }
    .t-title,.ui-title{
        height:35px;
        border-bottom:1px solid #ddd;
        padding-top:20px;
        line-height: 30px;
    }
    .on{
        display: inline-block;
        color: #ff6767;
        border-bottom:3px solid #ff6767;
        font-size: 20px;
        font-weight:normal;
        padding-bottom: 4px;
        float:left;
    }
    .right{
        float: right;   
    }
    .t-content{
        padding-top:5px; 
        text-align:left;
    }
    .t-content>p{
        padding-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 26px;
    }
    .t-content>p>span{
        width:5px;
        height: 5px;
        margin: 8px 8px 2px 2px;
        border: 2px solid #ccc;
        border-radius: 50%; 
        display: inline-block;
    }
    .t-content>p:hover{
        color:#ff6767;
    }
    .r-pics ul{
        width:320px;
        clear:both;
    }
    .r-pics li{
        float: left;
        margin-top:20px;
        margin-right: 20px;
    }
    .r-pics img{
        width:140px;
        height: 93px;
    }
    .biaoqian{
        width:315px;
        margin-top: 10px;
    }
    .biaoqian>a{
        width:88px;
        height:34px;
        display: inline-block;
        font-size:14px;
        line-height: 34px;
        border:1px solid #eee;
        margin:15px 10px 0 0;
        text-align: center
    }
    .biaoqian>a:hover{
        border-color: #ff6767;
    }
</style>