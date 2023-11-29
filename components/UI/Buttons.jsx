import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Buttons({ children, mode, style, onPress }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.container, mode === "flat" && styles.flat]}>
          <Text style={[styles.btnText, mode === "flat" && styles.btnFlat]}>
            {" "}
            {children}{" "}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    overflow: "hidden",
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  flat: {
    backgroundColor: "transparent",
  },

  btnText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },

  btnFlat: {
    color: GlobalStyles.colors.primary200,
  },

  pressed: {
    backgroundColor: GlobalStyles.colors.primary100,
    overflow: "hidden",
    borderRadius: 6,
  },
});
