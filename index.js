const express = require('express');

const app = express();

const router = require("./Router");



app.use("/", router);




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)});


