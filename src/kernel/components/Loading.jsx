import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "@rneui/base";
export default function Loading(props){
    const {title, activityColor,sizeActivity, color, isVisible} = props;//de esta manera volvemos dinamico el contenido
    return(
       <Overlay isVisible={isVisible} overlayStyle={[styles.container,{borderColor: color}]}>
            <View style={{justifyContent: "center", alignItems:"center"}}>
                <ActivityIndicator
                size={sizeActivity}
                color={activityColor}
                />
                <Text style={{fontWeight:'bold', fontSize:16}}>{title}</Text>
            </View>
       </Overlay>
    );
}

//componente basico de react
const styles = StyleSheet.create({
    container: {
        height: 250,
        width: '80%',
        backgroundColor: "white",
        borderRadius:16,
        borderWidth: 2,
    },
}) 