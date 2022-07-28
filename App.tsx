import React from "react"
import { Onboarding } from "./src/views/Onboarding"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GroupSetup } from "./src/views/GroupSetup"
import { Schedule } from "./src/views/Schedule"
import { Location } from "./src/views/Location"
import { Semester } from "./src/views/Semester"
import { Professor } from "./src/views/Professor"
import { Settings } from "./src/views/Settings"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"

export type RootStackParamList = {
  Onboarding: undefined
  GroupSetup: undefined
  Schedule: undefined
  Location: undefined
  Semester: undefined
  Professor: undefined
  Settings: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const screenOptions = { headerShown: false }

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="GroupSetup" component={GroupSetup} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Semester" component={Semester} />
          <Stack.Screen name="Professor" component={Professor} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
