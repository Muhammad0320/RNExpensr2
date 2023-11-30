import { createContext, useReducer } from "react";
import { DUMMY_DATA } from "../components/expense/ExpenseOutput";

const ExpenseContext = createContext({
  addExpense: ({ date, description, amount }) => {},

  deleteExpense: (id) => {},

  updateExpense: (id, { date, description, amount }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const id = new Date() + Math.random();

      return [{ ...action.payload, id }, ...state];
    case UPDATE:
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const expenseItem = state[expenseIndex];

      const updatedExpense = { ...expenseItem, ...action.payload.data };

      const updatedState = [...state];

      updatedState[expenseIndex] = updatedExpense;

      return updatedState;

    case DELETE:
      return state.filter((expense) => expense.id !== action.payload);

    default:
      [...state];
  }
};

const ExpensePrivider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expense) => {
    dispatch({ type: "UPDATE", payload: { id, data: expense } });
  };

  <ExpenseContext.Provider> {children} </ExpenseContext.Provider>;
};
