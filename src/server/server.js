import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
const path = require('path');


let port = 8080;
let app = express();

app.listen(port, console.log("server listening on port", port));
app.use(express.static(__dirname +'./../../')); //serves the index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '../../../index.html'));
// });

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

app.post('/image/add', async (req, res)  => {
    console.log(req.body.image);
})