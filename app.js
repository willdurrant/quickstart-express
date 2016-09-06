//by default set NODE_ENV to integration (E1) unless set externally
process.env.NODE_ENV = process.env.NODE_ENV || 'integration';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./application/routes/index');
var api = require('./application/routes/api');
global.config = require('./application/config/config');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/application/public'));
app.use('/api', api);
app.use('/', routes);


app.listen(port, ip);
console.log('Listening on '+ ip + ':' + port);