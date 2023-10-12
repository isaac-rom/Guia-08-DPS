import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import ContactStack from "./ContactStack";
import AboutStack from "./AboutStack";
const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStackNavigation} options={{ title: "Home" }} /> 
            <Tab.Screen name="contact" component={ContactStack} options={{ title: "Contact" }}/>
            <Tab.Screen name="about" component={AboutStack} options={{ title: "About" }} /> 
        </Tab.Navigator>
    );
}