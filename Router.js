const express = require('express');
const router = express.Router();


router.get("/",(req, res)=>{
	res.send("<h2>HELLO WORLD ???777!</h2>");
});


module.exports = router;