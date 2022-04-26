import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";

import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  AppointmentDetails: undefined;
};

export function Home() {
  const [category, setCategory] = useState("");

  type appointmentDetails = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<appointmentDetails>();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40",
      description:
        "É hoje que vamos chegar ao challender sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Mecenários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40",
      description:
        "É hoje que vamos chegar ao challender sem perder uma partida da md10",
    },
  ];
  function handleCategorySelect(categoryId: string) {
    //Se o ID atual é o mesmo clicado pelo usuário então desmarque
    //se não é o clicado atribui o ID
    return categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  //Navegação até os detalhes do item lista.
  function handleAppointmentDetails() {
    return navigation.navigate("AppointmentDetails");
  }
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategoryId={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment date={item} onPress={handleAppointmentDetails} />
          )}
        />
      </View>
    </Background>
  );
}
