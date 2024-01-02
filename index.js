const express = require("express")
const app = express()
const route = require("./router")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/backendassignment-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=> console.log(err))


app.use("/", route)
app.listen(4000,function(){
    console.log("port is running on 4000")
})