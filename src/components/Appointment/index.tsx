import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { styles } from "./styles";

import categories from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentExportProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type AppointmentProps = TouchableOpacityProps & {
  date: AppointmentExportProps;
};

export function Appointment({ date, ...rest }: AppointmentProps) {
  const { owner } = date.guild;
  const { primary, on } = theme.colors;
  //Percorrendo a array filtrando apenas os id da categoria
  const [category] = categories.filter((item) => item.id === date.category);
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{date.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{date.date}</Text>
            </View>

            <View style={styles.playerinfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
