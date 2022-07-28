import { Pressable, StyleSheet, View, Image } from "react-native"
import React, { FC } from "react"

import {
  menuLocationIcon,
  menuScheduleIcon,
  menuSettingsIcon,
  menuSemesterIcon,
  menuProfessorIcon,
  menuSemesterActiveIcon,
  menuProfessorActiveIcon,
  menuLocationActiveIcon,
  menuSettingsActiveIcon,
  menuScheduleActiveIcon
} from "../../assets/"

type Props = {
  location: "schedule" | "semester" | "location" | "professor" | "settings"
  navigation: any
}

export const Tabs: FC<Props> = ({ location, navigation }) => {
  return (
    <View style={styles.tabs}>
      <Pressable
        style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.8 : 1 }]}
        onPress={() => navigation.navigate("Schedule")}
      >
        {location === "schedule" ? (
          <Image source={menuScheduleActiveIcon} style={styles.icon} />
        ) : (
          <Image source={menuScheduleIcon} style={styles.icon} />
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.8 : 1 }]}
        onPress={() => navigation.navigate("Semester")}
      >
        {location === "semester" ? (
          <Image source={menuSemesterActiveIcon} style={styles.icon} />
        ) : (
          <Image source={menuSemesterIcon} style={styles.icon} />
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.8 : 1 }]}
        onPress={() => navigation.navigate("Location")}
      >
        {location === "location" ? (
          <Image source={menuLocationActiveIcon} style={styles.icon} />
        ) : (
          <Image source={menuLocationIcon} style={styles.icon} />
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.8 : 1 }]}
        onPress={() => navigation.navigate("Professor")}
      >
        {location === "professor" ? (
          <Image source={menuProfessorActiveIcon} style={styles.icon} />
        ) : (
          <Image source={menuProfessorIcon} style={styles.icon} />
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.tab, { opacity: pressed ? 0.8 : 1 }]}
        onPress={() => navigation.navigate("Settings")}
      >
        {location === "settings" ? (
          <Image source={menuSettingsActiveIcon} style={styles.icon} />
        ) : (
          <Image source={menuSettingsIcon} style={styles.icon} />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    height: 85,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingBottom: 35,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 1
  },
  tab: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: "cover"
  }
})
