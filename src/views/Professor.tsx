import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native"
import React from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import { Tabs } from "../components/Tabs"

type Props = NativeStackScreenProps<RootStackParamList, "Professor">

export const Professor = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Tabs location="professor" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Coming Soon ⚡️</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F6F8FA",
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "rgba(67, 73, 93, 0.5)",
    textTransform: "uppercase",
    fontWeight: "500"
  }
})
