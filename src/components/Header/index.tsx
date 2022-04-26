import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient colors={[secondary100, secondary40]}
    style={styles.container}
    >
      <BorderlessButton >
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      {action && <View></View>}
    </LinearGradient>
  );
}
