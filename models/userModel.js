const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   { 
        first_name: {
            type: String,
            required : [true,"Mandatory Field"]
        },
        last_name: {
            type: String,
            required : [true,"Mandatory Field"]
        },
        email: {
            type: String,
            required : [true,"Mandatory Field"]
        },
        gender: {
            type: String,
            required : [true,"Mandatory Field"]
        },

        isIndian: {
            type: Boolean,
            required : true,
            default : true
        }
    }
);

const User = mongoose.model("User",userSchema);

module.exports = User;