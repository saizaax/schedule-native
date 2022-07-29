import { Image, StyleSheet, TextInput, View } from "react-native"
import React, { FC } from "react"

import { checkIcon } from "../../assets"
import debounce from "lodash.debounce"
import { useAppDispatch } from "../redux/store"
import { fetchGroups } from "../redux/schedule/actions"
import { useSelector } from "react-redux"
import { selectGroup } from "../redux/schedule/selectors"

type Props = {
  initialValue?: string
  placeholder?: string
  onFocus: () => void
  onBlur: () => void
  isValid: boolean
  setIsValid: (value: boolean) => void
  setGroup: (value: string) => void
}

export const GroupInput: FC<Props> = ({
  initialValue,
  placeholder,
  onFocus,
  onBlur,
  isValid,
  setIsValid,
  setGroup
}) => {
  const dispatch = useAppDispatch()
  const group = useSelector(selectGroup)

  const [text, setText] = React.useState(initialValue ? initialValue : "")
  const inputRef = React.useRef<View>(null)

  const updateGroup = React.useCallback(
    debounce((name: string) => {
      if (name.length === 10) dispatch(fetchGroups({ name }))
    }, 200),
    []
  )

  const onChangeText = (value: string) => {
    setText(value)
    updateGroup(value)
  }

  React.useEffect(() => {
    setGroup(text)
    group.name ? setIsValid(true) : setIsValid(false)
  }, [text, group])

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
      {isValid ? <Image source={checkIcon} style={styles.icon} /> : null}
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
