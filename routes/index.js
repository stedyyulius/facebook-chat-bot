var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/webhook', function(req, res, next) {
  if (req.query["hub.verify_token"] === "this_is_my_token") {
    console.log("Verified webhook");
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Verification failed. The tokens do not match.");
    res.sendStatus(403);
  }
});

module.exports = router;
