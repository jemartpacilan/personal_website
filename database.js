const Sequelize = require('sequelize');

const connectionUrl = 'postgres://webeng:webeng@localhost:5432/webeng-zeemart';
const database = new Sequelize(connectionUrl);

module.exports = database;
