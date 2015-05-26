function itemSchema(mongoose){
	var Schema = mongoose.Schema;

	return new Schema({
	  item:   String,
	  date: { type: Date, default: Date.now },
	  done: { type:Boolean, default: 0}
	});

}

exports.itemSchema = itemSchema;