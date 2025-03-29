import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../../../modules/home/screens/Home';
import HouseDetail from '../../../modules/home/screens/HouseDetail';

export default function HomeStack() {
    return(
        <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen
            name = "LoginStack"
            component={Home}
            options ={{title: "Iniciar Sesión"}}
            />
            <Stack.Screen
            name = "HouseDetail"
            component={HouseDetail}
            options ={{title: "House Detail"}}
            />
        </Stack.Navigator>
    )
}
