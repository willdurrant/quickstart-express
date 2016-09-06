var path = require('path');
var express = require('express');
var router = express.Router();


router.get('*', function(req, res, next) {
    var pageData = {
        title: 'PaaS, NodeJS application!',
        current_node_env: config.current_node_env,
        changes: ['Configured Jade','Configured Nodemon','Project structure']

    }
    res.render( path.join(__dirname, '../views/') + 'index', pageData);
});

module.exports = router;

