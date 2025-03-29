import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "@rneui/base";

export default function ChangeNameProfile(props){
    const {isVisible, setIsVisible} = props;
    return(
        <Overlay isVisible = {isVisible} 
        overlayStyle={style.container}
        onBackdropPress={()=>setIsVisible(false)}
        >
            <Text>ChangeNameProfile</Text>
        </Overlay>
    )
}

const style = StyleSheet.create({
    container:{
        height: 'auto',
        width: '80%',
        backgroundColor:'white',
        borderRadius: 16,
        borderColor: 'green',
    }
})