import React, { FC } from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"

type Props = {
  imageUrl: ImageSourcePropType
}

export const Banner: FC<Props> = ({ imageUrl }) => {
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
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#2F82FF",
    shadowOffset: {
      width: 4,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 60,
    shadowColor: "rgba(47, 130, 255, 0.2)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    overflow: "visible"
  }
})
