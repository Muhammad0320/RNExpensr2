import { Text } from "react-native";
import ExpenseOutput from "../components/expense/ExpenseOutput";

function RecentExpense() {
  return <ExpenseOutput expensePeriod="Last 7 days" />;
}

export default RecentExpense;
