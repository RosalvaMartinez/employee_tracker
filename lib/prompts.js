const prompts = {
    menu: [
        {
            message: 'What would you like to do?',
            type: 'list',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            name: 'choice'
        }
    ],
    employee: [
        {
            message: 'What is the employees firs name?',
            type: 'input',
            name: 'firstName'
        },
        {
            message: 'What is the employees last name?',
            type: 'input',
            name: 'lastName'
        },
        {
            message: 'What is the employees role?',
            type: 'list',
            choices: [],
            name: 'choice'
        },
        {
            message: 'Who is the employees manager?',
            type: 'list',
            choices: [],
            name: 'managerChoice'
        }
    ],
    updateEmployee: [
        {
            message: 'Which employee do you want to update?',
            type: 'list',
            choices: [],
            name: 'choice'
        },
        {
            message: 'Which role do you want to assign to the employee?',
            type: 'list',
            choices: [],
            name: 'choice'
        }
    ],
    role: [
        {
            message: 'What is the role name?',
            type: 'input',
            name: 'role'
        },
        {
            message: 'What is the salary for that role?',
            type: 'input',
            name: 'salary'
        },
        {
            message: 'Which department does the role belong to?',
            type: 'list',
            choices: [],
            name: 'choice'
        }
    ],
    department: [
        {
            message: 'What is the department name?',
            type: 'input',
            name: 'name'
        }
    ]
}


module.exports = prompts