function init() {
    
}


What would you like to do? 

>View All Employees
>Add Employee
>Update Employee Role

>View All Roles
>Add Role

>View All Departments
>Add Department

>quit

function viewALLEmployees() {
//present employee table
};

function addEmployee() {
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

function updateEmployeeRole() {
//PROMPT: Enter name of Employee
//input
//POMPT: Select Role
//querry db for role options(roles table.title)
//update employee table 
};

function viewAllRoles() {
//present roles table
};

function addRole() {
//PROMPT: Enter name of role
//input
//PROMPT: Enter salary
//input
//PROMPT: Enter Department
//querry db for Department options(departments table.department_name)
//auto create role ID
//add employee to role table 
};

function viewAllDepartments() {
//present department table
};

function addDepartment() {
//PROMPT: Enter name of Department
//input
//auto create department ID
//save input to deoartment table
};