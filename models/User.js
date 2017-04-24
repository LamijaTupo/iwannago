var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    username: String
});
mongoose.model('User', UserSchema);
module.exports = {
  model: mongoose.model('User'),
  schema: UserSchema
}
