var mongoose = require('mongoose');
var userList = mongoose.model('User').schema;
var VisitSchema = new mongoose.Schema({
    placeToVisit: String,
    meetingPoint: String,
    meetingTime: Date,
    duration: String,
    users: [userList]
});
mongoose.model('Visit', VisitSchema);
module.exports = mongoose.model('Visit');
