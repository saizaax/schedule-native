import { Image, StyleSheet, View } from "react-native"
import React, { FC } from "react"

import { lateIcon } from "../../assets"

export const ClassLate: FC = () => {
  return (
    <View style={styles.isLate}>
      <Image source={lateIcon} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  isLate: {
    marginLeft: 5,
    width: 28,
    height: 28,
    backgroundColor: "#F44336",
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "cover"
  }
})
