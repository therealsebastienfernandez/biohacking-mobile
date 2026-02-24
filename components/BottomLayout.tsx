import { Text, View } from "react-native";

export default function BottomLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the bottom part</Text>
    </View>
  );
}
