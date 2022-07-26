import React, { type PropsWithChildren } from "react"
import { Onboarding } from "./src/views/Onboarding"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GroupSetup } from "./src/views/GroupSetup"

export type RootStackParamList = {
  Onboarding: undefined
  GroupSetup: undefined
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
