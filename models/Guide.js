var mongoose = require('mongoose');
var user = mongoose.model('User').schema;
var GuideSchema = new mongoose.Schema({
    guide: user,
    users: [user.Id]
});
mongoose.model('Guide', GuideSchema);
module.exports = mongoose.model('Guide');
