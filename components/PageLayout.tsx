import { View } from "react-native";
import BottomLayout from "./BottomLayout";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";

export default function PageLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderLayout />
      <MainLayout />
      <BottomLayout />
    </View>
  );
}
