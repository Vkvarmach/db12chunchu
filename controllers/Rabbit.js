
var rabbit = require('../models/rabbit');
//module.exports = mongoose.model("rabbit", rabbitSchema)
// List of all rabbits
exports.rabbit_list = async function (req, res) {
    try {
        therabbits = await rabbit.find();
        res.send(therabbits);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
//used for rabbit get one
exports.rabbit_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: rabbit detail: ' + req.params.id);
};

//used for rabbit delete one
exports.rabbit_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await rabbit.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle colourume create on POST.
exports.rabbit_create_post = async function (req, res) {
    console.log(req.body)
    let document = new rabbit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"colourume_type":"goat", "colour":12, "size":"large"}
    document.type = req.body.type;
    document.colour = req.body.colour;
    document.life = req.body.life;
    console.log(rabbit);
    console.log(req.body);
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.rabbit_view_all_Page = async function(req, res) {
    try {
        therabbits = await rabbit.find();
        res.render('rabbit', { title: 'rabbit Search Results', results: therabbits });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

exports.rabbit_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await rabbit.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


// Handle colourume update form on PUT.
exports.rabbit_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await rabbit.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.colour)  
               toUpdate.colour = req.body.colour; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.life) toUpdate.life = req.body.life; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};
// for a specific Rabbit.
exports.rabbit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Rabbit.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle a show one view with id specified by query 
exports.rabbit_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await rabbit.findById( req.query.id)
    res.render('rabbitdetail',
   { title: 'Rabbit Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }; 

// Handle building the view for creating a Rabbit. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.rabbit_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('rabbitcreate', { title: 'Rabbit Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  

exports.rabbit_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await rabbit.findById(req.query.id)
    res.render('rabbitupdate', { title: 'Rabbit Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }; 

   exports.rabbit_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await rabbit.findById(req.query.id)
    res.render('rabbitdelete', { title: 'Rabbit Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }; 