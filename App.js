import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodCategoryScreen from "./screens/FoodCategoryScreen";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";

const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <NavStack.Navigator>
          <NavStack.Screen
            name="FoodCategories"
            component={FoodCategoryScreen}
          />
          <NavStack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        </NavStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
