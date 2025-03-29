import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Image, Input, Button, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
export default function CreateAccount(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({ email: "", password: "" })
    const handleLogin = () => {
        if(isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)){
            setError({
                email: isEmpty(email) ? "El correo electrónico es requerido" : "",
                password: isEmpty(password) ? "La contraseña es requerida" : "",
                confirmPassword: isEmpty(confirmPassword) ? "La confirmación de la contraseña es requerida" : ""
            });
        } else if (password !== confirmPassword) {
            setError({
                email: "",
                password: "Las contraseñas no coinciden",
                confirmPassword: "Las contraseñas no coinciden"
            });
        } else {
            setError({ email: "", password: "", confirmPassword: "" });
            console.log("Login", email, password);
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
                <Input
                    placeholder="Confirmar Contraseña"
                    label="Confirmar contraseña"
                    secureTextEntry={showPassword2}
                    inputContainerStyle={{width:'100%'}}
                    rightIcon={
                        <Icon
                        name={showPassword2 ? "eye" : "eye-off"}
                        type="material-community"
                        onPress={() => setShowPassword2(!showPassword2)}
                        />
                    }
                    onChange={({nativeEvent:{text}})=> setConfirmPassword(text)}
                    errorMessage={error.password}
                />
                <Button
                title={"Crear Cuenta"}
                onPress={handleLogin}
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