import { Text, View } from "react-native";

function ExpenseSummary({ period, expenses }) {
  const totalExpensesPrice = expenses.reduce((acc, sum) => acc + sum.amount, 0);

  return (
    <View>
      <Text> {period} </Text>
      <Text> ${totalExpensesPrice.toFixed(2)} </Text>
    </View>
  );
}

export default ExpenseSummary;
