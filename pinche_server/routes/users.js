var express = require('express');
var router = express.Router();
var md5 = require("./md5");
var mysql = require('./mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/username',function (req,res,next) {
    var uname = req.body.uname;
    var upass = md5(req.body.upass);
    mysql.query(`insert into user (uname,upass) values ('${uname}','${upass}')`,function (err,result) {
        var obj = {};
        if(err){
            console.log(err);
            obj.message = "error";
        }else{
            var id = result.insertId;
            obj.message = "seccess";
            obj.id = id;
        }
        res.send(JSON.stringify(obj));
    })
});
router.post('/school',function (req,res,next) {
    var school = req.body.school;
    var yuanxi = req.body.yuanxi;
    var year = req.body.year;
    var number = req.body.number;
    var hometown = req.body.hometown;
    var id = req.body.id;
    mysql.query(`update user set school='${school}',yuanxi='${yuanxi}',year='${year}',number='${number}',hometown='${hometown}' where uid = ${id}`,function (err,result) {
        if(err){
            console.log(err);
            res.send("error");
        }else{
            if(result.affectedRows > 0){
                res.send("success");
            }
        }
    })
});
router.post('/checkLogin', function(req, res, next) {
    var uname=req.body.uname;
    var upass=md5(req.body.upass);
    console.log(req.body)
    mysql.query(`select * from user where uname='${uname}' and upass='${upass}'`,function (err,result) {
        var obj={};
        if(err){
            obj.message="error";
        }else{
            if(result.length > 0){
                obj.message = "success";
                obj.id = result[0].uid;
                obj.uname = result[0].uname;
            }else{
                obj.message="error"
            }
            res.send(JSON.stringify(obj));
        }
    })
});
router.get('/trip',function (req,res,next) {
    mysql.query(`select * from trip`,function (err,result) {
        //console.log(result)
        var obj = {};
        if(err){
            console.log(err);
            obj.message = "error";
            res.send(JSON.stringify(obj));
        }else {
            for(var i in result){
                obj[i] = result[i];
            }
            res.send(JSON.stringify(obj));
        }
    })
});
router.get('/userinfo',function (req,res,next) {
    var uid = req.query.uid;
    mysql.query(`select uname,school,yuanxi from user where uid=${uid}`,function (err,result) {
        var obj = {};
        if(err){
            console.log(err);
            obj.message = "error";
        }else {
            obj.message = "seccess";
            obj.uname = result[0].uname;
            obj.school = result[0].school;
            obj.yuanxi = result[0].yuanxi;
        }
        res.send(JSON.stringify(obj));
    })
});
router.get('/tripinfo/:id',function (req,res,next) {
    //var tid = req.query.tid;
    var tid = req.params.id;
    console.log(tid)
    mysql.query(`select * from trip where tid=${tid}`,function (err,result) {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.send(JSON.stringify(result));
        }
    })
})

module.exports = router;
