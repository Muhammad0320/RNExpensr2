import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpeneList from "./ExpeneList";

function ExpenseOutput({ expense, expensePeriod }) {
  return (
    <View>
      <ExpenseSummary expenses={expense} period={expensePeriod} />
      <ExpeneList />
    </View>
  );
}

export default ExpenseOutput;
