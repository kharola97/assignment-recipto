const express = require('express');
const router = express.Router();

const userController = require("./api")

router.post("/user", userController.userDetails)





router.all('/*',(req,res)=>res.status(404).send("page not found"));
module.exports = router;