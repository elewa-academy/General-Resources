const mongoose = require("mongoose")
const Schema = mongoose.Schema

var studentSchema = new Schema({
    firstName:     {
                type: String,
                required: [true, 'Email address is required']
                },
    lastName:  {
                type: String,
                required: 'Password is required',
                },
	email:	{
		        type:String,
                required:true
			},
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

mongoose.model("User", studentSchema)