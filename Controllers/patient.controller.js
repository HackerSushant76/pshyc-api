const { Patient } = require("../Models/patient.module");


const patientRegisterController = async(req,res)=>{
    const {name,email,address,phone,password,photo} = req.body
    const patient = new Patient({name,email,address,phone,password,photo})
    await patient.save()
    res.send("Patient Regitration success")
}

module.exports = {patientRegisterController};