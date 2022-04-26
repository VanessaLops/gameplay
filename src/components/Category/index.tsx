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
  hasCheckBox?: boolean;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  hasCheckBox = false,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70, secondary85, secondary40 } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={40} height={40} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}
