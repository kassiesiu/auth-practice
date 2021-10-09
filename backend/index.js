const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

const resObj = {
    "message": "I am Alive!"
};

app.use(cors())

app.get('/healthcheck', (req, res) => {
    res.send(resObj);
});

app.listen(port, () => {
    console.log("Server Started...")
});