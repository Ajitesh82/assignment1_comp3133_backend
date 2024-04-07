const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');
const connectToDatabase = require('./src/utils/db');
const path = require('path');
const employeeRoutes = require('./src/routes/employeeRoutes');

connectToDatabase();

const app = express();

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

async function launchServer() {
  await graphqlServer.start();

  graphqlServer.applyMiddleware({ app });

  app.use('/api', employeeRoutes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}/graphql`);
  });
}

launchServer();
