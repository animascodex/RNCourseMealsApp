import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodCategoryScreen from "./screens/FoodCategoryScreen";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";

const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <NavStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <NavStack.Screen
            name="FoodCategories"
            component={FoodCategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <NavStack.Screen
            name="FoodOverview"
            component={FoodOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <NavStack.Screen name="FoodDetail" component={FoodDetailScreen} />
        </NavStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
