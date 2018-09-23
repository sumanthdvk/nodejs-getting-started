const EventEmitter = require('events');

var url = 'http://mylooger.io/log'; // there are services provided to log messages. this could be one of the URLs

class Logger extends EventEmitter {
    log(message) {
        //send an HTTP request
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'}); 
    }
}

module.exports = Logger;
