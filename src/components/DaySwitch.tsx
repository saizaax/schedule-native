import { StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { InlineButton } from "./InlineButton"
import { Day } from "./Day"
import { getCurrentWeekDays } from "../utils/getCurrentWeekDays"
import { useAppDispatch } from "../redux/store"
import { useSelector } from "react-redux"
import { selectDay, selectWeek } from "../redux/settings/selectors"
import { setDay, setDate } from "../redux/settings/slice"

type Props = {
  onPress: () => void
}

export const DaySwitch: FC<Props> = ({ onPress }) => {
  const dispatch = useAppDispatch()
  const currentDay = useSelector(selectDay)
  const currentWeek = useSelector(selectWeek)

  const handleDayChange = (date: string, day: string) => {
    dispatch(setDate(date))
    dispatch(setDay(day))
  }

  const currentWeekDays = React.useMemo(() => getCurrentWeekDays(), [])
  const daysPayload = [
    {
      name: "ПН",
      date: "22.04",
      isFree: false
    },
    {
      name: "ВТ",
      date: "23.04",
      isFree: false
    },
    {
      name: "СР",
      date: "24.04",
      isFree: false
    },
    {
      name: "ЧТ",
      date: "25.04",
      isFree: false
    },
    {
      name: "ПТ",
      date: "26.04",
      isFree: false
    },
    {
      name: "СБ",
      date: "27.04",
      isFree: true
    }
  ].map((day, index) => ({ ...day, date: currentWeekDays[index] }))

  const days = daysPayload.map((day, index) => (
    <Day
      day={day.name}
      date={day.date.slice(0, 5)}
      isActive={currentDay === day.name}
      isFree={day.isFree}
      onPress={() => handleDayChange(day.date, day.name)}
      key={index}
    />
  ))

  return (
    <View style={styles.daySwitch}>
      <View style={styles.week}>
        <Text style={styles.weekText}>Неделя {currentWeek}</Text>
        <InlineButton text="Выбрать" type="primary" onPress={onPress} />
      </View>
      <View style={styles.days}>{days}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  daySwitch: {
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15
  },
  week: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 9
  },
  weekText: {
    color: "#43495D",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19
  },
  days: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center"
  }
})
