import { Text, View } from "react-native";

export default function HeaderLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the header part</Text>
    </View>
  );
}
