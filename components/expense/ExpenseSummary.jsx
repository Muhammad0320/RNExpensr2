import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseSummary({ period, expenses }) {
  const totalExpensesPrice = expenses.reduce((acc, sum) => acc + sum.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}> {period} </Text>
      <Text style={styles.amount}> ${totalExpensesPrice.toFixed(2)} </Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  period: {
    fontSize: 13,
    color: GlobalStyles.colors.primary400,
  },

  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
