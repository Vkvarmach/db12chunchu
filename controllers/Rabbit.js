const Rabbits = require('../models/Rabbit');
var Rabbit = require('../models/Rabbit');
//module.exports = mongoose.model("Rabbit", RabbitSchema)


// List of all Rabbit
exports.rabbit_list = async function (req, res) {
    try {
        theRabbit = await Rabbits.find();
        res.send(theRabbit);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Rabbit_view_all_Page = async function(req, res) { 
    try{ 
        theRabbits = await Rabbit.find(); 
        console.log(theRabbits)
        res.render('Rabbit', { title: 'Rabbit Search Results', results: theRabbit }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.rabbit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Rabbit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.type= req.body.type; 
    document.colour = req.body.colour; 
    document.lifespan = req.body.lifespan; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Rabbit.
exports.rabbit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit detail: ' + req.params.id);
};
// Handle Rabbit delete form on DELETE.
exports.rabbit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit delete DELETE ' + req.params.id);
};
// Handle Rabbit update form on PUT.
exports.rabbit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rabbit update PUT' + req.params.id);
};