
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema( {
    idno: Number,
name : String,
college : String,
eid : String,
email: String, 
batch : Number,
course : String,
placed : String,
phoneno: String,
adhaar: String,
age : Number,
birthdate : String
});

module.exports = mongoose.model('Student', studentSchema);