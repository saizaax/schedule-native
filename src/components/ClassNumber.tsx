import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { ClassLate } from "./ClassLate"

type Props = {
  number: number
}

export const ClassNumber: FC<Props> = ({ number }) => {
  return (
    <View style={styles.number}>
      <Text style={styles.text}>{number} пара</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    backgroundColor: "#43495D",
    paddingHorizontal: 8,
    paddingTop: 5,
    paddingBottom: 6,
    borderRadius: 7
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17
  }
})
