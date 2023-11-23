import React, { useState } from 'react';
import './Teams.css'; 
import Navbar from './Navbar';// Import your custom CSS for styling

const Teams = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team A', members: ['Member 1', 'Member 2', 'Member 3'] },
    { id: 2, name: 'Team B', members: ['Member 4', 'Member 5', 'Member 6'] },
    // Add more teams as needed
  ]);

  const [currentTeam, setCurrentTeam] = useState(null); // Selected team
  const [joinRequests, setJoinRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamMembers, setNewTeamMembers] = useState('');

  const handleJoinRequest = () => {
    if (currentTeam) {
      // Check if a similar request is already pending
      if (!pendingRequests.some((request) => request.id === currentTeam.id)) {
        // Add logic for sending join request
        setPendingRequests([...pendingRequests, currentTeam]);
      }
      setCurrentTeam(null); // Clear selected team after sending request
    }
  };

  const handleCreateTeam = (e) => {
    e.preventDefault();
    // Validate input (you can add more validation logic)
    if (newTeamName && newTeamMembers) {
      const newTeam = {
        id: teams.length + 1,
        name: newTeamName,
        members: newTeamMembers.split(',').map((member) => member.trim()),
      };
      setTeams([...teams, newTeam]);
      setNewTeamName('');
      setNewTeamMembers('');
    }
  };

  return (
    <div>
    <Navbar />
    <div>
      <h2>Your Teams</h2>
      <div className="teams-container">
        <div className={`current-team ${currentTeam ? 'active' : ''}`}>
        <h3>Current Team</h3>
          {currentTeam ? (
            <>
              <p>Team Name: {currentTeam.name}</p>
              <p>Members: {currentTeam.members.join(', ')}</p>
              {pendingRequests.some((request) => request.id === currentTeam.id) ? (
                <p className="request-status">Request Pending</p>
              ) : (
                <button onClick={handleJoinRequest}>Request to Join</button>
              )}
            </>
          ) : (
            <p>Select a team to view details.</p>
          )}
        </div>

        <div className="team-list">
        <h3>Other Teams</h3>
          {<ul>
            {teams.map((team) => (
              <li
                key={team.id}
                className={`team-item ${currentTeam && currentTeam.id === team.id ? 'selected' : ''}`}
                onClick={() => setCurrentTeam(team)}
              >
                <h4>{team.name}</h4>
                <strong>Members: {team.members.join(', ')}</strong>
              </li>
            ))}
          </ul>}
        </div>

        <div className="join-requests">
            <h3>Join Requests</h3>
          {<ul>
            {pendingRequests.map((request, index) => (
              <li key={index}>
                <p>{request.name}</p>
                <p className="request-status">Request Pending</p>
              </li>
            ))}
          </ul>}
        </div>
      </div>

      <div className="create-team-form">
        <h2>Create a New Team</h2>
        <form onSubmit={handleCreateTeam}>
          <label>
            Team Name:
            <input type="text" value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} />
          </label>
          <label>
            Team Members (comma-separated):
            <input type="text" value={newTeamMembers} onChange={(e) => setNewTeamMembers(e.target.value)} />
          </label>
          <button type="submit">Create Team</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Teams;
