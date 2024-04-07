const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
  }

  type Employee {
    _id:String!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    salary: Float!
  }

  type Query {
    fetchAllEmployees: [Employee]
    findEmployeeById(eid: ID!): Employee
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(usernameOrEmail: String!, password: String!): User
    createNewEmployee(
      first_name: String!
      last_name: String!
      email: String!
      gender: String
      salary: Float!
    ): Employee
    modifyEmployeeById(
      eid: ID!
      first_name: String
      last_name: String
      email: String
      gender: String
      salary: Float
    ): Employee
    removeEmployeeById(eid: ID!): Employee
  }
`;

module.exports = typeDefs;
