var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/send',function(req,res,next){

var transporter = nodemailer.createTransport({
	service: ' gmail',
	auth: {
		 user:'ssshrihari@gmail.com',
		 pass:'htconemm8'
	}
});
 var mailOptions = {

 	from:'xxxxxx@xxx.com',
 	to:'ssshrihari@gmail.com',
 	subject:'Website submission',
 	html: '<p> You got a new submission </p><ul><li>Name: '+req.body.name+'</li><li>Email:'+req.body.email+'</li> <li>Message : '+req.body.Message+'</li></ul>'

 };
 transporter.sendMail(mailOptions,function(error,info){
 	if(error){
 		console.log(error);
 		res.redirect('/contact');
 	}else{
 		console.log('Message Sent'+info.response);
 		res.redirect('/');
 	}


 })
})
module.exports = router;
