import { Image, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"

import { timeIcon } from "../../assets"

type Props = {
  start: string
  end: string
}

export const ClassTime: FC<Props> = ({ start, end }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={timeIcon} style={styles.image} />
      </View>
      <Text style={styles.time}>
        {start} – {end}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(242, 110, 54, 0.05)",
    borderRadius: 28
  },
  image: {
    width: 16,
    height: 16,
    resizeMode: "cover"
  },
  time: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#F26E36",
    marginLeft: 5
  }
})
