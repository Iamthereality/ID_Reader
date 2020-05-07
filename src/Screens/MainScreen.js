import React, { useEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from "react-native";
import { CommonActions } from '@react-navigation/native';

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/actions/postActions";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostsList } from "../components/PostsList";
import { sideMenuButton } from "../components/sideMenuButton";
import { STYLES, THEME } from "../styles/styles";
import {AppButton} from "../components/AppButton";

export const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    },[dispatch]);

    const allPosts = useSelector((state) => state.posts.allPosts);
    const loading = useSelector((state) => state.posts.loading);

    navigation.setOptions({
        title: 'История документов',
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'Распознать документ' }
                    iconName={ 'ios-add-circle' }
                    onPress={ () => navigation.dispatch(
                        CommonActions.navigate({
                            name: 'CreateScreen'
                        })
                    ) }
                />
            </HeaderButtons>
        ),
        ...sideMenuButton(navigation)
    });

    return (
        loading ? (
                <View style={ STYLES.centeredScreen }>
                    <ActivityIndicator
                        color={ THEME.MAIN_COLOR }
                        size={ 50 }
                    />
                </View>
            ) :
        allPosts.length > 0 ? (
            <PostsList
                data={ allPosts }
                navigation={ navigation }
            />
        ) : (
            <View style={ STYLES.centeredScreen }>
                <Text  style={ STYLES.centeredText } >
                    { `Вы не распознали ни одного документа` }
                </Text>
                <AppButton
                    onPress={ () => navigation.dispatch(
                        CommonActions.navigate({
                            name: 'CreateScreen'
                        })
                    ) }
                    title={ 'Распознать новый документ' }
                />

            </View>
        )
    );
};