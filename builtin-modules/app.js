//Built-in modules
//https://nodejs.org/dist/latest-v8.x/docs/api/

//Path module
const path = require('path');// if no ./ or ../ is given then node assumes it is built-in
var fileObj = path.parse(__filename);
console.log(fileObj);

//OS module
const os = require('os');
var totalMemory = os.totalmem();
console.log('Total memory: ' + totalMemory);
console.log(`Total memory: ${totalMemory}`); //ES6 Template string

//file system module
const fs = require('fs');

//fs.readdirSync('./');

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});