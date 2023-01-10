const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roles extends Model { }

Roles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.DECIMAL
        },
        department_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'roles',
    }
);

module.exports = Roles;
