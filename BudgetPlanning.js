import React, { useState } from 'react';

const BudgetPlanning = ({ projectName }) => {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState('');

  const handleBudgetPlanning = () => {
    // Implement your budget planning functionality here
    // For now, let's just log the budget and expenses to the console
    console.log(`Budget planning for ${projectName}:`);
    console.log(`Budget: $${budget}`);
    console.log(`Expenses: $${expenses}`);
    // Add further logic as needed, e.g., updating a database, displaying results, etc.
  };

  return (
    <div>
     
      {/* Budget Planning Form */}
      <div>
        <h4>Budget Planning for {projectName}</h4>
        <label>
          Budget:
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <br />
        <label>
          Expenses:
          <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default BudgetPlanning;
