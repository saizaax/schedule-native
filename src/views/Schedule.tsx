import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View
} from "react-native"
import React, { Fragment } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import { DaySwitch } from "../components/DaySwitch"
import { DayInfo } from "../components/DayInfo"
import { ClassCard } from "../components/ClassCard"
import { ClassBreak } from "../components/ClassBreak"
import { WeeksModal } from "../components/WeeksModal"
import { BlurView } from "expo-blur"
import { NoClasses } from "../components/NoClasses"

type Props = NativeStackScreenProps<RootStackParamList, "Schedule">

export const Schedule = ({ navigation }: Props) => {
  const [weeksModal, setWeeksModal] = React.useState<boolean>(false)

  return (
    <Fragment>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        {/* Weeks Modal */}
        <WeeksModal isVisible={weeksModal} setIsVisible={setWeeksModal} />
        <View style={styles.container}>
          <View style={styles.daySwitch}>
            <DaySwitch onPress={() => setWeeksModal(true)} />
          </View>
          {/* Schedule */}
          <ScrollView style={styles.schedule}>
            <DayInfo
              day={"Суббота"}
              date={"27.04.22"}
              amount={0}
            />
            <View style={styles.classes}>
              <NoClasses />
              
              {/* <ClassCard
                subject="Математический анализ и линейная алгебра"
                type="Лекция"
                number={2}
                timeStart="10:40"
                timeEnd="12:10"
                location="A12"
                professor="Смоленцева Т.Е."
                isLate={true}
              />
              <ClassBreak minutes={30} />
              <ClassCard
                subject="Математический анализ и линейная алгебра"
                type="Лекция"
                number={2}
                timeStart="10:40"
                timeEnd="12:10"
                location="A12"
                professor="Смоленцева Т.Е."
                isLate={true}
              />
              <ClassCard
                subject="Математический анализ и линейная алгебра"
                type="Лекция"
                number={2}
                timeStart="10:40"
                timeEnd="12:10"
                location="A12"
                professor="Смоленцева Т.Е."
                isLate={true}
              />
              <ClassCard
                subject="Математический анализ и линейная алгебра"
                type="Лекция"
                number={2}
                timeStart="10:40"
                timeEnd="12:10"
                location="A12"
                professor="Смоленцева Т.Е."
                isLate={true}
              /> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      {weeksModal ? (
        <BlurView intensity={10} style={styles.overlayView} />
      ) : null}
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
  daySwitch: {
    display: "flex",
    backgroundColor: "#2F82FF",
    paddingHorizontal: 25,
    paddingBottom: 30
  },
  schedule: {
    flex: 1,
    display: "flex",
    paddingTop: 25
  },
  classes: {
    display: "flex",
    paddingTop: 7.5,
    paddingBottom: 25,
    paddingHorizontal: 25
  },
  overlayView: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  }
})
