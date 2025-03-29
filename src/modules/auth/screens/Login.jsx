import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Image, Input, Button, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState ({ email: "", password: ""})
    const handleLogin = () => {
        if(isEmpty(email) || isEmpty(password)){
            setError({
                email:"El correo electrónico es requerido",
                password: "La contraseña es requerida"
            });
        }else{
            setError({email:"", password: ""});
            //console.log("Login", email, password);
            const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        }
    }
    return (
        <View style={styles.container}>
            <Image
            source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
            style={{width: 50, height:50}}
            />
            <View style={{margin: 16}}>
                <Input
                    placeholder="Correo electrónico"
                    label="Correo Electrónico"
                    keyboardType="email-address"
                    inputContainerStyle={{width:'100%'}}
                    onChange={({nativeEvent:{text}})=> setEmail(text)}
                    errorMessage={error.email}
                />
                <Input
                    placeholder="Contraseña"
                    label="Contraseña"
                    secureTextEntry={showPassword}
                    inputContainerStyle={{width:'100%'}}
                    rightIcon={
                        <Icon
                        name={showPassword ? "eye" : "eye-off"}
                        type="material-community"
                        onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    onChange={({nativeEvent:{text}})=> setPassword(text)}
                    errorMessage={error.password}
                />
                <Button
                title={"Iniciar Sesión"}
                onPress={handleLogin}
                />
                <Button
                type="clear"
                title='Crear cuenta'
                onPress={()=> navigation.navigate('CreateAccountStack')}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})