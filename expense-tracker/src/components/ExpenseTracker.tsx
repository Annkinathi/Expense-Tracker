// src/ExpenseTracker.tsx
import React, { useState } from 'react';
import ExpenseInput from './ExpenseInput';
import ExpenseList from './ExpenseList';
import ExpenseHeader from './ExpenseHeader';
import ExpenseFooter from './ExpenseFooter';
import './ExpenseTracker.css';

interface Expense {
  description: string;
  amount: string;
  date: string; // Add date property
}

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const getTotal = () => {
    return expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0).toFixed(2);
  };

  return (
    <div className="expense-tracker">
      <ExpenseHeader />
      <ExpenseInput addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <h2>Total: ${getTotal()}</h2>
      <ExpenseFooter />
    </div>
  );
};

export default ExpenseTracker;
