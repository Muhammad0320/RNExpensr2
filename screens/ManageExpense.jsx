import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ navigation, route }) {
  const { id } = route.params;

  const isEdit = Boolean(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEdit ? "Edit Expense" : "Add Expense" });
  }, [isEdit, navigation]);

  return <Text>Manage Expense comp</Text>;
}

export default ManageExpense;
