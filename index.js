const inquirer = require('inquirer')
const mysql = require('mysql2');
const sequelize = require('./config/connection.js');
const Role = require('./models/Role.js');
const Department = require('./models/Department.js');
const Employee = require('./models/Employee.js');
const prompts = require('./lib/prompts.js');
const cTable = require('console.table');
const { role } = require('./lib/prompts.js');
const { Op } = require("sequelize");


async function init() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    do {
        var results = await inquirer.prompt(prompts.menu);
        switch (results.choice) {
            case 'View All Employees':
                await viewAllEmployees();
                break;
            case 'Add Employee':
                await addEmployee();
                break;
            case 'Update Employee Role':
                await updateEmployeeRole();
                break;
            case 'View All Roles':
                await viewAllRoles();
                break;
            case 'Add Role':
                await addRole();
                break;
            case 'View All Departments':
                await viewAllDepartments();
                break;
            case 'Add Department':
                await addDepartment();
                break;
            case 'Quit':
                break;
        }
    } while (results.choice !== "Quit")
    console.log("exiting program");



    // const employees = await Employee.findAll();
    // const jane = await Employee.create({first_name: "Jane", last_name: "Doe", role_id: 33, manager_id: 09});
    // console.log("All Employee:", JSON.stringify(employees, null, 2));


    // const departments = await Department.findAll();
    // const  sales = await Department.create({ department_name: "Jane"});
    // console.log("All Department:", JSON.stringify(departments, null, 2));


    // const roles = await Role.findAll();
    // const sweeper = await Role.create({ title: "Jane", salary: 88000, department_id: 88});
    // console.log("All Roles:", JSON.stringify(roles, null, 2));
};




async function viewAllEmployees() {
    console.log('viewAllEmployees()');
    const employees = await Employee.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(employees, null, 2)));

};

async function addEmployee() {
    var roles = await Role.findAll();
    roles = JSON.parse(JSON.stringify(roles, null, 2));
    prompts.employee[2].choices = roles.map(role => { return role.title })

    var managers = await Employee.findAll({
        where: {
           manager_id: null
        }
    });
    managers = JSON.parse(JSON.stringify(managers, null, 2));
    prompts.employee[3].choices = managers.map(manager => { return manager.first_name + ' ' + manager.last_name })


    var employee = await inquirer.prompt(prompts.employee);
    var roleId = roles.filter(role => role.title === employee.choice)
    var managerId = managers.filter(manager => manager.first_name + ' ' + manager.last_name === employee.managerChoice)
    const newEmployee = await Employee.create({ first_name: employee.firstName, last_name: employee.lastName, role_id: roleId[0].id, manager_id: managerId[0].id });
};

async function updateEmployeeRole() {
    var update = await inquirer.prompt(prompts.updateEmployee);
    //PROMPT: Enter name of Employee
    //input
    //POMPT: Select Role
    //querry db for role options(roles table.title)
    //update employee table 
};

async function viewAllRoles() {
    const roles = await Role.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(roles, null, 2)));
};

async function addRole() {
    var role = await inquirer.prompt(prompts.role);
    //PROMPT: Enter name of role
    //input
    //PROMPT: Enter salary
    //input
    //PROMPT: Enter Department
    //querry db for Department options(departments table.department_name)
    //auto create role ID
    //add employee to role table 
};

async function viewAllDepartments() {
    const departments = await Department.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(departments, null, 2)));
};

async function addDepartment() {
    var department = await inquirer.prompt(prompts.department);
    //PROMPT: Enter name of Department
    //input
    //auto create department ID
    //save input to deoartment table
};


init();