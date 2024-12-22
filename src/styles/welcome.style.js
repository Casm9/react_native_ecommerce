<<<<<<< HEAD
import { theme } from '../constants/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    WelcomeTxt: (color, top) => ({
        fontSize: theme.sizes.xxLarge - 6,
        color: color,
        marginTop: top,
        marginHorizontal: theme.sizes.small
    }),
    searchIcon: {
        marginTop: theme.sizes.small,
        color: theme.colors.gray,
        marginHorizontal: theme.sizes.xSmall
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: theme.sizes.small,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.sizes.medium,
        marginVertical: theme.sizes.medium
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingHorizontal: theme.sizes.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.sizes.small,
        marginRight: theme.sizes.small
    },
    searchBtn: {
        width: 50,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 6,
        borderRadius: theme.sizes.medium
    }
});

export default styles;
=======
import { theme } from '../constants/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    WelcomeTxt: (color, top) => ({
        fontSize: theme.sizes.xxLarge - 6,
        color: color,
        marginTop: top,
        marginHorizontal: theme.sizes.small
    }),
    searchIcon: {
        marginTop: theme.sizes.small,
        color: theme.colors.gray,
        marginHorizontal: theme.sizes.xSmall
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: theme.sizes.small,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.sizes.medium,
        marginVertical: theme.sizes.medium
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingHorizontal: theme.sizes.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.sizes.small,
        marginRight: theme.sizes.small
    },
    searchBtn: {
        width: 50,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 6,
        borderRadius: theme.sizes.medium
    }
});

export default styles;
>>>>>>> 8c5af2cd61e0a5854906bc3de61b99cf2564fab4
