var valida = require("email-validator");
const checkPassword = (str) => {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  if (str.match(passw)) {
    return true;
  }
  return false;
};
const validator = (req, res, next) => {
  const { name, email, address, phone, password, photo } = req.body;
  if (
    name == "" ||
    email == "" ||
    address == "" ||
    phone === "" ||
    password === "" ||
    photo === ""
  ) {
    res.status(401).send("All fields are mandatory to fill");
    return;
  }
  if (!valida.validate(email)) {
    res.status(401).send("Invalid email");
    return;
  }
  if (phone.length < 12) {
    res.status(401).send("Invalid number");
    return;
  }
  if (!checkPassword(password)) {
    res.status(401).send("Invalid password format");
    return
  }
  if(address.trim().length<10){
    res.status(401).send("Enter full address")
    return
  }
  next();
};

module.exports = { validator };
