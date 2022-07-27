import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { FC } from "react"
import { InlineButton } from "./InlineButton"
import { Day } from "./Day"

export const DaySwitch: FC = () => {
  const [activeDay, setActiveDay] = React.useState("ЧТ")

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
  ]

  const days = daysPayload.map((day, index) => (
    <Day
      day={day.name}
      date={day.date}
      isActive={activeDay === day.name}
      isFree={day.isFree}
      onPress={() => setActiveDay(day.name)}
      key={index}
    />
  ))

  return (
    <View style={styles.daySwitch}>
      <View style={styles.week}>
        <Text style={styles.weekText}>Неделя 12</Text>
        <Pressable>
          <InlineButton text="Выбрать" type="primary" onPress={() => {}} />
        </Pressable>
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
