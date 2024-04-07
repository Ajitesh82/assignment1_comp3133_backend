const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ajitesh82:Qwerty@1234@cluster0.lzbuvud.mongodb.net/';

const connectDB =  () => {
  mongoose.connect('mongodb+srv://root:TOb8asod34UApwJT@cluster0.1ly2v5i.mongodb.net/comp3133_assigment1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

  };
  
  module.exports = connectDB;