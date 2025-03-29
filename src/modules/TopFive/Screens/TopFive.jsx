import React from "react";

import { View,Text, StyleSheet } from "react-native";

export default function TopFive(){
    return(
        <View style={styles.container}>
            <Text>Top 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
});