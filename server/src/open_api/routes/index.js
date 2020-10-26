var router = require("express").Router();

require("./events_route")(router);
// require("./file_route")(router);
//require("./user")(router);
module.exports = router;