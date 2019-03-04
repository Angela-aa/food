const express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/",(req,res)=>{
var output={
    count:0,//查询结果的总记录数
    topic:[],
    pic:[],
};

Promise.all([
    new Promise(function(open){
      var sql1="SELECT COUNT(tid) as c FROM topic";
      pool.query(sql1,(err,result)=>{
        if(err) throw err;
        output.count=result[0].c
        open();
      })
   }),
   new Promise(function(open){
    var sql2="SELECT uid,user_name,upic,tid,userId,t_title,t_disc FROM user,topic WHERE userId=uid";
      pool.query(sql2,(err,result)=>{
        if(err) throw err;
        output.topic=result;
        open();
      })
   }), 
   new Promise(function(open){
    var sql3="SELECT tid,tp_src,topicId FROM topic,topic_pic WHERE tid=topicId";
    pool.query(sql3,(err,result)=>{
        if(err) throw err;
        output.pic=result;
        open();
        //http://localhost:3030/topic/topiclist
      })
  })
]).then(function(){
  res.send(JSON.stringify(output));
})

    
    
})
module.exports=router;