import { theme } from "../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.sizes.small + 2,
        marginTop: theme.sizes.medium
    },
    headerTitle: {
        fontSize: theme.sizes.xLarge - 4,
        fontFamily: "Roboto_700Bold"
    },
    header: {
        width: 350,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default styles;