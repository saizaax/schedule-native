import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import React, { FC } from "react"
import { Button } from "./Button"
import { Week } from "./Week"
import { useSelector } from "react-redux"
import { selectWeek } from "../redux/settings/selectors"
import { useAppDispatch } from "../redux/store"
import { setWeek } from "../redux/settings/slice"

type Props = {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

export const WeeksModal: FC<Props> = ({ isVisible, setIsVisible }) => {
  const dispatch = useAppDispatch()
  const currentWeek = useSelector(selectWeek)

  const handleWeekChange = (week: number) => {
    dispatch(setWeek(week))
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(!isVisible)}
    >
      <Pressable style={styles.container} onPress={() => setIsVisible(false)}>
        <TouchableOpacity style={styles.modal} activeOpacity={1}>
          <Text style={styles.title}>Выбор недели</Text>
          <View style={styles.weeks}>
            <View style={styles.row}>
              {[1, 2, 3, 4, 5, 6].map((week) => (
                <Week
                  number={week}
                  key={week}
                  isActive={week === currentWeek}
                  setActive={() => handleWeekChange(week)}
                />
              ))}
            </View>

            <View style={[styles.row, styles.rowMargin]}>
              {[7, 8, 9, 10, 11, 12].map((week) => (
                <Week
                  number={week}
                  key={week}
                  isActive={week === currentWeek}
                  setActive={() => handleWeekChange(week)}
                />
              ))}
            </View>

            <View style={[styles.row, styles.rowMargin]}>
              {[13, 14, 15, 16, 17, 18].map((week) => (
                <Week
                  number={week}
                  key={week}
                  isActive={week === currentWeek}
                  setActive={() => handleWeekChange(week)}
                />
              ))}
            </View>
          </View>
          <Button
            text="Применить"
            onPress={() => setIsVisible(false)}
            type="primary"
            styles={{ marginTop: 20 }}
          />
        </TouchableOpacity>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    color: "#43495D"
  },
  weeks: {
    marginTop: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowMargin: {
    marginTop: 12.5
  }
})
