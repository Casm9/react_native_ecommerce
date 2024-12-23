<<<<<<< HEAD
import { Feather, Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import styles from '../styles/welcome.style';

function WelcomeComponent() {
    return (
        <View>
            <View>
                <Text style={styles.WelcomeTxt(theme.colors.black, 70)}>Find The Most</Text>
                <Text style={styles.WelcomeTxt(theme.colors.primary, 0)}>Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => {
                    console.log("I am tapped");
                }}>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput placeholder='what are you looking for?' style={styles.searchInput} />
                </View>
                <View style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={36} color={theme.colors.offWhite} />
                </View>
            </View>
        </View>
    );
}

export default WelcomeComponent;
=======
import { Feather, Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import styles from '../styles/welcome.style';

function WelcomeComponent() {
    return (
        <View>
            <View>
                <Text style={styles.WelcomeTxt(theme.colors.black, 70)}>Find The Most</Text>
                <Text style={styles.WelcomeTxt(theme.colors.primary, 0)}>Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => {
                    console.log("I am tapped");
                }}>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput placeholder='what are you looking for?' style={styles.searchInput} />
                </View>
                <View style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={36} color={theme.colors.offWhite} />
                </View>
            </View>
        </View>
    );
}

export default WelcomeComponent;
>>>>>>> 8c5af2cd61e0a5854906bc3de61b99cf2564fab4
