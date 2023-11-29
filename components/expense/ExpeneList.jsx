import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpeneList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpeneList;
