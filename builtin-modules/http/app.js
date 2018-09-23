
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify(['node.js', 'java', 'react']));
        res.end();
    }
});
//the above server is a event emitter


//server.on('connection', (socket) => {
//    console.log('New connection...')
//});

server.listen(3000);

console.log('Listening on port 3000... ');

