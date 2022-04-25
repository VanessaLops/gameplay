import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: RFValue(48),
        height: RFValue(48),
        backgroundColor: theme.colors.primary,
        borderRadius: RFValue(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
