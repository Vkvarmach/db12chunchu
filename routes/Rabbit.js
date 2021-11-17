var express = require('express');
const rabbit_controllers = require('../controllers/rabbit');
var router = express.Router();

/* GET costumes */
router.delete('/rabbit/:id', rabbit_controllers.rabbit_delete); 
module.exports = router; 