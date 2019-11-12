const Message = require('../models/models')

//i attempted to start with web sockets but it started crashing the app- lack of time
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);


const messageController = {};
//we want to simultaneously get the entire message history to display (get) and send the new data to the database
messageController.getMessages = (req, res, next) => {
    //do i even have access to messages?
    Message.find({}, (err, messages) => {
        if (err) {
            return res.send(404, {'Error: ': err});
        }
        res.locals.messages = messages;
        next();
    })
}
//see comments above
messageController.postMessages = (req, res, next) => {
    const {name, message} = req.body; 
    Message.create({name, message}, (err, result) => {
        if (err) {
            return res.send(404, {'Error: ': err});
        }
        res.locals.message = result;
        console.log('res.locals.message', res.locals.message)
        // io.emit('message', req.body);
        next();
    });

}

module.exports = messageController;