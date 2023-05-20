import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderScreen } from "./screens/OrderScreen";
import { Other } from "./screens/Other";
import { registerTranslation } from "react-native-paper-dates";
//svg
import Profile from "../assets/svg/profile.svg";
import Search from "../assets/svg/search.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import Chat from "../assets/svg/chat.svg";
import More from "../assets/svg/more.svg";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Mulish_light: require("../assets/fonts/Mulish_Light.ttf"),
    Mulish_regular: require("../assets/fonts/Mulish_Regular.ttf"),
    Mulish_medium: require("../assets/fonts/Mulish_Medium.ttf"),
    Mulish_bold: require("../assets/fonts/Mulish_Bold.ttf"),
  });

  registerTranslation("uk", {
    save: "Зберегти",
    selectSingle: "Виберіть дату",
    selectMultiple: "Виберіть дати",
    selectRange: "Оберіть період",
    notAccordingToDateFormat: (inputFormat) =>
      `Формат дати має бути ${inputFormat}`,
    mustBeHigherThan: (date) => `Має бути пізніше чим ${date}`,
    mustBeLowerThan: (date) => `Має бути раніше чим ${date}`,
    mustBeBetween: (startDate, endDate) =>
      `Має бути в діапазоні між ${startDate} - ${endDate}`,
    dateIsDisabled: "День не дозволений",
    previous: "Раніше",
    next: "Наступне",
    typeInDate: "Type in date",
    pickDateFromCalendar: "Виберіть дату у календарі",
    close: "Закрити",
  });

  const TabNav = createBottomTabNavigator();

  if (!fontsLoaded && !error) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
      tabBar: "#ffffff",
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <TabNav.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 71, paddingHorizontal: 40 },
        }}
      >
        <TabNav.Screen
          options={{
            headerShown: false,
            tabBarIcon: (focused, color, size) => <Profile />,
          }}
          name="Profile"
          component={Other}
        />
        <TabNav.Screen
          options={{
            headerShown: false,
            tabBarIcon: (focused, color, size) => <Search />,
          }}
          name="Search"
          component={Other}
        />
        <TabNav.Screen
          options={{
            headerShown: false,
            tabBarIcon: (focused, color, size) => <Dashboard />,
          }}
          name="Dashboard"
          component={OrderScreen}
        />
        <TabNav.Screen
          options={{
            headerShown: false,
            tabBarIcon: (focused, color, size) => <Chat />,
          }}
          name="Chat"
          component={Other}
        />
        <TabNav.Screen
          options={{
            headerShown: false,
            tabBarIcon: (focused, color, size) => <More />,
          }}
          name="More"
          component={Other}
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}
