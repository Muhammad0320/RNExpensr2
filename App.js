import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import RecentExpense from "./screens/RecentExpense";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen component={AllExpenses} name="AllExpenses" />
      <BottomTabs.Screen component={RecentExpense} name="RecentExpenses" />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={BottomTabsNavigator}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
