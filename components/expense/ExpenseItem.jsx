import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ description, date, amount }) {
  return (
    <Pressable>
      <View>
        <Text> {description} </Text>
        <Text> {date.toString()}</Text>
        <Text> {amount} </Text>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 6,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray700,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.4,
    borderRadius: 6,
    marginVertical: 8,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textContainer: {
    rowGap: 3,
  },

  textBase: {
    color: GlobalStyles.colors.primary50,
  },

  description: {
    fontWeight: "bold",
    fontSize: 18,
  },

  amountContainer: {
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});