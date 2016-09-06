var express = require('express');
var router = express.Router();

/* GET greeting. */
router.get('/', function(req, res, next) {
    res.send('Added Jade | ');
});

module.exports = router;
