function sayHello(name) {
    console.log('Hello ' + name); //console is global
}

//sayHello('Sumanth');

/* //few of the global objects
setTimeout();
clearTimeout();
setInterval();
clearInterval();

global // ~ window

var message = '';
global.message //undefine; not available */


//console.log(module);
//every file is a module in node
//the module appears to be global but not


const logger = require('./logger'); //.js is assumed. best practice is to use const so that we dont change by mistake
//console.log(logger);

//logger.log('text to log'); // #1 method using object 'log'
logger('log message')

