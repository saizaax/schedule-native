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
import { WeeksModal } from "../components/WeeksModal"
import { BlurView } from "expo-blur"
import { NoClasses } from "../components/NoClasses"
import { Tabs } from "../components/Tabs"
import { useSelector } from "react-redux"
import { selectSchedule } from "../redux/schedule/selectors"
import { ISchedule } from "../types/ISchedule"
import { selectDay } from "../redux/settings/selectors"
import { IClass } from "../types/IClass"
import { ClassCard } from "../components/ClassCard"
import { IDay } from "../types/IDay"
import { useAppDispatch } from "../redux/store"
import { setAmount } from "../redux/settings/slice"

type Props = NativeStackScreenProps<RootStackParamList, "Schedule">

export const Schedule = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()

  const schedule = useSelector(selectSchedule)
  const day = useSelector(selectDay)

  const [weeksModal, setWeeksModal] = React.useState<boolean>(false)
  const [classes, setClasses] = React.useState<IClass[]>([])

  const getTodaySchedule = (schedule: ISchedule) => {
    const today: IDay = Object.values(schedule).find(
      (value) => value.dayShort === day
    )
    setClasses(today.classes)
    dispatch(setAmount(today.classes.length))
  }

  React.useEffect(() => {
    getTodaySchedule(schedule)
  }, [day])

  const todayClasses = classes.map((item) => (
    <ClassCard
      subject={item.subject}
      type={item.type}
      number={item.number}
      timeStart={item.timeStart}
      timeEnd={item.timeEnd}
      location={item.location}
      professor={item.professor}
      isLate={false}
    />
  ))

  return (
    <Fragment>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        {/* Weeks Modal */}
        <WeeksModal isVisible={weeksModal} setIsVisible={setWeeksModal} />
        <Tabs location="schedule" navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.daySwitch}>
            <DaySwitch onPress={() => setWeeksModal(true)} />
          </View>
          {/* Schedule */}
          <ScrollView style={styles.schedule}>
            <DayInfo />
            <View style={styles.classes}>
              {classes.length ? todayClasses : <NoClasses />}
              {/* <ClassBreak minutes={30} /> */}
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
