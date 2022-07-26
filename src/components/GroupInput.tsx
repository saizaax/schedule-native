import { Image, StyleSheet, TextInput, View } from "react-native"
import React, { FC } from "react"

import { checkIcon } from "../../assets"

type Props = {
  initialValue?: string
  placeholder?: string
  onFocus: () => void
  onBlur: () => void
}

export const GroupInput: FC<Props> = ({
  initialValue,
  placeholder,
  onFocus,
  onBlur
}) => {
  const [text, onChangeText] = React.useState(initialValue ? initialValue : "")
  const inputRef = React.useRef<View>(null)

  return (
    <View style={styles.container} ref={inputRef}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder ? placeholder : ""}
        autoCapitalize="characters"
        autoCorrect={false}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {text ? <Image source={checkIcon} style={styles.icon} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: 20
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 19,
    paddingVertical: 18,
    borderRadius: 10,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#43495D",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.05)"
  },
  icon: {
    position: "absolute",
    width: 16,
    height: 16,
    right: 19
  }
})
