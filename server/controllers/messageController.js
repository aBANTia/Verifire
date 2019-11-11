const Message = require('../models/models')
// const http = require('http').Server(app);
// const io = require('socket.io')(http);


const messageController = {};

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