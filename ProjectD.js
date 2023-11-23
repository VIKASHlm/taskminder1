// models/project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  progress: { type: Number, default: 0 },
  budget: { type: Number, default: 0 },
  expenses: { type: Number, default: 0 },
  description: { type: String },
  deadline: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
