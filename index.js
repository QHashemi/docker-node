const express = require('express');

const app = express();

const router = require("./Router");



app.use("/", router);
app.use("/login" ,(req, res)=>{
	res.send("LOGIN PAGE");	
	
});




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)});


