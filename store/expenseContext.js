import { createContext, useContext, useReducer } from "react";

const ExpenseContext = createContext({
  addExpense: ({ date, description, amount }) => {},

  deleteExpense: (id) => {},

  updateExpense: (id, { date, description, amount }) => {},
});

const DUMMY_DATA = [
  {
    id: "e1",
    amount: 12.99,
    description: "A pair of glasses",
    date: new Date("2022-11-22"),
  },

  {
    id: "e2",
    amount: 12.99,
    description: "A pair of glasses",
    date: new Date("2023-9-23"),
  },

  {
    id: "e3",
    amount: 5.99,
    description: "Banana",
    date: new Date("2023-11-25"),
  },

  {
    id: "e4",
    amount: 22.99,
    description: "A pair of shoe",
    date: new Date("2023-10-12"),
  },

  {
    id: "e5",
    amount: 16.99,
    description: "A Book",
    date: new Date("2023-11-10"),
  },
];

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date() + Math.random();

      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const expenseItem = state[expenseIndex];

      const updatedExpense = { ...expenseItem, ...action.payload.data };

      const updatedState = [...state];

      updatedState[expenseIndex] = updatedExpense;

      return updatedState;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      [...state];
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, DUMMY_DATA);

  const addExpense = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expense) => {
    dispatch({ type: "UPDATE", payload: { id, data: expense } });
  };

  const values = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpenseContext.Provider value={values}>
      {" "}
      {children}{" "}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  if (!context)
    throw new Error(" Expense context was used outside expense provider ");

  return context;
};
