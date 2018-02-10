var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Jianchi' });
});

router.get('/hello', function (req, res, next) {
  res.render('index', { title: 'hello' });
});

router.post('/hello', function (req, res, next) {
  res.render('index', { title: 'hello' });
});

module.exports = router;
