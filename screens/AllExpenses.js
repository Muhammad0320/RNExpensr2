import ExpenseOutput from "../components/expense/ExpenseOutput";
import { useExpenseContext } from "../store/expenseContext";

function AllExpenses() {
  const { expenses } = useExpenseContext();

  return (
    <ExpenseOutput
      expense={expenses}
      expensePeriod="All"
      fallbackText="No registered expense found!"
    />
  );
}

export default AllExpenses;
