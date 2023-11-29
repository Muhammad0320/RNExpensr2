import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { dateFormatter } from "../../utils/date";

import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ description, date, amount, id }) {
  const navigation = useNavigation();

  const onPressExpense = () => {
    navigation.navigate("ManageExpense", { id });
  };

  return (
    <Pressable
      onPress={onPressExpense}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.textBase, styles.description]}>
            {" "}
            {description}{" "}
          </Text>
          <Text style={styles.textBase}> {dateFormatter(date)}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}> ${amount.toFixed(2)} </Text>
        </View>
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
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pressed: { opacity: 0.75, overflow: "hidden" },

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
    minWidth: 80,
  },

  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
