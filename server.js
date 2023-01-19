const express = require("express")
const cors = require("cors")
const { connection } = require("./Config/db")
const { patientRegisterController } = require("./Controllers/patient.controller")
const {validator} = require("./Middlewares/validator")
require("dotenv").config()
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

app.get("/" , (req,res)=>{
    res.send("Psych api")
})

app.post("/patientregister",validator,patientRegisterController )

app.listen(PORT, async()=>{
    try{
        await connection
        console.log(`connected to db successfully`)
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening on ${PORT}`)
})