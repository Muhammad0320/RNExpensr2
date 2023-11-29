import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function ManageExpense({ navigation, route }) {
  const id = route.params?.id;

  const isEdit = Boolean(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEdit ? "Edit Expense" : "Add Expense" });
  }, [isEdit, navigation]);

  return <View></View>;
}

export default ManageExpense;
