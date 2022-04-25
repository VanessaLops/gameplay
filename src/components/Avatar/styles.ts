import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        width: RFValue(49),
        height: RFValue(49),
        borderRadius: RFValue(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: RFValue(22)
    },
    avatar: {
        width: RFValue(46),
        height: RFValue(46),
        borderRadius: RFValue(8)
    }
});
