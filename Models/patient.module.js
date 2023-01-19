const { default: mongoose } = require("mongoose");


const patientSchema  = mongoose.Schema({
    name: {type: String , required : true},
    email: {type: String , required: true},
    address: {type: String , required: true},
    phone: {type: String , required: true},
    password: {type: String , required: true},
    photo:{type: String , required: true}
})

const Patient = mongoose.model('patient' , patientSchema)

module.exports = {Patient}

