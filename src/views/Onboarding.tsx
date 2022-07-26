import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import React, { Fragment } from "react"
import { Banner } from "../components/OnboardingBanner"
import { Button } from "../components/Button"

import { onboardingImage } from "../../assets"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">

export const Onboarding = ({ navigation }: Props) => {
  return (
    <Fragment>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Banner imageUrl={onboardingImage} />
          <View style={styles.onboardingTextContainer}>
            <Text style={styles.onboardingHeader}>
              Следите за расписанием ✨
            </Text>
            <Text style={styles.onboardingDescription}>
              Отслеживайте расписание лекций и семинаров онлайн
            </Text>
            <Button
              text="Далее"
              onPress={() => navigation.navigate("GroupSetup")}
              styles={{ marginTop: 20 }}
              type="primary"
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: "#2F82FF"
  },
  safeArea: {
    backgroundColor: "#F6F8FA",
    flex: 1
  },
  container: { flex: 1, backgroundColor: "#F6F8FA" },
  onboardingTextContainer: {
    padding: 40,
    paddingBottom: 10
  },
  onboardingHeader: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 41,
    color: "#43495D",
    margin: 0
  },
  onboardingDescription: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "500",
    color: "#43495D",
    opacity: 0.75,
    marginTop: 20
  }
})
