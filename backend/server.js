const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express()

app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("hello World!");
});


app.listen(5000, ()=>{
    console.log("connected to port 5000");
})