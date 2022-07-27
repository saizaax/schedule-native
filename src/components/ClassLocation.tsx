import { Image, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"

import { locationIcon } from "../../assets"

type Props = {
  location: string
}

export const ClassLocation: FC<Props> = ({ location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={locationIcon} style={styles.image} />
      </View>
      <Text style={styles.location}>{location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },
  icon: {
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(53, 199, 114, 0.05)",
    borderRadius: 28
  },
  image: {
    width: 16,
    height: 16,
    resizeMode: "cover"
  },
  location: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#35C772",
    marginLeft: 5
  }
})
