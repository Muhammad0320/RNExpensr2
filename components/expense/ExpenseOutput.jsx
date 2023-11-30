import { StyleSheet, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpeneList from "./ExpeneList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expense, expensePeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expense} period={expensePeriod} />
      <ExpeneList expenses={expense} />
    </View>
  );
}

export default ExpenseOutput;

// https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=d95f852c&app_key=b32c5195be87cc5809fa6281307f333c&type=public

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    rowGap: 8,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
