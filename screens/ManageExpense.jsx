import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButtons from "../components/UI/IconButtons";
import { GlobalStyles } from "../constants/styles";
import Buttons from "../components/UI/Buttons";

function ManageExpense({ navigation, route }) {
  const id = route.params?.id;

  const isEdit = Boolean(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEdit ? "Edit Expense" : "Add Expense" });
  }, [isEdit, navigation]);

  const handleDeleteExpense = () => {};

  const handleConfirm = () => {};

  const handleCancel = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Buttons mode="flat" onPress={handleCancel}>
          {" "}
          cancel{" "}
        </Buttons>

        <Buttons onPress={handleConfirm}> {isEdit ? "Edit" : "Add"} </Buttons>
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
  },

  buttonContainer: {
    flexDirection: "row",
    columnGap: 50,
  },
});
