import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  KeyboardAvoidingView,
  ScrollView
} from "react-native"
import React from "react"
import { Button } from "../components/Button"

import { logoImage } from "../../assets"
import { groupsImage } from "../../assets"
import { HelpScreen } from "../components/HelpScreen"
import { GroupInput } from "../components/GroupInput"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"

type Props = NativeStackScreenProps<RootStackParamList, "GroupSetup">

export const GroupSetup = ({ navigation }: Props) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = React.useState(false)

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        <ScrollView style={styles.container} scrollEnabled={isKeyboardVisible}>
          <Image source={logoImage} style={styles.logo} />
          <HelpScreen imageUrl={groupsImage} />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>🧑‍💻 Введите вашу учебную группу</Text>
            <GroupInput
              onFocus={() => setIsKeyboardVisible(true)}
              onBlur={() => setIsKeyboardVisible(false)}
              placeholder={"ИКБО-13-19"}
            />
            <Button
              text="Подтвердить"
              onPress={() => {}}
              styles={{ marginTop: 20 }}
              type="primary"
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Не можете найти вашу группу?</Text>
              <Text
                style={styles.textPrimary}
                onPress={() => Linking.openURL("http://google.com")}
              >
                Напишите нам 😉
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F6F8FA",
    flex: 1
  },
  container: { flex: 1, backgroundColor: "#F6F8FA", paddingHorizontal: 25 },
  logo: {
    width: 126,
    height: 36,
    resizeMode: "cover"
  },
  inputContainer: {
    paddingVertical: 40
  },
  label: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: "#717A98"
  },
  textContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#717A98"
  },
  textPrimary: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#2F82FF"
  }
})
