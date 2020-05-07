import React from 'react';
import { Text, View } from "react-native";
import {STYLES, THEME} from "../styles/styles";
import Ripple from "react-native-material-ripple";

export const AppButton = ({ onPress, disabled = false, disabledColor = THEME.DISABLED_COLOR, bgColor = THEME.MAIN_COLOR, title }) => {
    return (
        <Ripple
            rippleColor={ 'rgba(255, 255, 255, 0.5)' }
            onPress={ onPress }
            disabled={ disabled }
        >
            <View style={ {
                ...STYLES.button,
                backgroundColor: disabled ? disabledColor : bgColor
            } }>
                <Text style={ STYLES.buttonText }>
                    { title }
                </Text>
            </View>
        </Ripple>
    );
};