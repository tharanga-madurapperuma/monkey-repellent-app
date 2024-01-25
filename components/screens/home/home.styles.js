import { StyleSheet } from "react-native";
import Colors from '../../../constants/themeSettings'

export const styles = StyleSheet.create({
    turnOnBtn: {
        paddingVertical:  15,
        paddingHorizontal: 30,
        marginTop: 60,
        backgroundColor: "#48EBE2",
        borderRadius: 30,
    },
    turnOffBtn: {
        paddingVertical:  15,
        paddingHorizontal: 30,
        marginTop: 10,
        backgroundColor: "#48EBE2",
        borderRadius: 30,
    },

    headText: {
        color: "#202020",
        fontSize: 30,
        fontWeight: 'bold',
    },

    versionText: {
        position: 'absolute',
        bottom: 10
    },  

    onText: {
        fontSize: 18,
        color: "#202020",
    },

    offText: {
        fontSize: 18,
        color: "#202020",
    },

    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})