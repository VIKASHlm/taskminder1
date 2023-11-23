import React, { useState } from 'react';
import './Task.css'; 
import Navbar from './Navbar';// Import your custom CSS for styling

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', priority: 'High', status: 'Running' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', priority: 'Medium', status: 'To be done' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', priority: 'Low', status: 'Finished' },
    // Add more tasks as needed
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Low'); // Default priority
  const [newTaskStatus, setNewTaskStatus] = useState('To be done'); // Default status

  const handleCreateTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      priority: newTaskPriority,
      status: newTaskStatus,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskPriority('Low');
    setNewTaskStatus('To be done');
  };

  // Sort tasks by priority (High > Medium > Low)
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div>
    <Navbar />
    <div className="tasks-container">
      <div className="tasks-list">
        <h2>Your Tasks</h2>
        <ul>
          {sortedTasks.map((task) => (
            <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="create-task">
        <h2>Create a New Task</h2>
        <label>
          Title:
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Priority:
          <select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />
        <label>
          Status:
          <select
            value={newTaskStatus}
            onChange={(e) => setNewTaskStatus(e.target.value)}
          >
            <option value="To be done">To be done</option>
            <option value="Running">Running</option>
            <option value="Finished">Finished</option>
          </select>
        </label>
        <br />
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
    </div>
    </div>
  );
};

export default Tasks;
