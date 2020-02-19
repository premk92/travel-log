const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Title - Text
// * Description - Text
// * Comments - text 
// * Rating - Scale of 1 - 10
// * Image - Text - URL
// * Lattitude - Number
// * Longitude - Number
// * Created At - DateTime
// * Updated At - DateTime

const requiredNumber = {
    type : Number,
    required : true,
};
const defaultDate = {
        type: Date, 
        default : Date.now,
        required : true,
    };

const logEntrySchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    description: String,
    comments:   String,
    image: String,
    rating: {
        type : Number,
        min : 0,
        max : 10,
        default : 0,
    }, 
    lattitude: {
        ...requiredNumber,
        min : -90,
        max : 90,
    },
    longitude: {
        ...requiredNumber,
        min : -180,
        max : 180
    }
    visitDate : {
        required : true,
        type : Date,
    }
},{
     timestamps : true,
});

//Model
const LogEntry = mongoose.model('LogEntry',logEntrySchema)

module.exports = LogEntry;