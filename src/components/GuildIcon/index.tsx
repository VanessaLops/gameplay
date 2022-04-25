import React from "react";

import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://aliancatraducoes.com/wp-content/uploads/2019/10/o-que-sao-cat-tools.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
