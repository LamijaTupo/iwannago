var mongoose = require('mongoose');
var guide = mongoose.model('Guide').schema;
var visit = mongoose.model('Visit').schema;
var TripSchema = new mongoose.Schema({
    guides: [guide.Id],
    visits: [visit],
    destination: String,
    travelDate: Date,
    returnDate: Date,
    name: String
});
mongoose.model('Trip', TripSchema);
module.exports = mongoose.model('Trip');
