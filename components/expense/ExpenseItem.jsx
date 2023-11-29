import { Text } from "react-native";

function ExpenseItem({ description, date, amount }) {
  return (
    <View>
      <Text> {description} </Text>
      <Text> {date} </Text>
      <Text> {amount} </Text>
    </View>
  );
}

export default ExpenseItem;
