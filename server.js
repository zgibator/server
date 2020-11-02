const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })

        res.end("<h1>Hello world!</h1>");
    }
    if (req.url == "/users") {
        res.writeHead(200, {
            'Content-type': 'text/json'
        })

        const users = [
            { name: "u1", age: "28" },
            { name: "u2", age: "32" }
        ]
        res.end(JSON.stringify(users));
    }

})

server.listen(3228, () => {
    console.log("server runing...");
})

const routes = require('./routes');

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    User = require('./models/UserModel'),
    port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/users_db');

routes(app);
app.listen(port);