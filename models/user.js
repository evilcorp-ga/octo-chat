const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userModel = new Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
    is_admin : {type: Boolean, default: false}
});
