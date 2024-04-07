const User = require('../models/User');
const Employee = require('../models/Employee');

const resolvers = {
  Query: {
    fetchAllEmployees: async () => {
      const employees = await Employee.find({});
      return employees
    },
    findEmployeeById: async (_, { employeeId }) => {
      return await Employee.findById(employeeId);
    },
  },
  Mutation: {
    registerUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      await newUser.save();
      return newUser;
    },
    loginUser: async (_, { usernameOrEmail, password }) => {
      const user = await User.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        password,
      });
      return user;
    },
    createNewEmployee: async (_, employeeData) => {
      const newEmployee = new Employee(employeeData);
      await newEmployee.save();
      return {
        id: newEmployee._id.toString(),
        ...newEmployee._doc,
      };
    },
    modifyEmployeeById: async (_, { employeeId, ...updateData }) => {
      return await Employee.findByIdAndUpdate(employeeId, updateData, { new: true });
    },
    removeEmployeeById: async (_, { employeeId }) => {
      return await Employee.findByIdAndDelete(employeeId);
    },
  },
};

module.exports = resolvers;
