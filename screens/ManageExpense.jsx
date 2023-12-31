import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButtons from "../components/UI/IconButtons";
import { GlobalStyles } from "../constants/styles";
import Buttons from "../components/UI/Buttons";
import { useExpenseContext } from "../store/expenseContext";

function ManageExpense({ navigation, route }) {
  const id = route.params?.id;

  const { updateExpense, deleteExpense, addExpense } = useExpenseContext();

  const isEdit = Boolean(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEdit ? "Edit Expense" : "Add Expense" });
  }, [isEdit, navigation]);

  const handleDeleteExpense = () => {
    deleteExpense(id);

    navigation.goBack();
  };

  const handleConfirm = () => {
    if (id) {
      updateExpense(id, {
        date: new Date("2023-11-20"),
        description: "Test update",
        amount: 25.99,
      });
    } else {
      addExpense({
        date: new Date("2023-11-25"),
        description: "Test Add",
        amount: 24.89,
      });
    }

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Buttons mode="flat" onPress={handleCancel}>
          {" "}
          cancel{" "}
        </Buttons>

        <Buttons onPress={handleConfirm}>{isEdit ? "Edit" : "Add"}</Buttons>
      </View>

      {isEdit && (
        <View style={styles.iconContainer}>
          <IconButtons
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },

  iconContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopColor: GlobalStyles.colors.primary500,
    borderTopWidth: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 60,
  },
});
