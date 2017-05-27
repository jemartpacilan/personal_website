const Sequelize = require('sequelize');
const database = require('./database');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    comment: {
        type: Sequelize.TEXT,
        allowNull: false
    }

}, {
    timestamps: true
});

module.exports.User = User;
database.sync();
