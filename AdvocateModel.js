const mongoose = require('mongoose');

const AdvocateSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Contact : {
        type : Number,
        required : true
    },
    Experience : {
        type : Number,
        required : true
    },
    Location : {
        type : String,
        enum : ['New Delhi' , 'Prayagraj' , 'Mumbai' , 'Kolkata' , 'Chennai' , 'Banglore']
    },
  Qualification : {
        type : String,
        required : true
    },
    About : {
        type : String,
        required : true
    },
    EnrollmentNumber : {
        type : String,
        required : true
    },
    Specilization : {
        type : String,
        enum : ['Criminal lawyers' , 'Corporate lawyers' , 'Civil lawyers' , 'Intellectual property lawyers' , 'Tax lawyers' , 'Labour lawyers' , 'Immigration lawyers' , 'Government lawyers' , 'Bankruptcy lawyers']
    }
},{timestamps : true})

const AdvocateModel = mongoose.model('lawyers',AdvocateSchema);

module.exports = AdvocateModel;