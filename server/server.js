const path = require('path');
const express = require ('express');

const publicPath = path.join(__dirname ,'../public')
var app =express();
const port = process.env.PORT|| 3000
app.use(express.static(publicPath));

app.listen(3000 ,()=>{
    console.log(`server is up on port ${port}`);
});