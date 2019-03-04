const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//测试地址：http://localhost:3030/details
router.get('/',(req,res)=>{
    var rid=req.query.rid;
    var obj={};
    var progress=0;
    
    var sql='select recipe_name,nandu,kouwei,gongyi,haoshi,qiaomen,big_pic from recipe where recipe_id=?';
    pool.query(sql,[rid],(err,result)=>{
        if(err) throw err;
        obj.recipe=result;
        progress+=50;
        if(progress==200)
        res.send(obj);
    });
    var sql='select main_name,main_count from main_ingredient where recipe_id=?';
    pool.query(sql,[rid],(err,result)=>{
        if(err) throw err;
        obj.main=result;
        progress+=50;
        if(progress==200)
        res.send(obj);
    });
    var sql='select acc_name,acc_count from accessory where recipe_id=?';
    pool.query(sql,[rid],(err,result)=>{
        if(err) throw err;
        obj.acc=result;
        progress+=50;
        if(progress==200)
        res.send(obj);
    });
    var sql='select m_pic,m_no,m_disc from  method  where recipe_id=?';
    pool.query(sql,[rid],(err,result)=>{
        if(err) throw err;
        obj.step=result;
        progress+=50;
        if(progress==200)
        res.send(obj);
    });
})
module.exports=router;
