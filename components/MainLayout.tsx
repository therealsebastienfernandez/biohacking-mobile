import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function MainLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is main part</Text>
      <Slot />
    </View>
  );
}
