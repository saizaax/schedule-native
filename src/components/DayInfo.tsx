import { StyleSheet, Text, View } from "react-native"
import React, { FC, Fragment } from "react"
import { getClassesAmount } from "../utils/getClassesAmount"

type Props = {
  day: string
  date: string
  amount: number
}

export const DayInfo: FC<Props> = ({ day, date, amount }) => {
  return (
    <View style={styles.dayInfoContainer}>
      <View style={amount ? styles.dayStatus : styles.dayStatusFree} />
      <Text style={styles.dayInfoText}>{day}</Text>
      <View style={styles.dayInfoSeparator} />
      <Text style={styles.dayInfoText}>{date}</Text>
      {amount ? (
        <Fragment>
          <View style={styles.dayInfoSeparator} />
          <Text style={styles.dayInfoText}>{getClassesAmount(amount)}</Text>
        </Fragment>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dayInfoText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.05,
    textTransform: "uppercase",
    color: "#717A98"
  },
  dayStatus: {
    width: 7,
    height: 7,
    marginRight: 7,
    borderRadius: 7,
    backgroundColor: "#2F82FF"
  },
  dayStatusFree: {
    width: 7,
    height: 7,
    marginRight: 7,
    borderRadius: 7,
    backgroundColor: "#35C772"
  },
  dayInfoSeparator: {
    width: 3.5,
    height: 3.5,
    marginHorizontal: 7,
    backgroundColor: "#43495D",
    borderRadius: 3.5,
    opacity: 0.3
  }
})
