import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpeneList from "./ExpeneList";

function ExpenseOutput({ expense }) {
  return (
    <View>
      <ExpenseSummary />
      <ExpeneList />
    </View>
  );
}

export default ExpenseOutput;
