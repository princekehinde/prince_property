const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        sparse: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true, 
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true, 
    },
},
{timestamps: true}
)
UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", UserSchema);
