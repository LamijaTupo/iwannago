var mongoose = require('mongoose');
var guide = mongoose.model('Guide').schema;
var trip = mongoose.model('Trip').schema;
var AgencySchema = new mongoose.Schema({
    guides: [guide.Id],
    trips: [trip],
    location: String,
    phone: String,
    email: String,
    name: String
});
mongoose.model('Agency', AgencySchema);
module.exports = mongoose.model('Agency');
