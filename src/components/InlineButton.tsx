import React, { FC, type PropsWithChildren } from "react"
import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
  text: string
  onPress: () => void
  styles?: { [key: string]: any }
  type: "primary"
}

export const InlineButton: FC<Props> = ({
  text,
  styles: propStyles,
  type,
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
    >
      <Text style={[styles.text, styles[type], propStyles]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19
  },
  primary: {
    color: "#2F82FF"
  }
})
