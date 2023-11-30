import { createContext } from "react";

const ExpenseContext = createContext({
  addExpense: ({ date, description, amount }) => {},

  deleteExpense: (id) => {},

  updateExpense: (id, { date, description, amount }) => {},
});
