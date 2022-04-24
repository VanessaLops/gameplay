import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  input: {
    height: RFValue(50),
    width: RFValue(200),
    borderWidth: 3,
  },

  image: {
    width: "100%",
    height: RFValue(360),
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: RFValue(40),
    marginBottom: RFValue(16),
  },
  content: {
    marginTop: RFValue(-40),
    paddingHorizontal: RFValue(50),
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: RFValue(15),
    textAlign: "center",
    marginBottom: RFValue(64),
  },
});
