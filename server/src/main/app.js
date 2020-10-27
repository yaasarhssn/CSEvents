const express = require('express');
var cors=require('cors');
const indexApiRouter=require('../open_api/routes')

const bodyparser = require('body-parser');
const mysql = require('mysql');
var app = express();
app.use(bodyparser.json());
app.use(cors());

const port = 8080;
console.log("inside main");
app.use('/',indexApiRouter)
app.listen(port, () => console.log(`Listening on port ${port}..`));