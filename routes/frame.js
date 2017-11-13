const express = require('express');

var router = express.Router();

router.get("/",(req,resp)=>{
    res.json(req.body);
});

module.exports = router;
