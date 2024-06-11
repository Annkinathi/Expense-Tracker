// src/ExpenseInput.tsx
import React, { useState } from 'react';
import './ExpenseInput.css';

const ExpenseInput: React.FC<{ addExpense: (expense: { description: string; amount: string; date: string }) => void }> = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount) {
      addExpense({ description, amount, date: new Date().toLocaleString() });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-input">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseInput;
