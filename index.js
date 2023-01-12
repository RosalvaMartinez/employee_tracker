const inquirer = require('inquirer')
// const Employee = require('./lib/Employee');
// const Department = require('./lib/Department');
// const Roles = require('./lib/Roles');
const mysql = require('mysql2');
const sequelize = require('./config/connection.js');
const Role = require('./models/Role.js');
const Department = require('./models/Department.js');
const Employee = require('./models/Employee.js');
const prompts = require('./lib/prompts.js');
const cTable = require('console.table');
const { role } = require('./lib/prompts.js');


async function init() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    do {
        var results = await inquirer.prompt(prompts.menu);
        ////
        switch (results.choice) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                break;
        }
        ///////
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


    // create the connection to database
    // const db = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'employeelist_db',
    //     password: 'whiskey1!'
    // });

    //  emp = new Employee(67, results.firstName, results.last_name, 33, 3)
    // db.query(
    //     `INSERT INTO employee VALUES(${emp.getId()}, '${emp.getFirstName()}', '${emp.getLastName()}', ${emp.getRoleId()}, ${emp.getManagerId()})`,
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // )
    // db.query(
    //     `SELECTconst * FROM employee`,
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // );

    // emp = new Department(67, results.department_name)
    // db.query(
    //     `INSERT INTO department VALUES(${emp.getId()}, '${emp.getDepartmentName()}')`,
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // )
    // db.query(
    //     `SELECTconst * FROM department`,
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // );
};


// What would you like to do? 

// >View All Employees
// >Add Employee
// >Update Employee Role

// >View All Roles
// >Add Role

// >View All Departments
// >Add Department

// >quit

async function viewAllEmployees() {
    //present employee table
    console.log('viewAllEmployees()')
    const employees = await Employee.findAll();
    console.table(JSON.parse(JSON.stringify(employees, null, 2)));
    
};

async function addEmployee() {
    console.log("addEmployee()")
    var employee = await inquirer.prompt(prompts.employeee);
    //PROMPT: Enter employees first name
    //input 
    //PROMPT: Enter employees last name
    //input
    //PROMPT: Enter employees role
    //querry db for role options(roles table.title)
    //PROMPT: Enter employees manager
    //querry db for manager name options(employee table.title.manager)
    //auto create Employee ID
    //add employee to employee table 
};

async function updateEmployeeRole() {
    console.log("updateEmployeeRole()")
    var update = await inquirer.prompt(prompts.updateEmployee);
    //PROMPT: Enter name of Employee
    //input
    //POMPT: Select Role
    //querry db for role options(roles table.title)
    //update employee table 
};

async function viewAllRoles() {
    console.log("viewAllRoles()")
    const roles = await Role.findAll();
    console.table(JSON.parse(JSON.stringify(roles, null, 2)));

    //present roles table
};

async function addRole() {
    console.log("addRole()")
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
    console.log("viewAllDepartments()")
    const departments = await Department.findAll();
    console.table(JSON.parse(JSON.stringify(departments, null, 2)));

    //present department table
};

async function addDepartment() {
    console.log("addDepartment()")
    var department = await inquirer.prompt(prompts.department);
    //PROMPT: Enter name of Department
    //input
    //auto create department ID
    //save input to deoartment table
};


init();