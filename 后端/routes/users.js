var express = require('express');
var router = express.Router();
var handler = require('./dbhandle.js');
var crypto = require('crypto');
 
/* POST users listing. */
//登录
router.post('/login', function(req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

 

    handler(req, res, "user", {name: req.body.username},function(data){
        if(data.length===0){
            res.end( "抱歉!用户名密码不对");
        }else if(data[0].password !== password){
            //res.end('{"err":"密码不正确"}' );
             res.end(data[0]);
        }else if(data.length!==0&&data[0].password===password){
            
            req.session.username = req.body.username; //存session
            req.session.password = password;
            
            res.end('{"success":"true"}');
        }
        
    });
    
});

router.post('/register', function(req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
   //res.end( password);
 

    handler(req, res, "user", {name: req.body.username,password:password,phone:req.body.phone},function(data){
        
            
            res.end( );
        
        
    });
    
});
 
module.exports = router;

