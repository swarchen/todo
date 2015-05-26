var express = require('express');
var router = express.Router();
var Item = require('../model').Item;

/* GET home page. */
router.get('/', function(req, res, next) {
	Item.find()
		.sort({
			date: -1
		})
		.exec(function(err, items) {
			if (err) console.log(err);

			res.render('index', {
				items: items
			});
		});
});

router.post('/add', function(req, res, next) {
	var todo = req.body.addItem;
	
	var newitem = new Item({ item: todo });
	newitem.save(function (err, newitem) {
		if (err) return console.error(err);
		res.redirect('/');
	});
});

router.post('/:id/done', function(req, res, next) {
	var id = req.params.id;

	Item.findOneAndUpdate({
		_id: id
	}, {
		done: true
	}, function(err, item) {
		if (err) console.log(err);
		res.json(true);
	});
});

router.post('/:id/del', function(req, res, next) {
	var id = req.params.id;

	Item.findByIdAndRemove(id, function(err) {
		if (err) console.log(err);
		res.json(true);
	});
});

router.post('/:id/rec', function(req, res, next) {
	var id = req.params.id;

	Item.findOneAndUpdate({
		_id: id
	}, {
		done: false
	}, function(err, item) {
		if (err) console.log(err);
		res.json(true);
	});
});




module.exports = router;
