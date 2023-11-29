import { StyleSheet, View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpeneList from "./ExpeneList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_DATA = [
  {
    id: "e1",
    amount: 12.99,
    description: "A pair of glasses",
    date: new Date("22-11-2022"),
  },

  {
    id: "e2",
    amount: 12.99,
    description: "A pair of glasses",
    date: new Date("23-9-2023"),
  },

  {
    id: "e3",
    amount: 5.99,
    description: "Banana",
    date: new Date("25-11-2023"),
  },

  {
    id: "e4",
    amount: 22.99,
    description: "A pair of shoe",
    date: new Date("12-10-2023"),
  },

  {
    id: "e5",
    amount: 16.99,
    description: "A Book",
    date: new Date("10-11-2023"),
  },
];

function ExpenseOutput({ expense, expensePeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_DATA} period={expensePeriod} />
      <ExpeneList expenses={DUMMY_DATA} />
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
