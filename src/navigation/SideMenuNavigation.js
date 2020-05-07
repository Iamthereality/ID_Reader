import React from 'react';

import { Ionicons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { AllPostsNavigation } from "./AllPostsNavigation";
import { AboutAppNavigation } from "./AboutAppNavigation";
import { CreatePostNavigation } from "./CreatePostNavigation";

import { THEME } from "../styles/styles";

const SideNavigation = createDrawerNavigator();
export const SideMenuNavigation = () => (
    <SideNavigation.Navigator
        initialRouteName={ 'MainScreen' }
        drawerContentOptions={ {
            activeTintColor: THEME.MAIN_COLOR,
            labelStyle: {
                fontFamily: 'open-regular',
                fontSize: 16
            }
        } }
    >
        <SideNavigation.Screen
            name={ 'MainScreen' }
            component={ AllPostsNavigation }
            options={ {
                drawerLabel: 'История документов',
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-albums' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
        <SideNavigation.Screen
            name={ 'CreateScreen' }
            component={ CreatePostNavigation }
            options={ {
                drawerLabel: 'Распознать документ',
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-add-circle' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
        <SideNavigation.Screen
            name={ 'AboutScreen' }
            component={ AboutAppNavigation }
            options={ {
                drawerLabel: 'О приложениии',
                drawerIcon: (info) => {
                    return (
                        <Ionicons
                            name={ 'ios-information-circle' }
                            size={ 24 }
                            color={ info.color }
                        />
                    );
                }
            } }
        />
    </SideNavigation.Navigator>
);