var express = require('express');
var router = express.Router();
/*var welcomeuserRouter = require('./welcomeuser');


var app= express();

app.use('/welcome', welcomeuserRouter);*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usres');
});

router.get('/welcome', function (req, res, next) {
	res.render('welcomeuser');
});



module.exports = router;
