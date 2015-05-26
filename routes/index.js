var express = require('express');
var router = express.Router();
var Item = require('../model').Item;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
	var todo = req.body.addItem;
	
	var newitem = new Item({ item: todo });
	newitem.save(function (err, newitem) {
		if (err) return console.error(err);
	});
});

router.post('id/done', function(req, res, next) {
  //do something
});

router.post('id/del', function(req, res, next) {
  //do something
});

router.post('id/rec', function(req, res, next) {
  //do something
});




module.exports = router;
