const prompts = {
    menu: [
        {
            message: 'What would you like to do?',
            type: 'list',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            name: 'choice'
        }
    ],
}


module.exports = prompts