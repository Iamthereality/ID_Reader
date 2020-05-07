import { StyleSheet } from 'react-native';

const main_color = '#2544c3';
const alert_color = '#B32228';

export const STYLES = StyleSheet.create({
    mainScreen: {
        paddingTop: 15,
        paddingHorizontal: 5
    },
    postScreen: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 15
    },
    post: {
        marginBottom: 15,
        overflow: 'hidden',
        borderRadius: 5
    },
    button: {
        width: 300,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
      fontFamily: 'open-regular',
      fontSize: 18,
      color: '#FFFFFF'
    },
    postImg: {
        width: '100%',
        height: 200
    },
    postTitleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    postTitle: {
        color: '#FFFFFF',
        fontFamily: 'open-bold',
        fontSize: 20
    },
    postTextContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    postText: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'open-regular',
        fontSize: 22
    },
    centeredScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredText: {
        padding: 20,
        fontFamily: 'open-regular',
        fontSize: 18,
        textAlign: 'center'
    },
    createPostContainer: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    createPostTitle: {
        width: '100%',
        fontFamily: 'open-bold',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10
    },
    savePostButtonContainer: {
        marginTop: 15,
        width: '100%',
    },
    createPostDescription: {
        marginVertical: 15,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: main_color
    },
    aboutScreenText: {
        textAlign: 'center',
        fontFamily: 'open-regular',
        fontSize: 18
    },
    aboutVersion: {
        fontFamily: 'open-bold'
    }
});

export const THEME = {
    MAIN_COLOR: main_color,
    ALERT_COLOR: alert_color,
    DISABLED_COLOR: '#a1a1a1'
};