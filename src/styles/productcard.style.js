<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        //alignItems: 'center',
        height: 260,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: theme.colors.secondary
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: theme.sizes.small
    },
    details: {
        padding: theme.sizes.small
    },
    price: {
        marginBottom: 10
    },
    title: {
        fontSize: theme.sizes.medium + 4,
        fontFamily: 'Roboto_700Bold'
    }
});

export default styles;
=======
import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        //alignItems: 'center',
        height: 260,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: theme.colors.secondary
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: theme.sizes.small
    },
    details: {
        padding: theme.sizes.small
    },
    price: {
        marginBottom: 10
    },
    title: {
        fontSize: theme.sizes.medium + 4,
        fontFamily: 'Roboto_700Bold'
    }
});

export default styles;
>>>>>>> 8c5af2cd61e0a5854906bc3de61b99cf2564fab4
