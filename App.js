import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import RecentExpense from "./screens/RecentExpense";
import ManageExpense from "./screens/ManageExpense";
import IconButtons from "./components/UI/IconButtons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExpenseProvider } from "./store/expenseContext";

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerRight: ({ tintColor }) => (
          <IconButtons
            name="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        component={AllExpenses}
        name="AllExpenses"
        options={{
          title: "All Expenses",

          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        component={RecentExpense}
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <ExpenseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "#f1f1f1",
            }}
          >
            <Stack.Screen
              name="ExpenseOverview"
              component={BottomTabsNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseProvider>
    </>
  );
}

// Text strings must be rendered within a <Text> component.
