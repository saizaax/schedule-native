import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"

type Props = {
  number: number
  isActive: boolean
  setActive: () => void
}

export const Week: FC<Props> = ({ number, isActive, setActive }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.week,
        isActive ? styles.weekActive : styles.weekInactive,
        { opacity: pressed ? 0.8 : 1 }
      ]}
      onPress={setActive}
    >
      <Text style={isActive ? styles.weekTextActive : styles.weekText}>
        {("0" + number).slice(-2)}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  week: {
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(113, 122, 152, 0.05)",
    justifyContent: "center",
    alignItems: "center"
  },
  weekActive: {
    backgroundColor: "rgba(47, 130, 255, 0.1)",
    borderColor: "#2F82FF"
  },
  weekInactive: {
    backgroundColor: "transparent",
    borderColor: "rgba(113, 122, 152, 0.05)"
  },
  weekText: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: "rgba(67, 72, 92, 0.7)"
  },
  weekTextActive: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: "#43495D"
  }
})
