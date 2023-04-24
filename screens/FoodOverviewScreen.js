import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function FoodOverviewScreen({ route }) {

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter();

  return (
    <View style={styles.container}>
      <Text>Overview of Meals Screen - {catId}</Text>
    </View>
  );
}

export default FoodOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
