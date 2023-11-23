import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
// Import your custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Project Management Tool!</h2>
      <p className="home-description">Explore the features:</p>
      <div className="features">
        <Link to="/Project" className="feature-link">
          <span>View Projects</span>
        </Link>

        <Link to="/Task" className="feature-link">
          <span>Manage Tasks</span>
        </Link>

        <Link to="/Team" className="feature-link">
          <span>View Team</span>
        </Link>

        <Link to="/Report" className="feature-link">
          <span>Generate Reports</span>
        </Link>
        
      </div>

      <div className="feature-details">
        <div className="feature-detail">
          <h3>View Projects</h3>
          <p>Explore your ongoing projects, track progress, and collaborate with team members.</p>
        </div>
        <div className="feature-detail">
          <h3>Manage Tasks</h3>
          <p>Create, assign, and track tasks efficiently to ensure project milestones are met.</p>
        </div>
        <div className="feature-detail">
          <h3>View Team</h3>
          <p>See your team members, their roles, and collaborate seamlessly within your projects.</p>
        </div>
        <div className="feature-detail">
          <h3>Generate Reports</h3>
          <p>Generate insightful reports to analyze project performance and make informed decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
