const users = [
    { name: "u1", age: "28" },
    { name: "u2", age: "32" }
]

User = require('./models/UserModel'),

    module.exports = function (app) {
        app.get("/", (req, res) => {
            res.end("<h1>Hello world!</h1>");
        })

        app.get("/users", (req, res) => {
            User.find(function (err, users) {
                if (err) {
                    res.send(err);
                }
                res.json(users);
            });

        })

        app.post("/users", (req, res) => {
            res.send(users);
        })
    }