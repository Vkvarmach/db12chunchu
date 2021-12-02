var express = require('express');
const rabbit_controller = require('../controllers/rabbit'); 
var router = express.Router();

// router.get('/delete', rabbit_controller.rabbit_delete_Page);
router.get('/', rabbit_controller.rabbit_view_all_Page);

const secured = (req, res, next) => {

    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
router.get('/update', secured, rabbit_controller.rabbit_update_Page);
router.get('/create', secured, rabbit_controller.rabbit_create_Page);



module.exports = router; 