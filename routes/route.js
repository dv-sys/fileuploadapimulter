const express = require('express');
const router = express.Router();

router.post('/upload',upload,(req,res)=>{
    res.send('file upload');
})

module.exports = router;
