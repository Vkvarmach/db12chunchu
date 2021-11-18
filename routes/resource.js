var express = require('express');
var router = express.Router();

// Require rabbit_controller modules
var api_controller = require('../controllers/api');
var rabbit_controller = require('../controllers/Rabbit');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// rabbit ROUTES ///
// POST request for creating a rabbit.
router.post('/rabbit', rabbit_controller.rabbit_create_post);
// DELETE request to delete rabbit.
router.delete('/rabbit/:id', rabbit_controller.rabbit_delete);
// PUT request to update rabbit.
router.put('/rabbit/:id', rabbit_controller.rabbit_update_put);
// GET request for one rabbit.
router.get('/rabbit/:id', rabbit_controller.rabbit_detail);
// GET request for list of all rabbit items.
router.get('/rabbit', rabbit_controller.rabbit_list);
/* GET detail rabbit page */

/* GET detail rabbit page */ 
router.get('/detail', rabbit_controller.rabbit_view_one_Page); 

router.get('/create', rabbit_controller.rabbit_create_Page);

router.get('/update', rabbit_controller.rabbit_update_Page);

router.get('/delete', rabbit_controller.rabbit_delete_Page);


module.exports = router; 