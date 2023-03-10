const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    role_id: {
      type: DataTypes.INTEGER
    },
    manager_id: {
      type: DataTypes.INTEGER
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'employees',
  }
);

module.exports = Employee;
