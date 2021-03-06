var express = require("express");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");

router.get('/', HomeController.index);

router.post('/user', UserController.store);

router.get('/users', UserController.index);

router.get('/user/:id', UserController.findUser);

router.put('/user', UserController.edit);

router.delete('/user/:id', UserController.remove);

module.exports = router;