import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type CategoryProps = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}>
            <Icon width={40} height={40} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
