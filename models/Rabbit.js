const mongoose = require("mongoose")
const RabbitSchema = mongoose.Schema({
type: String,
colour : String,
lifespan: Number
})
module.exports = mongoose.model("Rabbit", RabbitSchema)