import React, { FC, Fragment, type PropsWithChildren } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
  day: string
  date: string
  isActive: boolean
  isFree: boolean
  onPress: () => void
}

export const Day: FC<Props> = ({ day, date, isActive, isFree, onPress }) => {
  return (
    <Fragment>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.day,
          isActive && isFree
            ? styles.dayFree
            : isActive
            ? styles.dayActive
            : styles.dayInactive,
          { opacity: pressed ? 0.8 : 1 }
        ]}
      >
        <Text
          style={[
            styles.dayName,
            isActive ? styles.dayNameActive : styles.dayNameInactive
          ]}
        >
          {day}
        </Text>
        <Text style={isFree ? styles.dateFree : styles.date}>{date}</Text>
      </Pressable>
      {day !== "СБ" ? <View style={styles.line} /> : null}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  line: {
    width: 1,
    height: 30,
    backgroundColor: "#43495D",
    opacity: 0.05
  },
  day: {
    display: "flex",
    padding: 10,
    alignItems: "center",
    borderRadius: 10
  },
  dayActive: {
    backgroundColor: "rgba(47, 130, 255, 0.1)",
    borderColor: "#2F82FF",
    borderWidth: 1
  },
  dayInactive: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1
  },
  dayFree: {
    backgroundColor: "rgba(53, 199, 114, 0.1);",
    borderColor: "#35C772",
    borderWidth: 1
  },
  dayName: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "rgba(67, 72, 92, 0.7)"
  },
  dayNameActive: {
    color: "#43495D"
  },
  dayNameInactive: {
    color: "rgba(67, 72, 92, 0.7)"
  },
  date: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    color: "#2F82FF"
  },
  dateFree: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    color: "#35C772"
  }
})
