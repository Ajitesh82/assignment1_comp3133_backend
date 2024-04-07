const Employee = require('../models/Employee');

const fetchAllEmployees = async () => {
  return await Employee.find();
};

const fetchEmployeeById = async (employeeId) => {
  return await Employee.findById(employeeId);
};

const addEmployee = async (employeeData) => {
  const newEmployee = new Employee(employeeData);
  await newEmployee.save();
  return newEmployee;
};

const modifyEmployeeById = async (employeeId, updateData) => {
  return await Employee.findByIdAndUpdate(employeeId, updateData, { new: true });
};

const removeEmployeeById = async (employeeId) => {
  return await Employee.findByIdAndDelete(employeeId);
};

module.exports = {
  fetchAllEmployees,
  fetchEmployeeById,
  addEmployee,
  modifyEmployeeById,
  removeEmployeeById,
};
