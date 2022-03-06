const express = require('express');
const cors = require('cors');
const app = express();
const {login} = require('./src/login/login')
const port = 8081;

app.use(cors())

app.post('/login', (req, res) => {
    login(req, res)
});

app.get('/healthcheck', (req, res) => {
    console.log("Health was checked");
    res.send("I am alive!");
});

app.listen(port, () => {
    console.log("Server Started...")
});