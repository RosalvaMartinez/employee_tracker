INSERT INTO departments (id, department_name)
VALUES
    ( 1, "Finance"),
    ( 2, "Legal"),
    ( 3, "Engineering"),
    ( 4, "Sales");

SELECT * FROM departments;

INSERT INTO roles (id, title, salary, department_id)
VALUES
    ( 1, "Sales Manager", 70000, 3),
    ( 2, "Account Manager", 89000, 1),
    ( 3, "Market Manager", 120000, 4),
    (4, "Sales Person", 90000, 3),
    (5,"Engineer", 140000, 6);


SELECT * FROM roles;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    ( 1, "Goose", "Longneck", 3, NULL),
    ( 2, "Ducki", "Longbottom", 2, NULL),
    ( 3, "Whiskey", "Peets", 1, NULL),
    (4, "Pete", "Wallows", 4, 1),
    (5, "Ashley", "Peterson", 5, 2);


SELECT * FROM employees;