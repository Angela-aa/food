const express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/",(req,res)=>{
    var output={
       // mofang_id:1,
        mf:[],
        class:[],
        pics:[]
    };
    output.mofang_id = req.query.id;
    Promise.all([
       new Promise(function(open){
            var sql="SELECT banner from mofang WHERE mf_id=?";
            pool.query(sql,[output.mofang_id],(err,result)=>{
                if(err) throw err;
                output.mf=result;
                open();
            });     
       }),   /**/
       new Promise(function(open){          
            var sql1="SELECT class_id,class_title,class_disc FROM class WHERE mf_id=?";

            pool.query(sql1,[output.mofang_id],(err,result)=>{
                if(err) throw err;
                output.class=result;
                open();
            })
            
        }),
        new Promise(function(open){          
            var sql2="SELECT class_id,cp_disc,cp_title FROM class_pic";
            pool.query(sql2,(err,result)=>{
                if(err) throw err;
                output.pics=result;
                open();
            })
            
        }),
    ]).then(function(){
        res.send(JSON.stringify(output));
      })

   
});
//http://localhost:3030/mofang?id=2
module.exports=router;