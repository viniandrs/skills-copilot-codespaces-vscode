// create web server
// create a route for /comments
// read the comments.json file
// send the content of the file to the client
// start the server
// send the comments.json file to the client

// 1. import the http module
const http = require('http');
const fs = require('fs');

// 2. create the server
const server = http.createServer((req, res) => {
    // 3. create the route for /comments
    if (req.url === '/comments') {
        // 4. read the comments.json file
        fs.readFile('./comments.json', (err, data) => {
            // 5. send the content of the file to the client
            res.write(data);
            // 6. end the response
            res.end();
        });
    }
});

// 7. start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});