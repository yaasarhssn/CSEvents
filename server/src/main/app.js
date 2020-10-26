const express = require('express');
const indexApiRouter=require('../open_api/routes')

const bodyparser = require('body-parser');
const mysql = require('mysql');
var app = express();
app.use(bodyparser.json());


const port = 8090;
app.use('/',indexApiRouter)
app.listen(port, () => console.log(`Listening on port ${port}..`));