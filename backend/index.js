const express = require('express');
// const cors = require('cors');
const app = express();
const port = 8080;

const cors = {
    origin: "http://localhost:3000"
}

const resObj = {
    "message": "I am Alive!"
};

app.get('/healthcheck', (req, res) => {
    res.send(resObj);
});

app.listen(port, () => {
    console.log("Server Started...")
});