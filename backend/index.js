const express = require('express');

const app = express();
const port = 8080;

app.get('/healthcheck', (req, res) => {
    res.send("I am Alive!!");
});

app.listen(port, () => {
    console.log("Server Started....")
})