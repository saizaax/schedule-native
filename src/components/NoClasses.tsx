import { Image, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"

import { sleepEmoji } from "../../assets"

export const NoClasses: FC = () => {
  return (
    <View style={styles.card}>
      <Image source={sleepEmoji} style={styles.emoji} />
      <Text style={styles.title}>Сегодня пар нет!</Text>
      <Text style={styles.subtitle}>Можно спать спокойно</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 30,
    paddingTop: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(67, 73, 93, 0.1)",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center"
  },
  emoji: {
    width: 64,
    height: 64,
    resizeMode: "cover"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#43495D",
    marginTop: 10
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "rgba(67, 73, 93, 0.5)",
    marginTop: 5
  }
})
