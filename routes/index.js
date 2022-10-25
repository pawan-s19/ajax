var express = require('express');
var router = express.Router();
var users = require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post("/createUser",function(req,res){
  users.create({
    username:req.body.username,
    image:req.body.image
  })
  res.redirect("/");
  res.end;
})
router.get("/data/:plc",function(req,res){
users.findOne({username:req.params.plc})
.then(function(foundUser){
res.json(foundUser)
})
})
router.get("/search/:plc",function(req,res){
 const regex = new RegExp('^'+req.params.plc,'i');
 users.find({username:{ $regex:regex}})
 .then(function(foundUser){
   res.json(foundUser)
 })
})
module.exports = router;
