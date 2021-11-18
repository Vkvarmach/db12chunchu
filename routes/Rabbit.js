var express = require('express');
const rabbit_controller = require('../controllers/rabbit'); 
var router = express.Router();

// router.get('/delete', rabbit_controller.rabbit_delete_Page);
router.get('/detail', rabbit_controller.rabbit_view_one_Page);


module.exports = router; 