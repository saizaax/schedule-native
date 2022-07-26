import React, { FC, type PropsWithChildren } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
  text: string
  onPress: () => void
  styles?: { [key: string]: any }
  type: "primary"
}

export const Button: FC<Props> = ({
  text,
  styles: propStyles,
  type,
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[type],
        propStyles,
        { opacity: pressed ? 0.8 : 1 }
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    border: "none",
    borderRadius: 10,
    width: "100%",
    height: 60,
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  },
  primary: {
    backgroundColor: "#2F82FF"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  }
})
