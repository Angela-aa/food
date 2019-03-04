const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{  
  console.log(req.query)
  var pno = req.query.pno;            //2
  var pageSize = req.query.pageSize;  //5
  var rname = req.query.rname;
  // rname = '%' + rname + '%';
  var sql = "SELECT count(recipe_id) as c FROM recipe WHERE recipe_name LIKE ?";
  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,["%"+rname+"%"],(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      console.log(result[0].c,c)
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  });

  var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
  pageSize = parseInt(pageSize)
  if(req.query.rname != ''){
    console.log('aaaaaaaa')
    var sql="SELECT recipe_id,recipe_name,recipe_pic,user_name FROM recipe,user WHERE userId=uid AND recipe_name LIKE ?";
    var arr = ["%"+rname+"%",offset,pageSize]
  }else{
    console.log('bbbbbbbbb')
    var sql="SELECT recipe_id,recipe_name,recipe_pic,user_name FROM recipe,user WHERE userId=uid";
    var arr = [offset,pageSize]
  }
  sql += " LIMIT ?,?";
  pool.query(sql,arr,(err,result)=>{
    console.log(sql)
    if(err)throw err;    
    obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj);
    }
  })
})
module.exports=router;
//http://localhost:3030/recipe?pno=1&pageSize=20
