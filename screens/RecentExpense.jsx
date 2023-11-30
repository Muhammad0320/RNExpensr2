import { calcLast7days } from "../utils/date";
import { useExpenseContext } from "../store/expenseContext";
import ExpenseOutput from "../components/expense/ExpenseOutput";

function RecentExpense() {
  const { expenses } = useExpenseContext();

  const recentExpenses = expenses.filter((expense) => {
    const sevenDaysAgo = calcLast7days(new Date(), 7);

    return expense.date >= sevenDaysAgo && expense.date <= Date.now();
  });

  return (
    <ExpenseOutput
      expensePeriod="Last 7 days"
      expense={recentExpenses}
      fallbackText="No registered expesne for the past 7 days"
    />
  );
}

export default RecentExpense;
