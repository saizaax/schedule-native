import React, { FC } from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"

type Props = {
  imageUrl: ImageSourcePropType
}

export const HelpScreen: FC<Props> = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUrl} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    aspectRatio: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#2F82FF",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 60,
    shadowColor: "rgba(47, 130, 255, 0.2)",
    borderRadius: 30,
    marginTop: 25
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    overflow: "visible"
  }
})
