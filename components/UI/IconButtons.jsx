import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function IconButtons({ name, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButtons;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 8,
  },

  pressed: {
    opacity: 0.75,
  },
});
