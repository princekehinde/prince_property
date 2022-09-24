const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: [true, "User must ave a username"],
        sparse: true,
    },
    Email:{
        type: String,
        required: [true, "User must have a valid email"],
    },
    phoneNumber:{
        type: Number,
        required: [true, "User must have a valid phone number"],
    },
    password:{
        type: String,
        required: [true, "User must have a valid password"],
    },
    address:{
        type: String,
        required: [true, "User must have a valid address"],
    },
},
{timestamps: true}
)
UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", UserSchema);
