import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityList from "./components/ActivityList";
import Name from "./components/Name";
import Activity from "./components/Activity";

const Stack = createStackNavigator();

export default function App() {
  //testeting
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Name">
        <Stack.Screen
          name="Name"
          component={Name}
          options={{
            title: "Home page", //Set Header Title
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{
            title: "Activity", //Set Header Title
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="ActivityList"
          component={ActivityList}
          options={{
            title: "ActivityList", //Set Header Title
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
