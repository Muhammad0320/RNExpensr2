import { Text, View } from "react-native";

function ExpenseItem({ description, date, amount }) {
  return (
    <View>
      <Text> {description} </Text>
      <Text> {date.toString()}</Text>
      <Text> {amount} </Text>
    </View>
  );
}

export default ExpenseItem;
