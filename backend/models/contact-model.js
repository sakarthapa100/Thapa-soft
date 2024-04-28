
const {Schema, model, default: mongoose} = require("mongoose")

const contactSchema = new Schema({
username:{ type: String, require:true},
email:{ type: String, require:true},
message:{ type: String, require:true},

})

//creae a model or collection
const Contact = mongoose.model("Contact", contactSchema);

model.exports = Contact