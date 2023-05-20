import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { OrderTransFirst } from "./nestedScreens/OrderTransFirst";
import { OrderTransSecond } from "./nestedScreens/OrderTransSecond";
import { FontFamily } from "../../GlobalStyles";

export const OrderScreen = () => {
  const NestedScreen = createStackNavigator();

  const headerTitleStyle = {
    fontFamily: FontFamily.bold,
    fontSize: 24,
    lineHeight: 30,
  };

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="OrderTransFirst"
        component={OrderTransFirst}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: headerTitleStyle,
          headerTitle: "Замовити",
        }}
      />
      <NestedScreen.Screen
        name="OrderTransSecond"
        component={OrderTransSecond}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: headerTitleStyle,
          headerTitle: "Дані замовлення",
        }}
      />
    </NestedScreen.Navigator>
  );
};
