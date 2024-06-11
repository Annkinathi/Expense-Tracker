// src/ExpenseList.tsx
import React from 'react';
import './ExpenseList.css';

interface Expense {
  description: string;
  amount: string;
  date: string; // Add date property
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <span className="description">{expense.description}</span>
            <span className="amount">${expense.amount}</span>
            <span className="date">{expense.date}</span> {/* Display date */}
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;
