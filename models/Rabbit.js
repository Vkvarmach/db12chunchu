const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
type: String,
colour : String,
life: Number
})
module.exports = mongoose.model("Rabbit", rabbitSchema)