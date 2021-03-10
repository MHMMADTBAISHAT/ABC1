var mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    // email: {type: String , unique: true , required: true},
    isAdmin: {type: Boolean , default: false }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User" , userSchema);