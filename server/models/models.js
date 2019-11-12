const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = "mongodb+srv://bradleyDB:kiroismypartner@cluster0-klwdv.mongodb.net/test?retryWrites=true&w=majority";

//connect to database
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'verifire'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

//create new schema for the messages
const messageSchema = new Schema({
    name: String,
    message: String
})

const Message = mongoose.model('message', messageSchema);
module.exports = Message;