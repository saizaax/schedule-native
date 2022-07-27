import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { ClassLate } from "./ClassLate"

type Props = {
  name: string
  isLate: boolean
}

export const ClassType: FC<Props> = ({ name, isLate }) => {
  const type = name === "Лекция" ? "secondary" : "primary"

  return (
    <View style={styles.container}>
      <View style={[styles.type, styles[type]]}>
        <Text style={styles.typeText}>{name}</Text>
      </View>
      {isLate && <ClassLate />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  type: {
    backgroundColor: "#2F82FF",
    paddingHorizontal: 8,
    paddingTop: 5,
    paddingBottom: 6,
    borderRadius: 7
  },
  primary: {
    backgroundColor: "#2F82FF"
  },
  secondary: {
    backgroundColor: "#35C772"
  },
  typeText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17
  }
})
