const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ajitesh82:Qwerty@1234@cluster0.lzbuvud.mongodb.net/';

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;