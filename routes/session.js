const express = require('express');

var router = express.Router();

router.get("/:id",(req,resp)=>{
    resp.render("chat",{});
});

router.post("/new",(req,resp)=>{
    resp.end(JSON.stringify(req.body, null, 2));
});

module.exports = router;
