const express = require('express');
const app = express();
const database = require('../models');

database.sequelize.sync().then(() => {
    app.listen(4096, () =>{console.log("Anonymous function ran on server 4096");});
});
