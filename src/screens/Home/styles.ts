import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingHorizontal: RFValue(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + RFValue(26),
        marginBottom: RFValue(42)
    },
    content: {
        marginTop: 42
    }, matches: {
        marginTop: 24,
        marginLeft: 24
    }
});
