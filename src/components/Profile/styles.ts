import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }, greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: RFValue(24),
        color: theme.colors.heading,
        marginRight: RFValue(6)
    },
    user: { flexDirection: 'row' },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: RFValue(24),
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
});
