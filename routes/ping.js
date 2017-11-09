const express = require('express');

var router = express.Router();

router.get("/",(req,resp)=>{
    resp.setHeader('Content-Type', 'text/html; charset=UTF-8');
    resp.setHeader('Transfer-Encoding', 'chunked');
    resp.write("<pre>");
    setInterval(()=>{
        resp.write("Ping\n");
    },5000);
});

module.exports = router;
