import { StyleSheet, View } from "react-native"
import React, { FC } from "react"
import { ClassSubject } from "./ClassSubject"
import { ClassProfessor } from "./ClassProfessor"
import { ClassType } from "./ClassType"
import { ClassNumber } from "./ClassNumber"
import { ClassTime } from "./ClassTime"
import { ClassLocation } from "./ClassLocation"
import Animated, { BounceInDown, FadeInDown } from "react-native-reanimated"

type Props = {
  subject: string
  professor: string
  type: string
  number: number
  timeStart: string
  timeEnd: string
  location: string
  isLate: boolean
  index: number
}

export const ClassCard: FC<Props> = ({
  subject,
  professor,
  type,
  number,
  timeStart,
  timeEnd,
  location,
  isLate,
  index
}) => {
  return (
    <Animated.View
      style={styles.item}
      entering={FadeInDown.delay(index * 85).springify()}
    >
      <View style={styles.card}>
        <ClassSubject name={subject} />
        <View style={styles.symbols}>
          <ClassTime start={timeStart} end={timeEnd} />
          <ClassLocation location={location} />
        </View>
        <View style={styles.symbols}>
          <ClassProfessor professor={professor} />
        </View>
      </View>
      <View style={styles.info}>
        <ClassType name={type} isLate={isLate} />
        <ClassNumber number={number} />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 11,
    marginTop: 15
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 32,
    borderRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.025)"
  },
  info: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    paddingHorizontal: 25
  },
  symbols: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  }
})
