const sequelize = require('../db');
const Sequelize = require('sequelize');
 
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Load model
db.Vocabulary = require("./vocabulary")(sequelize, Sequelize);

module.exports = db;