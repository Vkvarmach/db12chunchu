var express = require('express');
const rabbit_controllers = require('../controllers/rabbit');
var router = express.Router();

/* GET costumes */
router.get('rabbit/:id', rabbit_controllers.rabbit_detail);
//router.put('rabbit/:id', rabbit_controlers.rabbit_update_put);
module.exports = router; 