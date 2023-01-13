const inquirer = require('inquirer')
const mysql = require('mysql2');
const sequelize = require('./config/connection.js');
const Role = require('./models/Role.js');
const Department = require('./models/Department.js');
const Employee = require('./models/Employee.js');
const prompts = require('./lib/prompts.js');
const cTable = require('console.table');


async function init() {
    //error check!
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    do {
        //PROMPT: menu list of options
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
        //keep showing menu choices until "Quit" is chosen
    } while (results.choice !== "Quit")
    console.log("exiting program");
};

//Shows Employees table
async function viewAllEmployees() {
    const employees = await Employee.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(employees, null, 2)));

};

//Adds a new Employee with a new role
async function addEmployee() {
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

//Updates chosen employees role and saves to db
async function updateEmployeeRole() {
    //PROMPT: Enter name of Employee
    //input
    //POMPT: Select Role
    //querry db for role options(roles table.title)
    //update employee table 
    var employees = await Employee.findAll();
    employees = JSON.parse(JSON.stringify(employees, null, 2));
    prompts.updateEmployee[0].choices = employees.map(employee => { return employee.first_name + ' ' + employee.last_name})
    var roles = await Role.findAll();
    roles = JSON.parse(JSON.stringify(roles, null, 2));
    prompts.updateEmployee[1].choices = roles.map(role => { return role.title })
    var update = await inquirer.prompt(prompts.updateEmployee);
    var employeeId = employees.filter(employee => employee.first_name + ' ' + employee.last_name === update.employee)
    var roleId = roles.filter(role => role.title === update.role)
    const newUpdate = await Employee.update({ role_id: roleId[0].id }, { 
        where: {
            id: employeeId[0].id
        }
     });

};

//Presents Roles table
async function viewAllRoles() {
    const roles = await Role.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(roles, null, 2)));
};

//Adds a new role
async function addRole() {
    //PROMPT: Enter name of role
    //input
    //PROMPT: Enter salary
    //input
    //PROMPT: Enter Department
    //querry db for Department options(departments table.department_name)
    //auto create role ID
    //add employee to role table 
    var departments = await Department.findAll();
    departments = JSON.parse(JSON.stringify(departments, null, 2));
    prompts.role[2].choices = departments.map(department => { return department.department_name })
    var role = await inquirer.prompt(prompts.role);
    var departmentId = departments.filter(department => department.department_name === role.choice)
    const newRole = await Role.create({ title: role.role, salary: role.salary, department_id: departmentId[0].id }); 
};

//present department table
async function viewAllDepartments() {
    const departments = await Department.findAll();
    //adds new line in terminal
    console.log('');
    console.table(JSON.parse(JSON.stringify(departments, null, 2)));
};


async function addDepartment() {
    //PROMPT: Enter name of Department
    //input
    //auto create department ID
    //save input to deoartment table
    var department = await inquirer.prompt(prompts.department);
    const newDepartment = await Department.create({department_name: department.name});
};


init();