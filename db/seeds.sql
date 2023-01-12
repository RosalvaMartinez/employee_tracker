INSERT INTO departments (id, department_name)
VALUES
    ( 1, "Finance"),
    ( 2, "Legal"),
    ( 3, "Engineering"),
    ( 4, "Sales");

SELECT * FROM departments;

INSERT INTO roles (id, title, salary, department_id)
VALUES
    ( 1, "Sales Person", 70000, 3),
    ( 2, "Account Manager", 89000, 1),
    ( 3, "Lead Engineer", 120000, 4);

SELECT * FROM roles;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    ( 1, "Goose", "Longneck", 3, 1),
    ( 2, "Ducki", "Longbottom", 2, 2),
    ( 3, "Whiskey", "Peets", 1, 3);

SELECT * FROM employees;