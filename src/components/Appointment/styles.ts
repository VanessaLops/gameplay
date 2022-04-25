import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12


    }, category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    }, player: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    playerinfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 13,
        marginLeft: 7
    }
});
