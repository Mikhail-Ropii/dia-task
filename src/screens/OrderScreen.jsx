import { createStackNavigator } from "@react-navigation/stack";

import { OrderTransFirst } from "./nestedScreens/OrderTransFirst";
import { OrderTransSecond } from "./nestedScreens/OrderTransSecond";

export const OrderScreen = ({ navigation }) => {
  const NestedScreen = createStackNavigator();

  const headerTitleStyle = {
    fontFamily: "Mulish_regular",
    fontWeight: 700,
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
