const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', async (request, response) => {
  const employees = await employeeController.fetchAllEmployees();
  response.json(employees);
});

router.get('/employees/:employeeId', async (request, response) => {
  const employee = await employeeController.fetchEmployeeById(request.params.employeeId);
  response.json(employee);
});

router.post('/employees', async (request, response) => {
  const newEmployee = await employeeController.addEmployee(request.body);
  response.json(newEmployee);
});

router.put('/employees/:employeeId', async (request, response) => {
  const updatedEmployee = await employeeController.modifyEmployeeById(
    request.params.employeeId,
    request.body
  );
  response.json(updatedEmployee);
});

router.delete('/employees/:employeeId', async (request, response) => {
  const deletedEmployee = await employeeController.removeEmployeeById(
    request.params.employeeId
  );
  response.json(deletedEmployee);
});

module.exports = router;
