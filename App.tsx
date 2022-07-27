import React, { type PropsWithChildren } from "react"
import { Onboarding } from "./src/views/Onboarding"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GroupSetup } from "./src/views/GroupSetup"
import { Schedule } from "./src/views/Schedule"

export type RootStackParamList = {
  Onboarding: undefined
  GroupSetup: undefined
  Schedule: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const screenOptions = { headerShown: false }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="GroupSetup" component={GroupSetup} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
