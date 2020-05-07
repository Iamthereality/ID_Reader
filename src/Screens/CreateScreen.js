import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import { useDispatch } from "react-redux";
import { CommonActions } from '@react-navigation/native';

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { sideMenuButton } from "../components/sideMenuButton";
import { STYLES, THEME } from "../styles/styles";
import { addPost } from "../store/actions/postActions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import Ripple from "react-native-material-ripple";


export const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const getPermissions = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL
        );
        if (status !== 'granted') {
            Alert.alert(`You didn't provide the permission to use phone camera`);
            return false;
        }
        return true;
    };

    const takePhoto = async () => {
        const permission = await getPermissions();

        if (!permission) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 1,
            allowsEditing: false,
            aspect: [3, 4],
        });

        if (img) {
            setImage(img.uri);
        }
    };

    const savePost = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: image,
        };

        dispatch(addPost(post));
        setText('');
        setImage(null);
        navigation.dispatch(CommonActions.navigate({
            name: 'MainScreen'
        }));
    };

    navigation.setOptions({
        headerTitle: 'Распознать документ',
        ...sideMenuButton(navigation),
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={ AppHeaderIcon }
            >
                <Item
                    title={ 'Take a photo' }
                    iconName={ 'ios-camera' }
                    onPress={ takePhoto }
                />
            </HeaderButtons>
        ),
    });

    return (
        <TouchableWithoutFeedback
            onPress={ () => Keyboard.dismiss() }
        >
            <ScrollView contentContainerStyle={ STYLES.createPostContainer }>
                <View
                    style={ {
                        width: '100%'
                    } }
                >
                    <Text style={ STYLES.createPostTitle }>
                        { 'Создание нового запроса' }
                    </Text>
                    <TextInput
                        style={ STYLES.createPostDescription }
                        placeholder={ 'Введите ID из Bitrix CRM' }
                        value={ text }
                        onChangeText={ setText }
                        keyboardType={ 'numeric' }
                    />
                    { !image && !text ? (
                            <View style={ STYLES.centeredScreen }>
                                <Text style={ {
                                    ...STYLES.centeredText,
                                    textAlign: 'center'
                                } }>
                                    { `Сделайте фотографию документа и укажите ID заявителя` }
                                </Text>
                            </View>
                        ) : !text && image ? (
                            <>
                                <View style={ STYLES.centeredScreen }>
                                    <Text style={ STYLES.centeredText }>
                                        { `Укажите ID заявителя` }
                                    </Text>
                                </View>
                                <Image
                                    style={ {
                                        ...STYLES.postImg,
                                        height: 300,
                                        marginVertical: 15
                                    } }
                                    source={ { uri: image } }
                                />
                            </>
                        ) : text && !image ? <>
                            <View style={ STYLES.centeredScreen }>
                                <Text style={ STYLES.centeredText }>
                                    { `Сделайте фотографию документа` }
                                </Text>
                            </View>
                        </> : (
                            <Image
                                style={ {
                                    ...STYLES.postImg,
                                    height: 300,
                                    marginVertical: 15
                                } }
                                source={ { uri: image } }
                            />
                        )
                    }
                </View>

                <Ripple
                    rippleColor={ 'rgba(255, 255, 255, 0.5)' }
                    onPress={ savePost }
                    disabled={ !text || !image }
                >
                    <View style={ {
                        ...STYLES.button,
                        backgroundColor: !text || !image ? THEME.DISABLED_COLOR : THEME.MAIN_COLOR
                    } }>
                        <Text style={ STYLES.buttonText }>
                            { 'Отправить на распознание' }
                        </Text>
                    </View>
                </Ripple>
            </ScrollView>
        </TouchableWithoutFeedback>
        // <AppCamera/>
    );
};