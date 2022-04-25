import React from "react";

import { styles } from "./styles";

import { ScrollView } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import categories from "../../utils/categories";
import { Category } from "../Category";

type CategoryProps = {
  categorySelected: string;
  //Props categoryId é o mesmo que const [categoryId,setCaregoryId] do useState == > aqui estou tipando ele
  setCategoryId: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  setCategoryId,
}: CategoryProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategoryId(category.id)}
        />
      ))}
    </ScrollView>
  );
}
