var express = require('express');
var router = express.Router();

// url: /calculate/add
router.post('/add', function(req, res) {
  var math = req.body;
  var answer = parseInt(math.inputX) + parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

// url: /calculate/sub
router.post('/sub', function(req, res) {
  var math = req.body;
  var answer = parseInt(math.inputX) - parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

// url: /calculate/div
router.post('/div', function(req, res) {
  var math = req.body;
  var answer = parseInt(math.inputX) / parseInt(math.inputY);
  console.log('answer: ', answer);
  res.send(answer.toString());
});

// url: /calculate/mult
router.post('/mult', function(req, res) {
  var math = req.body;
  var answer = parseInt(math.inputX) * parseInt(math.inputY);
  console.log('answer: ', answer);

  res.status(200).send(answer.toString());
});

module.exports = router;
