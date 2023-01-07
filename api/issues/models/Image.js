const mongoose=require('mongoose');

const imageSchema=mongoose.Schema({
	issue_id : mongoose.Schema.Types.ObjectId,
	img: {
		data : Buffer,
		contentType : String
	}
})

module.exports=new mongoose.model('Image',imageSchema);