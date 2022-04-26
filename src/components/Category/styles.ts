import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: RFValue(104),
    height: RFValue(120),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(8),
    marginRight: RFValue(8),
  },

  content: {
    width: 100,
    height: RFValue(116),
    borderRadius: RFValue(8),
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: RFValue(20),
  },

  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: RFValue(10),
    height: RFValue(10),
    backgroundColor: theme.colors.primary,
    borderRadius: RFValue(10),
    padding: 5
  },

  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: RFValue(12),
    height: RFValue(12),
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: RFValue(2),
    borderRadius: RFValue(3)
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: RFValue(15),
    marginTop: 15
  },
});
