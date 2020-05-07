import React from 'react';
import { View, Text } from 'react-native';
import { sideMenuButton } from "../components/sideMenuButton";
import { STYLES } from "../styles/styles";

export const AboutScreen = ({ navigation }) => {

    navigation.setOptions({
        headerTitle: 'О приложениии',
       ...sideMenuButton(navigation)
    });

    return (
        <View style={ STYLES.centeredScreen }>
            <Text style={ STYLES.centeredText }>
                { 'Данное приложение предназначено для распознавания документов' }
            </Text>
            <Text style={ STYLES.centeredText }>
                { 'Версия приложения ' }
                <Text style={ STYLES.aboutVersion }>
                    { '1.0.0' }
                </Text>
            </Text>
        </View>
    );
};