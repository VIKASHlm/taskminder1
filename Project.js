import React, { useState } from 'react';
import './Project.css';
import Navbar from './Navbar';
import axios from 'axios';


const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project A',
      progress: 30,
      budget: 5000,
      expenses: 2000,
      description: 'This is the description of the sample project called project A. Here the the details of the projects is displayed',
      deadline: '2023-12-31',
    },
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    deadline: '',
  });

  const handleCreateProject = () => {
    const newProjectData = {
      id: projects.length + 1,
      name: newProject.name,
      progress: 0,
      budget: 1000,
      expenses: 458,
      description: newProject.description,
      deadline: newProject.deadline,
    };
    setProjects([...projects, newProjectData]);
    setNewProject({ name: '', description: '', deadline: '' });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getProjectColor = (deadline) => {
    const today = new Date();
    const projectDeadline = new Date(deadline);

    if (projectDeadline < today) {
      return 'red';
    } else if (projectDeadline <= new Date(today.getFullYear(), today.getMonth() + 1, today.getDate() + 7)) {
      return 'blue';
    } else {
      return 'green';
    }
  };

  // ... (previous code)

const handledCreateProject = async () => {
  try {
    const response = await axios.post('http://localhost:5000/createProject', newProject);
    if (response.data.success) {
      // Update the local state with the new project from the response
      setProjects([...projects, response.data.project]);
      setNewProject({ name: '', description: '', deadline: '' });
    } else {
      console.error('Error creating project:', response.data.message);
    }
  } catch (error) {
    console.error('Create project error:', error.message);
  }
};

// ... (remaining code)


  return (
    <div>
      <Navbar />
      <div className="projects-container">
        <h2 className="header">Your Projects</h2>

        <ul className="project-list">
          {projects.map((project) => (
            <li
              key={project.id}
              className="project-item"
              style={{ borderLeft: `10px solid ${getProjectColor(project.deadline)}` }}
            >
              <div className="project-details">
                <span className="project-name">{project.name}</span>
                <span className="project-progress">--{project.progress}% Completed</span>
                <span className="project-deadline" style={{ color: getProjectColor(project.deadline) }}>
                  Deadline: {formatDate(project.deadline)}
                </span>
                <p className="project-description">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="create-project">
          <h3 className="header">Create a New Project</h3>
          <input
            type="text"
            placeholder="Enter project name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder="Enter project description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="input"
          />
          <input
            type="date"
            placeholder="Enter project deadline"
            value={newProject.deadline}
            onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
            className="input"
          />
           <button onClick={handledCreateProject} className="button">
            Save
          </button>
          <button onClick={handleCreateProject} className="button">
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
