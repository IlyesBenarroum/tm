const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 8000;
const db_link = "mongodb://localhost:27017/first_db";

mongoose.connect(db_link, (err)=> {
    if (err)
        console.error("Error");
    else
        console.log("Successfully");
});
app.get('/homepage', (req, res) =>{
    res.send("Hello from the other side");
});
app.listen(port, () =>{      
    console.log(`App running on ${port}`);
});

