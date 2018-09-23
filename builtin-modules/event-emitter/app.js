
//in real world we often extend EventEmitter and use that class

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (eventArg) => {
    console.log('Listener called', eventArg);
})


logger.log('message');