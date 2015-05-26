//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/todo-list');
function itemSchema(mongoose){
	var Schema = mongoose.Schema;

	return new Schema({
	  item:   String,
	  date: { type: Date, default: Date.now },
	  done: { type:Boolean, default: 0}
	});

}


//var Item = mongoose.model('Item', itemSchema);


exports.itemSchema = itemSchema;