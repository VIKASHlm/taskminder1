const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./Models/User'); // Import the User model
const Project = require('./Models/ProjectD');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event handling for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Event handling for connection error
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: false, message: 'User Already exists' });
    } else {
      try {
        const newUser = new User({ username, password });
        if (newUser){
        await newUser.save(); // Use save() method to add a new user
        
        res.json({ success: true, message: 'User created successfully' });
        }
    
      } catch (error) {
        res.status(500).json({ success: false, message: `Error creating user${error}` });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error during login' });
  }

 
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error during login' });
  }
});

app.post('/Project', async (req, res) => {
  const newProjectData = req.body;
  console.log('Received project data:', newProjectData);

  try {
    const existingProject = await Project.findOne({ name: newProjectData.name });
    
    if (existingProject) {
      res.json({ success: false, message: 'Project with the same name already exists' });
    } else {
      const newProject = new Project(newProjectData);
      await newProject.save();
      
      res.json({ success: true, message: 'Project created successfully', project: newProject });
    }
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ success: false, message: `Error creating project: ${error.message}` });
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
