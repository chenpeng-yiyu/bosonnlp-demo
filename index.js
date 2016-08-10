var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var config = require('./config');
var app = express();

app.set('port', process.env.PORT || 3000);
//视图路径
app.set('views', path.join(__dirname, 'views'));
//模板引擎
app.set('view engine', 'ejs');

//引入静态资源
app.use(express.static(path.join(__dirname, 'public')));

//如果不用 bodyParser, post提交的数据在 req.body 中将会取不到
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res, next) {
    res.render('index');
});

//请求转发
app.post('/proxy', function(req, res, next) {
    var data = [];
    data.push(req.body.data);
    superagent
        .post(req.body.url)
        .set('X-Token', config.token)
        .send(data)
        .end(function(err, _res) {
            res.json(_res.text);
        });
});

app.listen(process.env.PORT || 3000);