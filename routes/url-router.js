var express = require('express');
var router =  express.Router();

router.get('/', function(req, res, next){
    res.send("You're trying our url service...");
});

router.get('/test', function(req, res, next){
    res.send("You GET requested a url");
});

router.post('/foo', function(req, res, next){
    res.send("You POST requested a url");
});

module.exports = router;