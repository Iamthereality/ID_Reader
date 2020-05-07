import React from 'react';
import { View, ScrollView, Text, Image,  Alert } from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { CommonActions } from '@react-navigation/native';
import { STYLES, THEME } from "../styles/styles";
import { removePost } from "../store/actions/postActions";
import { AppButton } from "../components/AppButton";

export const PostScreen = ({ route, navigation }) => {
    const { postID } = route.params;
    const { date } = route.params;
    const post = useSelector((state) => {
        return state.posts.allPosts.find((post) => {
            return post.id === postID;
        });
    });
    const dispatch = useDispatch();

    const deletePost = () => {
        Alert.alert(
            `Вы собираетесь удалить эту запись`,
            'Вы уверены?',
            [
                {
                    text: 'Отменить',
                    onPress: () => {},
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(removePost(postID));
                    }
                },
            ],
            { cancelable: false },
        );
    };

    if (!post) {
        navigation.dispatch(CommonActions.goBack());
        return null;
    }

    navigation.setOptions({
        title: `Добавлен ${ new Date(date).toLocaleDateString() } ${ new Date(date).toLocaleTimeString() }`,
    });

    return (
        <ScrollView
            contentContainerStyle={ STYLES.postScreen }
        >
            <Image
                source={ { uri: post.img } }
                style={ {
                    ...STYLES.postImg,
                    height: 300
                } }
            />
            <View style={ STYLES.postTextContainer }>
                <Text style={ STYLES.postText }>
                    { `ID: ${ post.text }` }
                </Text>
            </View>
            <AppButton
                onPress={ deletePost }
                bgColor={ THEME.ALERT_COLOR }
                title={ 'Удалить запись с телефона' }
            />
        </ScrollView>
    );
};