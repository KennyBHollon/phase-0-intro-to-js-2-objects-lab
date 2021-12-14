// Write your solution in this file!

// First Section
 const employee = {
     name: "John Doe",
     streetAddress: "123 Imagination Ave"
 };

 function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
     
 };

 const employeeUpdate =  updateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Sam"
 );

//  Second Section
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

};

const employeeUpdate2 = destructivelyUpdateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Sam"
);
 
// Third Section
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
};

const employeeDelete = deleteFromEmployeeByKey (employee, "name");

//  Fourth Section
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

const employeeDelete2 = destructivelyDeleteFromEmployeeByKey (employee, "name");





