// Write your solution in this file!
const employee = {
    name: "Mimi Mkenya",
    streetAddress: "343355"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newObj = {...employee};
    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}