import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

const list1 = [//arreglo de listas, cada poscicion es un titulo y un icono
  { title: "Modificar Nombre", icon: "account-outline" },
  { title: "Modificar Correo", icon: "email-outline" },
  { title: "Modificar Contraseña", icon: "lock-outline" },
];

export default function MenuProfile (props) {//componente, funcion que obtiene un item y pinta list item con un icono
  const {openModal} = props;
  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => openModal(item.title)}>
      <Icon name={item.icon} type="material-community"/>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
        //opciones que se visualizan en forma de lista
      <FlatList    
        data={list1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});