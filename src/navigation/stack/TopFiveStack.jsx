import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopFive from "../../modules/TopFive/Screens/TopFive";
const Stack = createStackNavigator();

export default function TopFiveStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Top Five" component={TopFive} options={{title: "Top Five"}}/>
        </Stack.Navigator>
    );
}