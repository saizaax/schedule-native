import { StyleSheet, Text, View, Image } from "react-native"
import React, { FC } from "react"

import { breakIcon } from "../../assets"

type Props = {
  minutes: number
}

export const ClassBreak: FC<Props> = ({ minutes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.break}>
        <Image source={breakIcon} style={styles.icon} />
        <Text style={styles.text}>Перемена {minutes} минут</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "rgba(53, 199, 114, 0.05)",
    borderColor: "#35C772",
    borderWidth: 1,
    borderRadius: 15,
    borderStyle: "dashed",
    paddingVertical: 22,
    paddingHorizontal: 25
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "cover"
  },
  break: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#35C772",
    marginLeft: 5
  }
})
