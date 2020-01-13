var express = require('express');
var app = express();
//var fs = require("fs");
var googleTrends = require('google-trends-api');

const cors = require('cors');

app.use('*', function (req, res, next) {
    //replace localhost:8080 to the ip address:port of your server
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

//enable pre-flight
app.options('*', cors());

app.get('/trends', function (req, res) {
    if (Object.keys(req.query).length == 0 || !req.query.topic) {
        res.end("No topics available");
    } else {
        googleTrends.interestOverTime({ keyword: req.query.topic })
            .then(function (results) {
                res.end(results);
            })
            .catch(function (err) {
                console.error('Oh no there was an error', err);
            });
    }
})

app.get('/wiki', function (req, res) {
    var rp = require('request-promise');
    if (Object.keys(req.query).length == 0 || !req.query.topic) {
        res.end("No topics available");
    } else {
        var options = {
            methode: 'GET',
            uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/' + req.query.topic + '/daily/2017042700/2018051700',
            json: true
        };

        rp(options)
            .then(function (parseBody) {
                console.log("success", parseBody);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(parseBody));
            })
            .catch(function (err) {
                res.end(err);
            });
    }

});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})