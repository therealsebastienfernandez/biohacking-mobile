import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Today() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pour ce jour-ci</Text>
      <Link href="/dashboard" asChild>
        <Pressable>
          <Text>Votre Dashboard</Text>
        </Pressable>
      </Link>
    </View>
  );
}
