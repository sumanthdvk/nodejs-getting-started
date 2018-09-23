//modularity
var url = 'http://mylooger.io/log'; // there are services provided to log messages. this could be one of the URLs

console.log('File name is ' + __filename);
console.log('Dir name is ' + __dirname);

function log(message) {
    //send an HTTP request
    console.log(message);
}

//to make log visible to outside this module
//module.exports.log = log; // #1 method using object 'log'
module.exports = log;

//exports.log = log;// is same as above
//exports //it is short cut to module.exports

//exports = log; // we cannot write this because exports is reference to module.exports so we can't change that ref.