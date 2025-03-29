import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '../../modules/auth/screens/CreateAccount';
import Login from '../../modules/auth/screens/Login';
const Stack = createStackNavigator();

export default function LoginStack() {
    return(
        <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen
            name = "LoginStack"
            component={Login}
            options ={{title: "Iniciar Sesión"}}
        />
        <Stack.Screen
            name = "CreateAccountStack"
            component={CreateAccount}
            options ={{title: "Crear Cuenta"}}
        />
        </Stack.Navigator>
    )
}
