import React ,{useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import AvatarProfile from "../../../kernel/components/profile/AvatarProfile";
import { getAuth } from "firebase/auth";
import { Button } from "@rneui/base";
import MenuProfile from "../../../kernel/components/profile/MenuProfile";

export default function Profile(){

    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    const openModal = (title) => {
        console.log("titulo -> ", title);
    }
    return(
        <View style={styles.container}>
            <AvatarProfile
            user={user}
            />
            <MenuProfile openModal={openModal}/>
            <Button
            title={"Cerrar Sesion"}
            onPress={() => {
                auth.signOut();
            }}
            containerStyle={{margin:16}}
            style={{
                backgroundColor:"white",
                borderWidht:1,
                borderColor:"green"
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:64,
        backgroundColor:"white"
    },
})
































