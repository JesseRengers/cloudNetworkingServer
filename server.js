const express = require("express")
const app = express();

//React on a GET request, just sending some string
app.get("/", function(req,res) {
    res.send("This is the server")
})

//Listen on port 5000 for incoming requests
app.listen(5000,function() {
    console.log("listening on 5000")
})