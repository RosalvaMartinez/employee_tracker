const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model { }

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'departments',
    }
);

module.exports = Department;
