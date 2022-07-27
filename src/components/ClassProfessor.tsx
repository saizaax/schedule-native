import { Image, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"

import { professorIcon } from "../../assets"

type Props = {
  professor: string
}

export const ClassProfessor: FC<Props> = ({ professor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={professorIcon} style={styles.image} />
      </View>
      <Text style={styles.professor}>{professor}</Text>
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
    backgroundColor: "rgba(47, 130, 255, 0.05)",
    borderRadius: 28
  },
  image: {
    width: 16,
    height: 16,
    resizeMode: "cover"
  },
  professor: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    color: "#2F82FF",
    marginLeft: 5
  }
})
