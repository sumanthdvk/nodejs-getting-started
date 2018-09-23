//Event - A signal saying something has happened
const EventEmitter = require('events'); //the upper case E denotes it is a class
const emitter = new EventEmitter();// this is actual object


//Register a listener
emitter.on('messageLogged', (eventArg) => {
    console.log('Listener called', eventArg);
})

//Raised an event here
emitter.emit('messageLogged', {id: 1, url: 'http://'}); 
//emit = making a noise, produce

//the above sequence is required

//exercise 
emitter.on('logging', (e) => {
    console.log('Message received from logging event is:',e.msg);
})
emitter.emit('logging', {msg: 'exercise message'})