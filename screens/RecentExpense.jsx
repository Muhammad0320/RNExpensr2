import ExpenseOutput from "../components/expense/ExpenseOutput";
import { useExpenseContext } from "../store/expenseContext";
import { calcLast7days } from "../utils/date";

function RecentExpense() {
  const { expenses } = useExpenseContext();

  const recentExpenses = expenses.filter((expense) => {
    const sevenDaysAgo = calcLast7days(new Date(), 7);

    return expense.date >= sevenDaysAgo && expense.date <= Date.now();
  });

  return <ExpenseOutput expensePeriod="Last 7 days" expense={recentExpenses} />;
}

export default RecentExpense;
