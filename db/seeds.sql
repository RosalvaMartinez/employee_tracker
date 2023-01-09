INSERT INTO department (id, department_name)
VALUES
    ( 1, "Finance"),
    ( 2, "Legal"),
    ( 3, "Engineering"),
    ( 4, "Sales");

SELECT * FROM department;

INSERT INTO roles (id, title, salary, department_id)
VALUES
    ( 1, "Sales Person", 70,000, 3),
    ( 2, "Account Manager", 89,000, 1),
    ( 3, "Lead Engineer", 120,000, 4);

SELECT * FROM roles;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    ( 1, "Goose", "Longneck", 3),
    ( 2, "Ducki", "Longbottom", 2),
    ( 3, "Whiskey", "Peets", 1);

SELECT * FROM employee;