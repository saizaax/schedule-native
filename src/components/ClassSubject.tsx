import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { ClassLate } from "./ClassLate"

type Props = {
  name: string
}

export const ClassSubject: FC<Props> = ({ name }) => {
  return <Text style={styles.subject}>{name}</Text>
}

const styles = StyleSheet.create({
  subject: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#43495D"
  }
})
