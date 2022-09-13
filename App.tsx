import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SlidingCounter from "./components/SlidingCounter";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            // padding: 20,
            // textAlign: "center",
          }}
        >
          Animated Sliding Counter⚡
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Drag the circle to the the plus or minus icon
        </Text>
        <SlidingCounter />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
});
